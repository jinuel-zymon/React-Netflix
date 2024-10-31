import React from 'react'
import { Archive, ArchiveRestore, Pencil, Trash } from 'lucide-react'
import useQueryData from '@/components/custom-hook/useQueryData';

const CategoryTable = ({isAdd}) => {

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

  return (
    <div className={`table_wrapper bg-primary p-4 mt-5 rounded-md ${isAdd ? "opacity-40 pointer-events-none " : ""}`}>
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>Category</td>
          <td>Status</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1.</td>
          <td>Tarzan - Ganda Lalake</td>
          <td>Active</td>
          <td>
            <ul className='table-action'>
              <li><button data-tooltip="Edit"><Pencil size={15}/></button></li>
              <li><button data-tooltip="Archive"><Archive size={15}/></button></li>
              <li><button data-tooltip="Restore"><ArchiveRestore size={15}/></button></li>
              <li><button data-tooltip="Delete"><Trash size={15}/></button></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
  )
}

export default CategoryTable