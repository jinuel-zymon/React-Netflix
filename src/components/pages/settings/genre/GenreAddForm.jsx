import { queryData } from '@/components/helpers/queryData';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'

const GenreAddForm = ({setIsAdd, setIsSuccess, itemEdit, setIsValidate, setMessage }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/genre/${itemEdit.genre_aid}` : `/v1/genre`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["genre"],
      });

      // show error box
      if (data.success) {
        setIsAdd(false);
        setIsSuccess(true);
      } else {
        setIsValidate(true)
        setMessage(data.error)
        // dispatch(setSuccess(true));
        // dispatch(setMessage(`Record Successfully updated.`));
        // dispatch(setIsAdd(false));
      }
    },
  });

  const initVal = {
    genre_title: itemEdit ? itemEdit.genre_title : "",
    genre_title_old: itemEdit ? itemEdit.genre_title : "",
  };

  const yupSchema = Yup.object({
    genre_title: Yup.string().required("Required"),
 
  });

  return (
    <div className='my-3'>
      <form action="" className='max-w-[250px]'>
        <div className="input-wrap">
          <label htmlFor="">Genre</label>
          <input type="text" />
          <span>Required</span>
        </div>

        <div className='settings-action flex justify-end gap-3 my-3'>
          <button className='btn btn-accent w-[80px] flex justify-center'>Add</button>
          <button className='btn btn-cancel w-[80px] flex justify-center'onClick={()=> setIsAdd(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default GenreAddForm