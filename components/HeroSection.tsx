'use client'
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import Marquee from './Marquee'
import Logo from '../public/Logo.png'
import Showreel from '../public/Showreel.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    FileText,
    Calendar,
    Brain,
    Search,
    Video,
    Users,
    Plus,
    Mic2,
    AudioLines
} from 'lucide-react'

const HeroSection = () => {
    const { scrollY } = useScroll();

    // Map scroll position (0 to 200px) to the box dimensions and styles
    const width = useTransform(scrollY, [0, 200], ["99vw", "90vw"]);
    const height = useTransform(scrollY, [0, 200], ["100vh", "95vh"]);
    const borderRadius = useTransform(scrollY, [0, 200], ["0px", "48px"]);
    const marginTop = useTransform(scrollY, [0, 200], ["0px", "12px"]);

    return (
        <div className='flex items-center flex-col gap-20'>

            {/* Main Hero Container */}
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

                    {/* 3D Tilted Card Component */}
                    <div
                        aria-hidden
                        className="perspective-near mask-radial-at-left mask-radial-from-65% mask-radial-to-90% mask-radial-[75%_100%] min-w-2xl mb-6 ml-auto max-w-3xl scale-90 py-12 pl-6 sm:mb-12 md:pl-12 lg:mb-20">

                        {/* REMOVED: hover:rotate-0 hover:scale-105
                           KEPT: rotate-x-12 rotate-y-2 (Static Tilt)
                        */}
                        <div className="rotate-x-12 bg-muted rotate-y-2 rotate-z-10 relative flex h-64 -rotate-12 flex-col rounded-3xl border py-4 pl-4 transition-all duration-500">

                            {/* Floating Menu Card */}
                            <div className="bg-card ring-border shadow-foreground/10 bottom-20 absolute left-4 min-w-60 rounded-2xl p-1 shadow-xl ring-1 dark:shadow-black/25">

                                {/* Feature 1: Upload */}
                                {/* ADDED BACK: hover:bg-muted cursor-pointer */}
                                <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 [&>svg]:size-4 [&>svg]:opacity-65">
                                    <FileText className="text-blue-500" />
                                    <span>Upload PDFs & Notes</span>
                                </div>

                                {/* Separator */}
                                <span className="bg-size-[6px_1px] mx-3 my-0.5 block h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-bottom bg-repeat-x opacity-30 dark:opacity-15" />

                                {/* Feature 2: Planner */}
                                <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 [&>svg]:size-4 [&>svg]:opacity-65">
                                    <Calendar className="text-green-500" />
                                    <span>Generate Study Plan</span>
                                </div>

                                {/* Feature 3: AI Tutor */}
                                <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 [&>svg]:size-4 [&>svg]:opacity-65">
                                    <Brain className="text-purple-500" />
                                    <span>Ask AI Tutor</span>
                                </div>

                                {/* Feature 4: Deep Search */}
                                <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 [&>svg]:size-4 [&>svg]:opacity-65">
                                    <Search className="text-orange-500" />
                                    <span>Deep Search Video</span>
                                </div>

                                {/* Feature 5: Summarizer */}
                                <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 [&>svg]:size-4 [&>svg]:opacity-65">
                                    <Video className="text-red-500" />
                                    <span>Summarize Playlist</span>
                                </div>

                                {/* Feature 6: Study Room */}
                                <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 [&>svg]:size-4 [&>svg]:opacity-65">
                                    <Users className="text-yellow-500" />
                                    <span>Join Study Room</span>
                                </div>
                            </div>

                            {/* Search Bar Input */}
                            <div className="bg-card ring-border shadow-foreground/6.5 dark:shadow-black/6.5 shadow-xs mt-auto flex h-fit w-[90%] justify-between gap-3 rounded-full p-2 ring-1">
                                <div className="flex items-center gap-2">
                                    <div className="bg-muted flex size-9 items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer transition-colors *:size-4">
                                        <Plus />
                                    </div>
                                    <div className="text-muted-foreground text-sm font-medium">I want to master Quantum Physics...</div>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <div className="flex size-9 items-center justify-center rounded-full hover:bg-muted cursor-pointer transition-colors *:size-4">
                                        <Mic2 />
                                    </div>
                                    <div className="bg-foreground text-background flex size-9 items-center justify-center rounded-full hover:brightness-110 cursor-pointer transition-all *:size-4">
                                        <AudioLines />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className='text-[70px] font-medium text-center leading-tight'>
                        Your trusted learning Partner
                    </div>
                    <div className='text-[18px] -translate-y-2 text-muted-foreground text-center'>
                        We teach the world in the most unique and creative learning way.
                    </div>

                    {/* CTA Button */}
                    <div className='group relative cursor-pointer px-6 py-3 bg-[#e5e9eb] flex gap-2 rounded-full overflow-hidden mt-4'>
                        <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
                        <div className='relative z-10 flex gap-2 group-hover:text-white transition-colors duration-500'>
                            <div>Get Started</div>
                            <div className='group-hover:-rotate-45 transition duration-500 text-xl'>👋</div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className='w-11 h-11 rounded-full group flex items-center justify-center hover:bg-[#dedede] transition-all duration-300 cursor-pointer bg-black animate-float mb-6'>
                    <Image
                        src='https://cdn.prod.website-files.com/673786754d248974527e65b5/673a2c5929486b4e031f7c94_dropdown-arrow.svg'
                        alt="Arrow"
                        width={10}
                        height={10}
                        className="rounded-full invert-100 group-hover:invert-25 transition-transform duration-300"
                    />
                </div>

                <div className='left-0 w-full'>
                    <Marquee />
                </div>
            </motion.div>

            {/* Who We Are Section with Showreel */}
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

                    <div className='group relative cursor-pointer w-fit px-6 py-3 bg-[#e5e9eb] flex gap-2 rounded-full overflow-hidden'>
                        <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
                        <div className='relative z-10 flex gap-2 group-hover:text-white transition-colors duration-500'>
                            <div>Explore Tools</div>
                            <div className='group-hover:-rotate-45 transition duration-500 text-xl'><Image src={Logo} alt='Logo' width={23} height={23} /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Placeholder Section */}
            <div className='w-[90vw] rounded-4xl h-100 bg-white'></div>

        </div>
    )
}

export default HeroSection