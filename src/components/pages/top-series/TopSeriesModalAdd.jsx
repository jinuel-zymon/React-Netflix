import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import {
  InputPhotoUpload,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import { devImgPath } from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import ModalWrapper from "@/components/partials/modals/ModalWrapper";
import SpinnerButton from "@/components/partials/spinners/SpinnerButton";
import ToastSuccess from "@/components/partials/ToastSuccess";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { ImagePlusIcon, Upload, X } from "lucide-react";
import React from "react";
import * as Yup from "Yup";

const TopSeriesModalAdd = ({ setIsAdd, setIsSuccess, itemEdit, setIsValidate, setMessage }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/top-series/${itemEdit.topseries_aid}` : `/v1/top-series`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["top-series"],
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

  const handleClose = () => setIsAdd(false);

  const { uploadPhoto, handleChangePhoto, photo } =
    useUploadPhoto("/v1/upload-photo");

  const initVal = {
    topseries_title: itemEdit ? itemEdit.topseries_title : "",
    topseries_year: itemEdit ? itemEdit.topseries_year : "",
    topseries_genre: itemEdit ? itemEdit.topseries_genre : "",
    topseries_rating: itemEdit ? itemEdit.topseries_rating : "",
    topseries_duration: itemEdit ? itemEdit.topseries_duration : "",
    topseries_summary: itemEdit ? itemEdit.topseries_summary : "",
    topseries_cast: itemEdit ? itemEdit.topseries_cast : "",
    topseries_ranking: itemEdit ? itemEdit.topseries_ranking : "",
    topseries_title_old: itemEdit ? itemEdit.topseries_title : "",
  };

  const yupSchema = Yup.object({
    topseries_title: Yup.string().required("Required"),
    topseries_year: Yup.string().required("Required"),
    topseries_genre: Yup.string().required("Required"),
    topseries_rating: Yup.string().required("Required"),
    topseries_duration: Yup.string().required("Required"),
    topseries_summary: Yup.string().required("Required"),
    topseries_cast: Yup.string().required("Required"),
    topseries_ranking: Yup.string().required("Required"),
  });

  return (
    <ModalWrapper>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          uploadPhoto();
          mutation.mutate({
            ...values,
            topseries_image:
              (itemEdit?.topseries_image === "" && photo) ||
              (!photo && "") ||
              (photo === undefined && "") ||
              (photo && itemEdit?.topseries_image !== photo?.name)
                ? photo?.name || ""
                : itemEdit?.topseries_image || "",
          });
        }}
      >
        {(props) => {
          return (
            <Form>
              <div className='modal-main absolute top-0 right-0 h-screen w-[320px] bg-secondary grid grid-row-[auto,_1fr,_auto]'>
                <div className='modal-header p-3 px-4 pb-0 flex justify-between items-center'>
                  <h3 className='mb-0'>Add Series</h3>
                  <button onClick={handleClose}>
                    <X />
                  </button>
                </div>

                <div className='modal-body p-3 px-4'>
                  <div className='input-wrap relative  group input-photo-wrap h-[150px] '>
                    {itemEdit === null && photo === null ? (
                      <div className='w-full  rounded-md flex justify-center items-center flex-col h-full'>
                        <ImagePlusIcon
                          size={50}
                          strokeWidth={1}
                          className='opacity-20 group-hover:opacity-50 transition-opacity'
                        />
                        <small className='opacity-20 group-hover:opacity-50 transition-opacity'>
                          Upload Photo
                        </small>
                      </div>
                    ) : (
                      <img
                        src={
                          photo
                            ? URL.createObjectURL(photo) // preview
                            : devImgPath + "/" + itemEdit?.topseries_image // check db
                        }
                        alt='employee photo'
                        className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto ${
                          mutation.isPending
                            ? "opacity-40 pointer-events-none"
                            : ""
                        }`}
                      />
                    )}

                    <InputPhotoUpload
                      name='photo'
                      type='file'
                      id='photo'
                      accept='image/*'
                      title='Upload photo'
                      onChange={(e) => handleChangePhoto(e)}
                      onDrop={(e) => handleChangePhoto(e)}
                      className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full ${
                        mutation.isPending ? "pointer-events-none" : ""
                      }`}
                    />
                  </div>

                  <div className='input-wrap'>
                    <InputText
                      label='Title'
                      type='text'
                      name='topseries_title'
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className='input-wrap'>
                    <InputText
                      label='Year'
                      type='text'
                      name='topseries_year'
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className='input-wrap'>
                    <InputText
                      label='Genre'
                      type='text'
                      name='topseries_genre'
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className='input-wrap'>
                    <InputText
                      label='Rating'
                      type='text'
                      name='topseries_rating'
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className='input-wrap'>
                    <InputText
                      label='Duration'
                      type='text'
                      name='topseries_duration'
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className='input-wrap'>
                    <InputText
                      label='Ranking'
                      type='text'
                      name='topseries_ranking'
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className='input-wrap'>
                    <InputTextArea
                      label='Summary'
                      name='topseries_summary'
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className='input-wrap'>
                    <InputTextArea
                      label='Cast'
                      name='topseries_cast'
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>

                <div className='modal-action flex justify-end gap-3 items-center p-3 px-4 pb-0'>
                  <button
                    className='btn btn-accent'
                    disabled={mutation.isPending}
                    type='submit'
                  >
                    {mutation.isPending ? <SpinnerButton /> : "Save"}
                  </button>
                  <button
                    className='btn btn-cancel'
                    type='reset'
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </ModalWrapper>
  );
};

export default TopSeriesModalAdd;
