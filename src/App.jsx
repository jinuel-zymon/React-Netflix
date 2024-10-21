import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movies from './components/pages/movies/Movies'
import Dashboard from './components/pages/dashboard/Dashboard'
import Settings from './components/pages/settings/Settings'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/movies" element={<Movies/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/settings" element={<Settings/>}/>
      </Routes>
    </Router>
  )
}

export default App