import ModalWrapper from '@/components/partials/modals/ModalWrapper'
import { Upload, X } from 'lucide-react'
import React from 'react'

const MoviesModalAdd = () => {
  return (
    <ModalWrapper>
      <div className='modal-main absolute top-0 right-0 h-screen w-[320px] bg-secondary grid grid-row-[auto,_1fr,_auto]'>
        <div className='modal-header p-3 px-4 pb-0 flex justify-between items-center'>
          <h3 className='mb-0'>Add Movie</h3>
          <button><X/></button>
        </div>
        <div className="modal-body p-3 px-4">
          <div className='w-full h-[150px] border border-line grid place-content-center rounded-md mb-1.5'>
           <div className='flex flex-col items-center'>
           <Upload/>
           <small className='pt-2 opacity-40 text-xs'>Upload Image</small>
           </div>
          </div>
          <div className="input-wrap">
            <label htmlFor="">Title</label>
            <input type="text" />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Year</label>
            <input type="text" />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Genre</label>
            <input type="text" />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Rating</label>
            <input type="text" />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Duration</label>
            <input type="text" />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Summary</label>
            <textarea name="" id=""></textarea>
          </div>
          <div className="input-wrap">
            <label htmlFor="">Cast</label>
            <textarea name="" id=""></textarea>
          </div>
        </div>
        <div className="modal-action flex justify-end gap-3 items-center p-3 px-4 pb-0">
          <button className='btn btn-accent'>Save</button>
          <button className='btn btn-cancel'>Cancel</button>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default MoviesModalAdd