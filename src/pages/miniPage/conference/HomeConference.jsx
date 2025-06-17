import React from 'react'
import crpitLogo from '../../../assets/CRPIT.png';
import fmonLogo from '../../../assets/Partners/Patrons/FMON.png'
import monKSLogo from '../../../assets/Partners/Patrons/monKS.png'
import MarqueeSlider from './MarqueeSlider';
import MarqueeSliderRight from './MarqueeSliderRight';

const HomeConference = () => {
  return (
     <div className="min-h-screen bg-white text-center flex flex-col items-center px-4 pt-8">
      {/* Naslovi */}
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-wide">
          8. naučno-stručna konferencija <br /><span className="text-[#1E73BE] block mt-5 md:text-5xl">INN&TECH</span>
        </h1>
        <p className='text-primary md:text-xl'>konferencija o značaju razvoja tehnike, tehnologije, inovatorstva, inovativnosti i IT tehnologija</p>
        <br />
        <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-wide ">
          3. Sajam inovacija i inovativnosti 
        </h2>
      </div>

      {/* ORGANIZATOR kartica */}
      <div className="mt-10 w-full max-w-4xl bg-white border border-gray-100 rounded-2xl shadow-2xl p-6 flex flex-col items-center transition transform hover:scale-[1.01] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] duration-300">
        <p className="text-4xl font-semibold text-primary mb-5">ORGANIZATOR</p>
        <hr className='w-full mb-5'/>
        <img src={crpitLogo} alt="CRPIT logo" className="object-contain" />
      </div>

      {/* POKROVITELJI kartica */}
      <div className="mt-10 w-full max-w-4xl bg-white border border-gray-100 rounded-2xl shadow-2xl p-6 flex flex-col items-center transition transform hover:scale-[1.01] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] duration-300">
        <p className="text-4xl font-semibold text-primary mb-5">POKROVITELJI</p>
        <hr className="w-full mb-10" />
        <div className="flex flex-row justify-center items-start gap-24 flex-wrap w-full">
          <div className="flex flex-col items-center text-center w-56">
            <a href="https://fmroi.gov.ba/" target="_blank" rel="noopener noreferrer">
              <img src={fmonLogo} alt="FMON logo" className="h-28 object-contain mb-3"/>
            </a>
            <p className="text-l text-primary leading-tight">
              Federalno ministarstvo obrazovanja i nauke
            </p>
          </div>
          <div className="flex flex-col items-center text-center w-56">
            <a href="https://mon.ks.gov.ba/" target="_blank" rel="noopener noreferrer">
              <img src={monKSLogo} alt="FMON logo" className="h-28 object-contain mb-3"/>
            </a>
            <p className="text-l text-primary leading-tight">
              Ministarstvo za nauku, visoko obrazovanje i mlade Kantona Sarajevo
            </p>
          </div>
        </div>
      </div>

      {/**Sponzori */}
      <p className="text-4xl font-semibold text-primary mb-10 mt-20">SPONZORI</p>
      <MarqueeSlider/>

      {/**Partneri */}
      <p className="text-4xl font-semibold text-primary mb-10 mt-20">PARTNERI I PRIJATELJI</p>
      <MarqueeSliderRight/>
      
    </div>
  )
}

export default HomeConference