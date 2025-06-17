import React from 'react'
import inntechImg from "/logo2.png"
import { NavLink } from 'react-router-dom'

const KonfNavigation = () => {
  return (
    <div className='space-y-5 bg-white p-8 h-full flex flex-col items-start'>

      <div className='mb-5 w-full flex justify-center'>
        <img src={inntechImg} alt="" className='size-28 mx-auto'/>
      </div>

      <hr className="w-full"/>
      <ul className='space-y-5 pt-5'>
        <li>
          <NavLink to ="/konferencija"
          end
          className={({isActive}) => isActive? "text-blue-600 font-bold" : "text-black"}>Početna</NavLink>
        </li>
        <li>
          <NavLink to ="/konferencija/o-konferenciji" 
          className={({isActive}) => isActive? "text-blue-600 font-bold" : "text-black"}>O konferenciji</NavLink>
        </li>
        <li>
          <NavLink to ="/konferencija/teme-i-predavanja" 
          className={({isActive}) => isActive? "text-blue-600 font-bold" : "text-black"}>Teme i predavanja</NavLink>
        </li>
        <li>
          <NavLink to ="/konferencija/govornici-i-predavaci" 
          className={({isActive}) => isActive? "text-blue-600 font-bold" : "text-black"}>Govornici i predavači</NavLink>
        </li>
        <li>
          <NavLink to ="/konferencija/agenda" 
          className={({isActive}) => isActive? "text-blue-600 font-bold" : "text-black"}>Agenda</NavLink>
        </li>
        <li>
          <NavLink to ="/konferencija/registracija" 
          className={({isActive}) => isActive? "text-blue-600 font-bold" : "text-black"}>Registracija</NavLink>
        </li>
      </ul>
      
    </div>
  )
}

export default KonfNavigation