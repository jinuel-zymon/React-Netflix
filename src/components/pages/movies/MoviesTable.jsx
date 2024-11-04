import LoaderTable from "@/components/partials/LoaderTable";
import Pill from "@/components/partials/Pill";
import SpinnerTable from "@/components/partials/spinners/SpinnerTable";
import {
  Archive,
  ArchiveRestore,
  FileVideo,
  Pencil,
  Plus,
  Search,
  Trash,
} from "lucide-react";
import React from "react";
import MoviesModalView from "./MoviesModalView";
import MoviesModalAdd from "./MoviesModalAdd";
import NoData from "@/components/partials/icons/NoData";
import ServerError from "@/components/partials/icons/ServerError";
import useQueryData from "@/components/custom-hook/useQueryData";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import ToastSuccess from "@/components/partials/ToastSuccess";
import ModalValidate from "@/components/partials/modals/ModalValidate";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd, setIsConfirm, setIsDelete } from "@/components/store/storeAction";

const MoviesTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isView, setIsView] = React.useState(false); //Show/Hide of modalView

  const [id, setId] = React.useState(null);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [isActive, setIsActive] = React.useState(0);

  let counter = 0;

  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v1/movies`, // endpoint
    "get", // method
    "movies"
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  const handleEdit = (item) => {
    setIsAdd(true);
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.movies_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setIsActive(0);
    setId(item.movies_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsConfirm(true));
    setIsActive(1);
    setId(item.movies_aid);
  };

  const handleView = (item) => {
    setIsView(true);
    setItemEdit(item);
  };

  return (
    <>
      <div className='p-4 m-4'>
        <div className='flex justify-between items-center'>
          <form action=''>
            <div className='input-wrap relative'>
              <input
                type='text'
                placeholder='keyword'
                className='bg-primary px-2 py-1 placeholder:opacity-30 outline-none border border-transparent focus:border-accent !pl-8 !text-dark rounded-md'
              />
              <Search
                className='absolute top-2 left-1.5 opacity-25'
                size={20}
              />
            </div>
          </form>
          <button className='btn btn-accent' onClick={handleAdd}>
            <Plus size={14} />
            Add New
          </button>
        </div>

        <div className='table_wrapper bg-primary p-4 mt-5 rounded-md relative'>
          {!isLoading || (isFetching && <SpinnerTable />)}
          <table>
            <thead>
              <tr>
                <td>#</td>
                <td>Title</td>
                <td>Year</td>
                <td>Status</td>
              </tr>
            </thead>

            <tbody>
              {((isLoading && !isFetching) || result?.data.length === 0) && (
                <tr>
                  <td colSpan='100%'>
                    {isLoading ? (
                      <LoaderTable count={30} cols={6} />
                    ) : (
                      <NoData />
                    )}
                  </td>
                </tr>
              )}

              {error && (
                <tr>
                  <td colSpan='100%'>
                    <ServerError />
                  </td>
                </tr>
              )}

              {result?.data.map((item, key) => {
                counter++;
                return (
                  <tr key={key}>
                    <td>{counter}.</td>
                    <td>{item.movies_title}</td>
                    <td>{item.movies_year}</td>
                    <td>
                      <Pill isActive={item.movies_is_active} />
                    </td>
                    <td>
                      <ul className='table-action'>
                        {item.movies_is_active ? (
                          <>
                            <li>
                              <button
                                data-tooltip='View'
                                onClick={() => handleView(item)}
                              >
                                <FileVideo size={15} />
                              </button>
                            </li>
                            <li>
                              <button
                                data-tooltip='Edit'
                                onClick={() => handleEdit(item)}
                              >
                                <Pencil size={15} />
                              </button>
                            </li>
                            <li>
                              <button
                                data-tooltip='Archive'
                                onClick={() => handleArchive(item)}
                              >
                                <Archive size={15} />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                data-tooltip='Restore'
                                onClick={() => handleRestore(item)}
                              >
                                <ArchiveRestore size={15} />
                              </button>
                            </li>
                            <li>
                              <button
                                data-tooltip='Delete'
                                onClick={() => handleDelete(item)}
                              >
                                <Trash size={15} />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {store.isConfirm && (
        <ModalConfirm
          queryKey='movies'
          mysqlApiArchive={`/v1/movies/active/${id}`}
          active={isActive}

        />
      )}
      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/v1/movies/${id}`}
          queryKey='movies'

        />
      )}

      {store.isAdd && (<MoviesModalAdd itemEdit={itemEdit} />)}
      {isView && <MoviesModalView itemEdit={itemEdit} setIsView={setIsView} />}
      {store.success && <ToastSuccess />}
      {store.validate && (<ModalValidate />)}
    </>
  );
};

export default MoviesTable;
