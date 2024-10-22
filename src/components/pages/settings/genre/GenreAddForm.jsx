import React from 'react'

const GenreAddForm = ({setIsAdd}) => {
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