import useQueryData from "@/components/custom-hook/useQueryData";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import {
  InputPhotoUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import { devImgPath } from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import ModalWrapper from "@/components/partials/modals/ModalWrapper";
import SpinnerButton from "@/components/partials/spinners/SpinnerButton";
import ToastSuccess from "@/components/partials/ToastSuccess";
import { setIsAdd, setMessage, setSuccess, setValidate } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { ImagePlusIcon, Upload, X } from "lucide-react";
import React from "react";
import * as Yup from "Yup";

const MoviesModalAdd = ({ itemEdit }) => {
  const {dispatch} = React.useContext(StoreContext)
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/movies/${itemEdit.movies_aid}` : `/v1/movies`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["movies"],
      });

      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
      } else {
        dispatch(setValidate(true))
        dispatch(setMessage(data.error))

      }
    },
  });


  const {
    isLoading:loadingCategory,
    isFetching:fetchingCategory,
    error:errorCategory,
    data: category,
  } = useQueryData(
    `/v1/category`, // endpoint
    "get", // method
    "category"
  );

  const {
    isLoading:loadingRating,
    isFetching:fetchingRating,
    error:errorRating,
    data: ratings,
  } = useQueryData(
    `/v1/ratings`, // endpoint
    "get", // method
    "ratings"
  );

  const {
    isLoading:loadingGenre,
    isFetching:fetchingGenre,
    error:errorGenre,
    data: genre,
  } = useQueryData(
    `/v1/genre`, // endpoint
    "get", // method
    "genre"
  );

  const handleClose = () => dispatch(setIsAdd(false));

  const { uploadPhoto, handleChangePhoto, photo } =
    useUploadPhoto("/v1/upload-photo");

  const initVal = {
    movies_title: itemEdit ? itemEdit.movies_title : "",
    movies_year: itemEdit ? itemEdit.movies_year : "",
    movies_genre: itemEdit ? itemEdit.movies_genre : "",
    movies_rating: itemEdit ? itemEdit.movies_rating : "",
    movies_duration: itemEdit ? itemEdit.movies_duration : "",
    movies_summary: itemEdit ? itemEdit.movies_summary : "",
    movies_cast: itemEdit ? itemEdit.movies_cast : "",
    movies_category: itemEdit ? itemEdit.movies_category : "",
    movies_title_old: itemEdit ? itemEdit.movies_title : "",
  };

  const yupSchema = Yup.object({
    movies_title: Yup.string().required("Required"),
    movies_year: Yup.string().required("Required"),
    movies_genre: Yup.string().required("Required"),
    movies_rating: Yup.string().required("Required"),
    movies_duration: Yup.string().required("Required"),
    movies_summary: Yup.string().required("Required"),
    movies_cast: Yup.string().required("Required"),
    movies_category: Yup.string().required("Required"),
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
            movies_image:
              (itemEdit?.movies_image === "" && photo) ||
              (!photo && "") ||
              (photo === undefined && "") ||
              (photo && itemEdit?.movies_image !== photo?.name)
                ? photo?.name || ""
                : itemEdit?.movies_image || "",
          });
        }}
      >
        {(props) => {
          return (
            <Form>
              <div className='modal-main absolute top-0 right-0 h-screen w-[320px] bg-secondary grid grid-row-[auto,_1fr,_auto]'>
                <div className='modal-header p-3 px-4 pb-0 flex justify-between items-center'>
                  <h3 className='mb-0'>Add Movie</h3>
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
                            : devImgPath + "/" + itemEdit?.movies_image // check db
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
                      name='movies_title'
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className='input-wrap'>
                    <InputText
                      label='Year'
                      type='text'
                      name='movies_year'
                      disabled={mutation.isPending}
                    />
                  </div>

                  <div className='input-wrap'>
                  <InputSelect
                        label="Category"
                        name="movies_category"
                        disabled={mutation.isLoading || loadingCategory}
                      >
                        {loadingCategory ? (
                          <option value="" hidden>
                            Loading...
                          </option>
                        ) : errorCategory ? (
                          <option value="" disabled>
                            Error
                          </option>
                        ) : (
                          <optgroup label="Select Category">
                            <option value="" hidden></option>
                            {category?.data.length > 0 ? (
                              <>
                                {category?.data.map((cItem, key) => {
                                  return (
                                    cItem.category_is_active === 1 
                                       && (
                                      <option
                                        value={cItem.category_title}
                                        key={key}
                                      >
                                        {cItem.category_title}
                                      </option>
                                    )
                                  )
                                })}
                              </>
                            ) : (
                              <option value="" disabled>
                                No data
                              </option>
                            )}
                          </optgroup>
                        )}
                      </InputSelect>
                  </div>

                  <div className='input-wrap'>
                  <InputSelect
                        label="Rating"
                        name="movies_rating"
                        disabled={mutation.isLoading || loadingRating}
                      >
                        {loadingRating ? (
                          <option value="" hidden>
                            Loading...
                          </option>
                        ) : errorRating ? (
                          <option value="" disabled>
                            Error
                          </option>
                        ) : (
                          <optgroup label="Select Rating">
                            <option value="" hidden></option>
                            {ratings?.data.length > 0 ? (
                              <>
                                {ratings?.data.map((cItem, key) => {
                                  return (
                                    cItem.ratings_is_active === 1 
                                       && (
                                      <option
                                        value={cItem.ratings_title}
                                        key={key}
                                      >
                                        {cItem.ratings_title}
                                      </option>
                                    )
                                  )
                                })}
                              </>
                            ) : (
                              <option value="" disabled>
                                No data
                              </option>
                            )}
                          </optgroup>
                        )}
                      </InputSelect>
                  </div>

                  <div className='input-wrap'>
                  <InputSelect
                        label="Genre"
                        name="movies_genre"
                        disabled={mutation.isLoading || loadingGenre}
                      >
                        {loadingGenre ? (
                          <option value="" hidden>
                            Loading...
                          </option>
                        ) : errorGenre ? (
                          <option value="" disabled>
                            Error
                          </option>
                        ) : (
                          <optgroup label="Select Genre">
                            <option value="" hidden></option>
                            {genre?.data.length > 0 ? (
                              <>
                                {genre?.data.map((cItem, key) => {
                                  return (
                                    cItem.genre_is_active === 1 
                                       && (
                                      <option
                                        value={cItem.genre_title}
                                        key={key}
                                      >
                                        {cItem.genre_title}
                                      </option>
                                    )
                                  )
                                })}
                              </>
                            ) : (
                              <option value="" disabled>
                                No data
                              </option>
                            )}
                          </optgroup>
                        )}
                      </InputSelect>
                  </div>

                  <div className='input-wrap'>
                    <InputText
                      label='Duration'
                      type='text'
                      name='movies_duration'
                      disabled={mutation.isPending}
                    />
                  </div>

                  <div className='input-wrap'>
                    <InputTextArea
                      label='Summary'
                      name='movies_summary'
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className='input-wrap'>
                    <InputTextArea
                      label='Cast'
                      name='movies_cast'
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

export default MoviesModalAdd;
