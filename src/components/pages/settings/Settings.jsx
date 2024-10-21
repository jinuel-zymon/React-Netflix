import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'
import Navigation from '@/components/partials/Navigation'
import React from 'react'
import Category from './category/Category'
import Genre from './genre/Genre'
import Ratings from './ratings/Ratings'

const Settings = () => {

  const [currentSettings, setCurrentSettings] = React.useState(0)

  const settingsTable = [<Category/>, <Genre/>, <Ratings/>]

  const handleSettingTab = (index) => setCurrentSettings(index)

  return (
    <>
    <section className='flex min-h-screen bg-secondary'>
      <aside className='bg-primary text-dark basis-[200px]'>
        <Navigation/>
      </aside>

      <main className='basis-[calc(100%-200px)] min-h-[100vh] grid grid-rows-[auto_1fr_auto]'>
        <Header title="Settings" subtitle="List of system settings"/>

        <div className='m-8'>
          <div>
            <nav className='mb-10'>
              <ul className='flex gap-10 mb-3 border-b border-line'>
                <li><button onClick={()=>handleSettingTab(0)} className={`tab-link ${currentSettings === 0 ? "active" : ""}`}>Category</button></li>
                <li><button onClick={()=>handleSettingTab(1)} className={`tab-link ${currentSettings === 1 ? "active" : ""}`}>Genre</button></li>
                <li><button onClick={()=>handleSettingTab(2)} className={`tab-link ${currentSettings === 2 ? "active" : ""}`}>Ratings</button></li>
              </ul>
            </nav>

            {settingsTable[currentSettings]}
            
            {/* {(currentSettings === 0) ? 
            <Category/>
             : (currentSettings === 1) ?
              <Genre/> 
              : (currentSettings === 2) ? 
              <Ratings/> 
              : ""} */}

          </div>
        </div>

        <Footer/>
      </main>
    </section>
    </>

  )
}

export default Settings