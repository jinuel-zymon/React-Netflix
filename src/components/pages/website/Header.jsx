import { devImgPath } from '@/components/helpers/functions-general'
import { Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-primary py-5'>
    <div className="container max-w-[1300px] w-full mx-auto px-4">
        <div className="flex justify-between items-center">
        
          <img src={`${devImgPath}/logo-netflix.png`} alt="" className='w-[120px]'/>
          <ul className='flex gap-4 mr-auto ml-10'>
            <li><Link to="/">TV Shows</Link></li>
            <li><Link to="/">Movies</Link></li>
            <li><Link to="/">Recently Added</Link></li>
            <li><Link to="/">My List</Link></li>
          </ul>
          
          <button><Search/></button>

        </div>
    </div>
  </header>
  )
}

export default Header