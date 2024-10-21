import { Archive, ArchiveRestore, FileVideo, Pencil, Plus, Search, Trash } from 'lucide-react'
import React from 'react'

const MoviesTable = () => {
  return (
    <div className='p-4 m-4'>
    <div className='flex justify-between items-center'>
      <form action="">
        <div className="input-wrap relative">
        <input type="text" placeholder="keyword"  className="bg-primary px-2 py-1 placeholder:opacity-30 outline-none border border-transparent focus:border-accent pl-8 rounded-md"/>
        <Search className='absolute top-2 left-1.5 opacity-25' size={20}/>
        </div>
      </form>
      <button className='btn btn-accent'><Plus size={14} />Add New</button>
    </div>

    <div className='table_wrapper bg-primary p-4 mt-5 rounded-md'>
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
          <tr>
            <td>1.</td>
            <td>Tarzan - Ganda Lalake</td>
            <td>1992</td>
            <td>Available</td>
            <td>
              <ul className='table-action'>
                <li><button data-tooltip="View"><FileVideo size={15}/></button></li>
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
  </div>
  )
}

export default MoviesTable