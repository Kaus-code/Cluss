'use client'
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import Marquee from './Marquee'
import { motion, useScroll, useTransform } from 'framer-motion'

const HeroSection = () => {
    const { scrollY } = useScroll();
    
    // Map scroll position (0 to 200px) to the box dimensions and styles
    const width = useTransform(scrollY, [0, 200], ["99vw", "90vw"]);
    const height = useTransform(scrollY, [0, 200], ["100vh", "95vh"]);
    const borderRadius = useTransform(scrollY, [0, 200], ["0px", "48px"]);
    const marginTop = useTransform(scrollY, [0, 200], ["0px", "12px"]);

    return (
        <div className='flex items-center flex-col gap-20'>

            {/* Main Box */}
            <motion.div 
                style={{
                    width,
                    height,
                    borderRadius,
                    marginTop,
                }}
                className='flex flex-col justify-between items-center bg-white relative overflow-hidden'
            >
                <div className='w-full'>
                    <Navbar />
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <div className='text-[70px] font-medium' >
                        Your trusted learning Partner
                    </div>
                    <div className='text-[18px] -translate-y-4'>
                        We teach world, in most unique and creative learning way.
                    </div>
                    <div className='group relative cursor-pointer px-6 py-3 bg-[#e5e9eb] flex gap-2 rounded-full overflow-hidden'>
                        <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
                        <div className='relative z-10 flex gap-2 group-hover:text-white transition-colors duration-500'>
                            <div>Get Started</div>
                            <div className='group-hover:-rotate-45 transition duration-500 text-xl' >👋</div>
                        </div>
                    </div>
                </div>
                <div className='w-11 h-11 rounded-full group flex items-center justify-center hover:bg-[#dedede] transition-all duration-300 cursor-pointer bg-black animate-float'>
                    <Image src='https://cdn.prod.website-files.com/673786754d248974527e65b5/673a2c5929486b4e031f7c94_dropdown-arrow.svg' alt="Logo" width={10} height={10} className="rounded-full invert-100 group-hover:invert-25 transition-transform duration-300" />
                </div>
                
                <div className=' left-0 w-full'>
                    <Marquee />
                </div>
            </motion.div>

            {/* 2nd Box */}

            <div className='w-[90vw] rounded-4xl h-100 bg-white'>
                adsd
            </div>
            <div className='w-[90vw] rounded-4xl h-100 bg-white'>
                adsd
            </div>

        </div>
    )
}

export default HeroSection