import { ArrowDown } from 'lucide-react'
import React from 'react'
import GeometricBackground from '@/components/ui/GeometricBackground'

const explore = () => {
    return (
        <GeometricBackground>
            <div className='min-h-screen flex flex-col items-center justify-between pt-32 pb-10'>
                <div className='flex-1 flex flex-col items-center justify-center gap-8 px-4 text-center max-w-5xl mx-auto'>
                    {/* Headline */}
                <h1 className='text-[40px] md:text-[80px] font-medium leading-[1.1] text-black tracking-tight'>
                    Supercharge Your Startup with<br className='hidden md:block' /> Design and Branding
                </h1>

                {/* CTA Button */}
                <div className='group relative cursor-pointer px-8 py-4 bg-[#e5e9eb] flex items-center gap-2 rounded-full hover:bg-[#d9dee1] transition-colors duration-300'>
                    <span className='text-[16px] md:text-[18px] font-medium'>Request a quote 👋</span>
                </div>

                {/* Subheadline */}
                <p className='text-[16px] md:text-[18px] text-gray-800 font-normal max-w-sm'>
                    Tailored Solutions to help startups stand out and grow
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className='flex justify-center w-full'>
                <div className='w-12 h-12 rounded-full bg-black flex items-center justify-center animate-float cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg'>
                    <ArrowDown className='text-white w-5 h-5' />
                </div>
            </div>
            </div>
        </GeometricBackground>
    )
}

export default explore