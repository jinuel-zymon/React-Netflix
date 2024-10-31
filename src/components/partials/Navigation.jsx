import React from 'react'
import { Link } from 'react-router-dom'
import { devImgPath } from '../helpers/functions-general'
import { Clapperboard, LayoutDashboard, Star } from 'lucide-react'

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

        <li><Link to="/admin/top-movies" className={`${menu === "top-movies" ? "active" : ""} nav-link`}><Star size={16}/>Top Movies</Link></li>

        <li><Link to="/admin/top-series" className={`${menu === "top-series" ? "active" : ""} nav-link`}><Star size={16}/>Top Series</Link></li>
      </ul>
    </nav>

  </div>
  )
}

export default Navigation