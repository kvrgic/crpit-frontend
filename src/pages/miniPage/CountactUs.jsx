import React from 'react';
import coverImg from '../../assets/images/4.jpg'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import mapEmbedUrl from '../../components/GoogleMapEmbed';
import GoogleMapEmbed from '../../components/GoogleMapEmbed';

const ContactUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center text-white text-center" style={{ backgroundImage: `url(${coverImg})` }}>
        <div className='absolute inset-0 bg-black/60 z-0'>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-5xl font-bold uppercase text-blue-400 tracking-[0.2em]">PIŠITE NAM</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            . . . . . . . . <br/><br/>
            Kontaktirajte nas za sve dodatne informacije, prijedloge, tehničku podršku ili potencijalnu saradnju. Rado ćemo vam odgovoriti u najkraćem roku!
          </p>
        </div>
        </div> 
      </div>

      
      <div className="grid md:grid-cols-3 divide-x divide-gray-200 py-16 px-6 md:px-24 bg-white text-center">
      {/* BOX 1 */}
      <div className="px-6 mb-8 md:mb-0">
        <FaHome className="mx-auto text-[#1E73BE] text-7xl mb-6" /> 
        <h3 className="font-bold text-primary uppercase text-xl mb-4">Posjetite nas</h3>
        <p className="text-primary text-base leading-relaxed mb-4">
        Posjetite nas u prostorijama udruženja ili zakažite termin.
        </p>
        <p className="text-[#1E73BE] font-semibold">Nurije Pozderca br.7, 71000 Sarajevo</p>
      </div>

      {/* BOX 2 */}
      <div className="px-6 mb-8 md:mb-0">
        <FaPhone className="mx-auto text-[#1E73BE] text-7xl mb-6" />
        <h3 className="font-bold text-primary uppercase text-xl mb-4">Pozovite nas</h3>
        <p className="text-primary text-base leading-relaxed mb-4">
        Slobodno nas kontaktirajte za više informacija ili podršku.
        </p>
        <p className="text-[#1E73BE] font-semibold"> +387 61 831-451</p>
      </div>

      {/* BOX 3 */}
      <div className="px-6">
        <FaEnvelope className="mx-auto text-[#1E73BE] text-7xl mb-6" />
        <h3 className="font-bold text-primary uppercase text-xl mb-4">Kontaktirajte nas</h3>
        <p className="text-primary text-base leading-relaxed mb-4">
        Pošaljite nam upit putem e-maila i odgovorit ćemo u najkraćem roku.
        </p>
        <a href="mailto:crpit.sa@gmail.com" className="text-[#1E73BE] font-semibold"> crpit.sa@gmail.com</a>
      </div>
      </div>


      {/* Google Map */}
      <div className="w-full h-[400px]">
        <GoogleMapEmbed height="100%" rounded={false} />
      </div>

      {/* Mini Footer sa ikonicama za društvene mreže*/}
      <div className="bg-primary py-6 flex justify-center gap-6">
        <div className="flex gap-4">
          <a href="https://www.facebook.com/inntech8?locale=hr_HR" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-[#1877F2] p-3 rounded-md text-xl hover:scale-110 transition transform duration-200 shadow">
          <FaFacebookF />
          </a>           
          <a href="https://www.instagram.com/inn_tech_8/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-[#E4405F] p-3 rounded-md text-xl hover:scale-110 transition transform duration-200 shadow">
          <FaInstagram />
          </a>             
          <a href="https://www.youtube.com/channel/UC0AQl4MLN9TdEYRi7Ui7pSA/featured?view_as=subscriber" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-[#FF0000] p-3 rounded-md text-xl hover:scale-110 transition transform duration-200 shadow">
          <FaYoutube />
          </a>           
          <a href="https://www.linkedin.com/company/79463840/admin/page-posts/published/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-[#0077B5] p-3 rounded-md text-xl hover:scale-110 transition transform duration-200 shadow">
          <FaLinkedinIn />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default ContactUs