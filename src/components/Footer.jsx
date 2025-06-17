import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import GoogleMapEmbed from './GoogleMapEmbed';


const Footer = () => {
  return (
    <>
      <footer className="bg-[#3f4a78] text-white text-base py-12 px-6 md:px-24 relative z-10 ..."
      style={{ boxShadow: '0px 8px 12px rgba(0,0,0,0.07), 0px -8px 12px rgba(0,0,0,0.05)' }}>
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-8 items-start text-left">

          {/* Prikaz Google Mapsa */}
          <div className="w-full h-[160px] max-w-xs">
             <GoogleMapEmbed height="160" />
          </div>

          {/* Kontakt */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">KONTAKT</h3>
            <ul className="space-y-2 text-base">
              <li><span className="inline-block w-5">📍</span> Nurije Pozderca br.7, 71000 Sarajevo</li>
              <li>
                <span className="inline-block w-5">✉️</span> 
                <a href="mailto:crpit.sa@gmail.com" className="hover:text-blue-200"> crpit.sa@gmail.com</a>
              </li>
              <li><span className="inline-block w-5">📞</span> +387 61 831-451</li>
            </ul>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">INFO</h3>
            <ul className="space-y-2 text-base">
              <li><span className="inline-block w-5">🆔</span> ID broj: 4202584200002</li>
              <li><span className="inline-block w-5">🏦</span> UniCredit Bank: 3387302238259963</li>
            </ul>
          </div>

          {/* Društvene mreže */}
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-xl font-semibold mb-4">PRATITE NAS</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/inntech8?locale=hr_HR" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1877F2] p-3 rounded-md text-2xl hover:scale-110 transition transform duration-200 shadow">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/inn_tech_8/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#E4405F] p-3 rounded-md text-2xl hover:scale-110 transition transform duration-200 shadow">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/channel/UC0AQl4MLN9TdEYRi7Ui7pSA/featured?view_as=subscriber" target="_blank" rel="noopener noreferrer" className="bg-white text-[#FF0000] p-3 rounded-md text-2xl hover:scale-110 transition transform duration-200 shadow">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com/company/79463840/admin/page-posts/published/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0077B5] p-3 rounded-md text-2xl hover:scale-110 transition transform duration-200 shadow">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright sekcija je izdvojena i pozicionirana ispod footer-a */}
      <div className="bg-white text-primary text-center text-sm py-3">
        &copy; {new Date().getFullYear()} CRPIT. Sva prava zadržana.
      </div>
    </>
  );
};

export default Footer;
