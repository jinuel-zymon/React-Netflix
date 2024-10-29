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

const MoviesTable = () => {
  const [isConfirm, setIsConfirm] = React.useState(false); //Show/Hide of modalConfirm
  const [isDelete, setIsDelete] = React.useState(false); //Show/Hide of modalDelete
  const [isSuccess, setIsSuccess] = React.useState(false); //Show/Hide of toastSuccess
  const [id, setId] = React.useState(null);
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

  const handleDelete = () => {
    setIsDelete(true);
  };

  const handleArchive = (item) => {
    setIsConfirm(true);
    setIsActive(0);
    setId(item.movies_aid);
  };
  const handleRestore = (item) => {
    setIsConfirm(true);
    setIsActive(1);
    setId(item.movies_aid);
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
          <button className='btn btn-accent'>
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
                              <button data-tooltip='View'>
                                <FileVideo size={15} />
                              </button>
                            </li>
                            <li>
                              <button data-tooltip='Edit'>
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
                                onClick={() => handleDelete()}
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

      {isConfirm && (
        <ModalConfirm
          setIsConfirm={setIsConfirm}
          queryKey='movies'
          mysqlApiArchive={`/v1/movies/active/${id}`}
          active={isActive}
          setIsSuccess={setIsSuccess}
        />
      )}
      {isDelete && 
      <ModalDelete 
        setIsDelete={setIsDelete}
        mysqlApiDelete={`/v1/movies/${id}`}
        queryKey='movies' 
        setIsSuccess={setIsSuccess}
      />}

      {isSuccess && <ToastSuccess setIsSuccess={setIsSuccess}/>}
    </>
  );
};

export default MoviesTable;
