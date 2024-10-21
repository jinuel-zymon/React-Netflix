import { Settings } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({title, subtitle}) => {
  return (
    <header className='p-4 bg-primary'>
          <div className='flex justify-between items-center'>
            <div>
              <h2 className='mb-0'>{title}</h2>
              <small>{subtitle}</small>
            </div>
            <div className='flex gap-3 items-center'>
            <Link to="/admin/settings"><Settings/></Link>
            <div className='size-10 rounded-full text-white bg-accent grid place-content-center'>
              JR
            </div>
            </div>
          </div>
    </header>
  )
}

export default Header