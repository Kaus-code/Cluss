'use client'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import FallingBoxes from '@/components/FallingBoxes'
import ServicesSection from '@/components/ServiceSection'
import TestimonialSection from '@/components/TestimonialSection'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'


const Landing = () => {
  return (
    <div className='bg-[#e5e9eb]'>
      <HeroSection />
      <ServicesSection />
      <FallingBoxes />
      <TestimonialSection />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Landing