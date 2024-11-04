import { InputText } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import SpinnerButton from "@/components/partials/spinners/SpinnerButton";
import { setIsAdd, setMessage, setSuccess, setValidate } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "Yup";

const GenreAddForm = ({itemEdit}) => {
  const {dispatch} = React.useContext(StoreContext)
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
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
      } else {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
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
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          mutation.mutate(values);
        }}
      >
        {(props) => {
          return (
            <Form className='max-w-[250px]'>
              <div className='input-wrap'>
                <InputText
                  label='Genre'
                  type='text'
                  name='genre_title'
                  disabled={mutation.isPending}
                />
              </div>

              <div className='settings-action flex justify-end gap-3 my-3'>
                <button
                  className='btn btn-accent w-[80px] flex justify-center'
                  type='submit'
                >
                  {mutation.isPending ? <SpinnerButton /> : "Save"} Add
                </button>
                <button
                  className='btn btn-cancel w-[80px] flex justify-center'
                  onClick={() => dispatch(setIsAdd(false))}
                >
                  Cancel
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default GenreAddForm;
