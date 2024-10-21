import React from 'react'
import { Link } from 'react-router-dom'
import { devImgPath } from '../helpers/functions-general'
import { Clapperboard, LayoutDashboard } from 'lucide-react'

const Navigation = ({menu}) => {
  return (
    <div className='p-4'>
    <div className='mb-5'>
      <img src={`${devImgPath}/logo-netflix.png`} alt="" className='w-[90%]'/>
    </div>

    <nav>
      <ul className='space-y-5'>
        <li><Link to="/admin/dashboard" className={`${menu === "dashboard" ? "active" : ""} nav-link`}><LayoutDashboard size={16}/>Dashboard</Link></li>
        <li><Link to="/admin/movies" className={`${menu === "movies" ? "active" : ""} nav-link`}><Clapperboard size={16}/>Movies</Link></li>
      </ul>
    </nav>

  </div>
  )
}

export default Navigation