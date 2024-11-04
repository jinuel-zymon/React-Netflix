import { InputText } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import SpinnerButton from "@/components/partials/spinners/SpinnerButton";
import { setIsAdd, setMessage, setSuccess, setValidate } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "Yup";

const CategoryAddForm = ({itemEdit}) => {
  const {dispatch} = React.useContext(StoreContext)
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/category/${itemEdit.category_aid}` : `/v1/category`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["category"],
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
    category_title: itemEdit ? itemEdit.category_title : "",
    category_title_old: itemEdit ? itemEdit.category_title : "",
  };

  const yupSchema = Yup.object({
    category_title: Yup.string().required("Required"),
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
                  label='Category'
                  type='text'
                  name='category_title'
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

export default CategoryAddForm;
