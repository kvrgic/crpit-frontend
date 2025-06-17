import React from 'react'
import AboutImg from "../../assets/images/6.jpg"
import FastFacts from './aboutUs/FastFacts';
import AboutUs from './aboutUs/AboutUs';
import VisionMission from './aboutUs/VisionMission';
import OurBoard from './aboutUs/OurBoard';
import OurGoals from './aboutUs/OurGoals';


const About = () => {
  return (

    <div className='bg-white text-primary w-full mt-0 p-0'>
      <div className="w-full h-[60vh] sm:h-[80vh] overflow-hidden">
        <img src={AboutImg} alt="Hero slika" className="w-full h-full object-cover"/>
      </div>
      <h2 className='md:text-4xl text-3xl font-medium md:leading-tight pt-8 mb-12 md:px-24 px-6'>O nama</h2>

      <AboutUs/>
      <VisionMission />         
      <FastFacts />
      <OurBoard/>
      <OurGoals/>
    </div>
  )
}

export default About