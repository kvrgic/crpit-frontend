import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Speakers.css';

const Speakers = () => {
  return (
    <>
    <main className="w-full min-h-screen bg-[url('/Pozadina.png')] bg-cover bg-center bg-no-repeat bg-black/75 bg-blend-overlay py-16 px-0 overflow-visible">

      <h1 className="text-4xl font-bold mb-24 text-white text-center drop-shadow-lg">Govornici i predavači</h1>
      <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3} 
      keyboard={{ enabled: true }}
      spaceBetween={30}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        }}
      pagination={false}
      modules={[EffectCoverflow, Keyboard]}
      className="w-full h-[400px] max-w-7xl mx-auto py-16 px-6"
    >
  {[
    '/Speakers/1.png',
    '/Speakers/2.png',
    '/Speakers/3.png',
    '/Speakers/4.png',
    '/Speakers/6.png',
    '/Speakers/7.png',
    '/Speakers/8.png',
    '/Speakers/9.png',
    '/Speakers/10.png',
    '/Speakers/11.png',
    '/Speakers/12.png',
    '/Speakers/13.png',
    '/Speakers/14.png',
    
  ].map((img, index) => (
    <SwiperSlide
      key={index}
      className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] flex items-center justify-center overflow-visible">
      <img
        src={img}
        className="aspect-square object-cover w-full rounded-xl shadow-md relative z-10"
        alt=""
      />
    </SwiperSlide>
  ))}
</Swiper>
</main>

</>
)}

export default Speakers