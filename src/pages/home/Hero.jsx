import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import Img1 from "../../assets/images/1.jpg"
import Img2 from "../../assets/images/2.jpg"
import Img3 from "../../assets/images/3.jpg"
import Img4 from "../../assets/images/4.jpg"
import Img5 from "../../assets/images/5.jpg"
import Img6 from "../../assets/images/6.jpg"
import Img7 from "../../assets/images/7.jpg"
import Img8 from "../../assets/images/8.jpg"
import Img9 from "../../assets/images/9.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import required modules
import { Autoplay, Pagination, EffectFade} from 'swiper/modules';

const hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8'>
        <div className='md:w-1/2 w/full text-center'>
            <h1 className='md:text-6xl text-3xl font-bold md:leading-tight'>CRPIT</h1>
            <p className='py-4'>Udruženje CENTAR ZA RAZVOJ I PROMOCIJU INOVATORSTVA, TEHNIKE I INFORMACIONIH TEHNOLOGIJA-CRPIT je odgojno-obrazovno udruženje koje se bavi razvojem, promocijom, obrazovanjem, afirmacijom i unapređenjem inovatorstva, tehnike, tehnologije, tehničke kulture, ekologije, naučno-tehničkog stvaralaštva i informacionih tehnologija.</p>
        </div>
        <div className='md:w-1/2 w-full mx-auto'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Img1} alt="" className='w-full lg:h-[420px] sm:h-96 h-80 object-cover' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img2} alt="" className='w-full lg:h-[420px] sm:h-96 h-80 object-cover' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img3} alt="" className='w-full lg:h-[420px] sm:h-96 h-80 object-cover' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img4} alt="" className='w-full lg:h-[420px] sm:h-96 h-80 object-cover' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img5} alt="" className='w-full lg:h-[420px] sm:h-96 h-80 object-cover' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img6} alt="" className='w-full lg:h-[420px] sm:h-96 h-80 object-cover' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img7} alt="" className='w-full lg:h-[420px] sm:h-96 h-80 object-cover' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img8} alt="" className='w-full lg:h-[420px] sm:h-96 h-80 object-cover' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img9} alt="" className='w-full lg:h-[420px] sm:h-96 h-80 object-cover' />
        </SwiperSlide>
           
      </Swiper>
        </div>
    </div>
  )
}

export default hero