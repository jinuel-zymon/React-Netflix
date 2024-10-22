import SpinnerButton from '@/components/partials/spinners/SpinnerButton'
import React from 'react'

const CategoryAddForm = ({setIsAdd}) => {
  return (
    <div className='my-3'>
      <form action="" className='max-w-[250px]'>
        <div className="input-wrap">
          <label htmlFor="">Category</label>
          <input type="text" />
          <span>Required</span>
        </div>

        <div className='settings-action flex justify-end gap-3 my-3'>
          <button className='btn btn-accent w-[80px] flex justify-center'><SpinnerButton/>Add</button>
          <button className='btn btn-cancel w-[80px] flex justify-center'onClick={()=> setIsAdd(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default CategoryAddForm