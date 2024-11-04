import React from "react";
import { Archive, ArchiveRestore, Pencil, Trash } from "lucide-react";
import useQueryData from "@/components/custom-hook/useQueryData";
import SpinnerTable from "@/components/partials/spinners/SpinnerTable";
import LoaderTable from "@/components/partials/LoaderTable";
import NoData from "@/components/partials/icons/NoData";
import ServerError from "@/components/partials/icons/ServerError";
import Pill from "@/components/partials/Pill";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import ToastSuccess from "@/components/partials/ToastSuccess";
import ModalValidate from "@/components/partials/modals/ModalValidate";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd, setIsConfirm, setIsDelete } from "@/components/store/storeAction";

const GenreTable = ({setItemEdit }) => {
  const {store, dispatch} = React.useContext(StoreContext)
  const [id, setId] = React.useState(null);
  const [isActive, setIsActive] = React.useState(0);

  let counter = 0;
  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v1/genre`, // endpoint
    "get", // method
    "genre"
  );

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.genre_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setIsActive(0);
    setId(item.genre_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsConfirm(true));
    setIsActive(1);
    setId(item.genre_aid);
  };

  return (
    <>
      <div
        className={`table_wrapper bg-primary p-4 mt-5 rounded-md ${
          store.isAdd ? "opacity-40 pointer-events-none " : ""
        }`}
      >
        {!isLoading || (isFetching && <SpinnerTable />)}
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Genre</td>
              <td>Status</td>
            </tr>
          </thead>

          <tbody>
            {((isLoading && !isFetching) || result?.data.length === 0) && (
              <tr>
                <td colSpan='100%'>
                  {isLoading ? <LoaderTable count={30} cols={6} /> : <NoData />}
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
                  <td>{item.genre_title}</td>
                  <td>
                    <Pill isActive={item.genre_is_active} />
                  </td>
                  <td>
                    <ul className='table-action'>
                      {item.genre_is_active ? (
                        <>
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

      {store.isConfirm && (
        <ModalConfirm
          queryKey='genre'
          mysqlApiArchive={`/v1/genre/active/${id}`}
          active={isActive}
        />
      )}
      {store.isDelete && (
        <ModalDelete

          mysqlApiDelete={`/v1/genre/${id}`}
          queryKey='genre'

        />
      )}

      {store.success && <ToastSuccess/>}
      {store.validate && (
        <ModalValidate />
      )}
    </>
  );
};

export default GenreTable;
