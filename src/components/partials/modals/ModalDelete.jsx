import { CircleAlert, X } from 'lucide-react'
import ModalWrapper from './ModalWrapper'

const ModalDelete = () => {
  return (
    <ModalWrapper>
      <div className="modal-main bg-primary z-50 max-w-[350px] w-full rounded-md">

        <div className="modal-header p-2 border-b border-line flex justify-between items-center">
          <h3 className='mb-0 leading-none text-alert'>Delete</h3>
          <button><X/></button>
        </div>

        <div className="modal-body p-2 px-4 text-center">
          <div className='size-[40px] mt-2 bg-alert bg-opacity-20 grid place-content-center rounded-full mx-auto'>
        <CircleAlert className='stroke-alert' strokeWidth={1} size={30}/>
          </div>
        <p className='mt-3 mb-5 text-balance'>You are about to remove this record. Are you sure you want to continue?</p>
        </div>

        <div className='modal-footer flex py-2 px-4 border-t border-line justify-end gap-3'>
          <button className='btn btn-alert'>Delete</button>
          <button className='btn btn-cancel'>Cancel</button>
        </div>

      </div>
    </ModalWrapper>




  )
}

export default ModalDelete