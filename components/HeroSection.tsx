'use client'
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import Marquee from './Marquee'
import Logo from '../public/Logo.png'
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
                <div className='flex flex-col items-center mt-10'>
                    <h2 className='text-[40px] md:text-[50px] lg:text-[55px] font-semibold tracking-tight mb-6 text-center'>Learn in a most creative way possible</h2>
                    <p className='text-[16px] text-[#222] leading-relaxed max-w-[680px] mb-6 text-center md:text-left'>
                        We teach world, in most unique and creative learning way.
                    </p>
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

            <div className='w-[90vw] rounded-4xl h-auto bg-white flex flex-col md:flex-row px-8 py-10 gap-8'>
                {/* Left: Showreel Card */}
                <div className='w-full md:w-1/2 flex flex-col justify-start gap-3'>
                    <div className='flex items-center gap-5 font-medium text-xl'>
                        <div className='dot'></div>
                        <div>Who we are</div>
                    </div>
                    <div className='bg-[#eef3f4] rounded-3xl p-6 relative w-full max-w-[420px]'>
                        <div className='rounded-2xl overflow-hidden relative'>
                            {/* Replace "dQw4w9WgXcQ" with your YouTube Video ID */}
                            <div className='aspect-video w-full rounded-xl overflow-hidden bg-[#f3f6f7]'>
                                <iframe
                                    className='w-full h-full'
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        <div className='mt-5 flex items-center justify-between'>
                            <div className='text-[18px] font-medium'>Cluss Showreel</div>
                            <div className='opacity-90'><Image src={Logo} alt='Logo' width={36} height={36} /></div>
                        </div>
                    </div>
                </div>

                {/* Right: Product / Tools Content */}
                <div className='w-full md:w-1/2 flex flex-col justify-center'>
                    <h2 className='text-[40px] font-semibold tracking-tight mb-6'>Learn in a most creative way possible</h2>
                    <p className='text-[16px] text-[#222] leading-relaxed max-w-[680px] mb-6'>
                        Cluss provides an integrated toolkit for learning teams and creators. Instantly transcribe YouTube lectures, generate concise summaries, run group discussions, and turn lessons into quizzes and study notes — powered by AI to save time and boost retention.
                    </p>

                    

                    <div className='group relative cursor-po    inter w-fit px-6 py-3 bg-[#e5e9eb] flex gap-2 rounded-full overflow-hidden'>
                        <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
                        <div className='relative z-10 flex gap-2 group-hover:text-white transition-colors duration-500'>
                            <div>Explore Tools</div>
                            <div className='group-hover:-rotate-45 transition duration-500 text-xl' ><Image src={Logo} alt='Logo' width={23} height={23} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[90vw] flex flex-row rounded-4xl'>
                <div className='flex items-center gap-2'>
                    <div className='dot'></div>
                    <div className=''>Featured Works</div>
                </div>
                <div>
                    We create a path for learning but not the way to do so
                </div>
            </div>
        </div>
    )
}

export default HeroSection