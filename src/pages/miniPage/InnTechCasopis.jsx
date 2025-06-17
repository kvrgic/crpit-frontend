import React from 'react'
import FlipbookPage from './casopis/FlipbookPage'
import inntechImg from "/logo2.png"

const InnTechCasopis = () => {
  return (
    <div className="flex flex-col md:flex-row gap-y-6 md:gap-0 min-h-screen mt-8">
      
      <aside className="w-full md:w-1/3 bg-white flex items-start">
      <div className="text-center flex flex-col items-center w-full ml-5 mt-12 px-4 sm:px-6 md:px-4">
        <div className="max-w-4xl w-full space-y-11">
          <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-wide">O časopisu</h1>
          
          <div className='mb-5 w-full flex justify-center'>
            <img src={inntechImg} alt="" className='size-28 mx-auto'/>
          </div>
          
          <p className='text-primary text-base md:text-xl text-justify'>Časopis „INN&TECH“ je naučno-stručni časopis kojim se promoviše značaj tehnike, tehnologije, inovatorstva, inovativnosti i informacionih tehnologija. Značaj ovih oblasti za razvoj privrede i poduzetništva, važnost obrazovanja mladih za tehnička i IT usmjerenja, značaj inovacija za razvoj industrije i proizvodnog sektora te značaj inovativnog pristupa u poduzetništvu.</p>
          <p className='text-primary md:text-xl text-left'>Printano izdanje: ISSN broj  2637-3300</p>
          <p className='text-primary md:text-xl text-left'>Online izdanje: ISSN broj 2637-3319</p>
        </div>
      </div>
      </aside>

      <main className="flex-grow bg-white flex justify-center items-center p-8 pt-0 pb-0">
        <div className='max-w-[960px] w-full'>
          <FlipbookPage />
        </div>
      </main>
      
    </div>
  );
};
export default InnTechCasopis