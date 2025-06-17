import React from 'react'
import { useNavigate } from 'react-router-dom';
import RegistrationImg from '../../../assets/RegImg.png'

const Registration = () => {
  const navigate = useNavigate();
   return (
  <>
    <div
      className="relative h-[35vh] bg-contain bg-no-repeat bg-center text-white text-center m-0 p-0"
      style={{ backgroundImage: `url(${RegistrationImg}) ` }}>
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-5xl font-bold uppercase text-blue-400 tracking-[0.2em]">ONLINE REGISTRACIJA</h1>
      </div>
    </div>

    {/* Tekstualni sadržaj ispod slike */}
    <div className="py-24 flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-12">Registracije su zatvorene</h1>
      <p className="text-primary mb-12">Trenutno nije moguće izvršiti registraciju. Hvala na razumijevanju.</p>
      <button
        onClick={() => navigate('/konferencija')}
        className="bg-[#1E73BE] hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md transition">
        Nazad
      </button>
    </div>
    
  </>
);
}

export default Registration