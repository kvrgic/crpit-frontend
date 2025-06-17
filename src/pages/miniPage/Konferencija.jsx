import React from 'react'
import KonfNavigation from './conference/KonfNavigation'
import { Outlet } from 'react-router-dom'

const Konferencija = () => {
  return (
    <div className='container mx-auto min-h-screen flex flex-col md:flex-row gap-4 items-stretch  justify-start mt-8'>
      <header className='lg:w-1/5 sm:2/5 shrink-0'>
        <KonfNavigation/>
      </header>
      <main className='py-0 bg-white flex-1 overflow-hidden'>
        <Outlet/>
      </main>
    </div>
  )
}

export default Konferencija