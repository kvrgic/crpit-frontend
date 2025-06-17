import React from 'react';

const cards = [
  { img: '/Sponsors/ZIRA.jpg', title: 'ZIRA d.o.o. Sarajevo', link: 'https://ziragroup.com/',hasColor: true, bg: 'bg-[#151e47]', textColor: 'text-white'  },
  { img: '/Sponsors/Ginova.png', title: 'GEOINOVA d.o.o. Informatički inženjering', link:'https://www.geoinova.com/sr' ,hasColor: false, textColor: 'text-primary'},
  { img: '/Sponsors/BHTelecom.jpg', title: 'BH Telecom dd Sarajevo', link:'https://www.bhtelecom.ba/', hasColor: true, bg: 'bg-[#ff8201]', textColor: 'text-white'},
  { img: '/Sponsors/ProCreditBank.png', title: 'ProCredit Bank',link:'https://www.procreditbank.ba/', hasColor: false,textColor: 'text-primary' },
  { img: '/Sponsors/CLOUDIT.png', title: 'CloudIT d.o.o. Sarajevo', link:'https://cloudit.ba/', hasColor: false, textColor: 'text-primary'},
  { img: '/Sponsors/Ensmart.png', title: 'ENSMART d.o.o.', link:'https://ensmartbuild.com/', hasColor: true, bg: 'bg-[#54c2c1]', textColor: 'text-white'},
  { img: '/Sponsors/Imtec.png', title: 'IMTEC d.o.o. Sarajevo', link:'https://imtec.ba/', hasColor: false, textColor: 'text-primary'}
];

const MarqueeSlider = () => {
  return (
      <div className="flex w-max space-x-8 animate-scrollSlow">
        {[...cards, ...cards, ...cards, ...cards].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            className={`w-64 flex-shrink-0 min-h-[300px] ${item.hasColor ? item.bg : 'bg-white'} rounded-3xl shadow-2xl p-6 transition-transform duration-300 hover:scale-105 transform `}>
            <div className="h-36 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className={`mt-6 text-center text-lg font-semibold ${item.textColor}`}>{item.title}</p>
          </a>
        ))}
      </div>

  );
};

export default MarqueeSlider;