'use client'
import React, { useState } from 'react'
import { Check } from 'lucide-react'
import InteractiveBackground from './ui/InteractiveBackground'

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <div id="pricing" className='w-full flex justify-center pb-20'>
            <div className='w-[90vw] bg-white rounded-4xl relative overflow-hidden'>
                <InteractiveBackground>
                    <div className='py-16 flex flex-col items-center gap-12'>

                {/* Header */}
                <div className='flex flex-col items-center text-center gap-4'>
                    <h2 className='text-[40px] md:text-[50px] font-medium leading-tight text-black tracking-tight'>
                        Plans and Pricing
                    </h2>
                    <p className='text-[18px] text-muted-foreground max-w-lg'>
                        Start for free with daily credits, or upgrade for premium features and credit roll-over.
                    </p>

                    {/* Toggle */}
                    <div className='flex items-center gap-1 bg-[#f3f3f3] p-1.5 rounded-3xl mt-4 border border-[#e5e5e5]'>
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`px-6 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ${!isAnnual ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`flex items-center gap-2 px-6 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ${isAnnual ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
                        >
                            Annual
                            <span className='bg-[#e5e9eb] text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md text-black'>Save 35%</span>
                        </button>
                    </div>
                </div>

                {/* Cards Container */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-[1100px]'>

                    {/* Free Plan */}
                    <div className='flex flex-col p-8 rounded-[32px] border border-[#ebebeb] bg-white h-full justify-between gap-10'>
                        <div>
                            <h3 className='text-2xl font-medium mb-4'>Free</h3>
                            <div className='mb-6 flex flex-col'>
                                <span className='text-[45px] font-medium leading-tight'>$0</span>
                                <p className='text-sm text-muted-foreground'>Perfect for casual learners</p>
                            </div>

                            <div className='space-y-4 mb-4'>
                                <p className='font-medium text-black'>Daily Learning Essential</p>
                                <ul className='space-y-3'>
                                    {[
                                        'Daily Credit Refresh',
                                        'AI Course Search',
                                        'Basic Study Planner',
                                        'YT Q&A Access',
                                        'Public Study Rooms'
                                    ].map((feature, i) => (
                                        <li key={i} className='flex items-center gap-3 text-sm text-[#444]'>
                                            <div className='bg-[#f4f4f5] min-w-5 h-5 flex items-center justify-center rounded text-black'>
                                                <Check size={10} strokeWidth={4} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className='group relative cursor-pointer w-full py-4 bg-white border border-[#e5e5e5] flex justify-center items-center gap-2 rounded-2xl overflow-hidden'>
                            <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
                            <div className='relative z-10 font-medium group-hover:text-white transition-colors duration-500'>
                                Get started for free
                            </div>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className='flex flex-col p-8 rounded-[32px] border border-[#ebebeb] bg-white h-full justify-between gap-10 relative'>
                        <div>
                            <div className='flex items-center justify-between mb-2'>
                                <h3 className='text-2xl font-medium'>Pro</h3>
                                <span className='bg-[#ff6b50] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1'>
                                    <span className='text-xs'>🔥</span> Popular
                                </span>
                            </div>
                            <div className='mb-6 flex flex-col'>
                                <span className='text-[45px] font-medium leading-tight'>$19</span>
                                <p className='text-sm text-muted-foreground'>Roll-over credits included</p>
                            </div>

                            <div className='space-y-4 mb-4'>
                                <p className='font-medium text-black'>For serious students</p>
                                <ul className='space-y-3'>
                                    {[
                                        'Credit Roll-over',
                                        'Advanced AI Models',
                                        'Priority Q&A',
                                        'Private Study Rooms',
                                        'Unlimited Document OCR'
                                    ].map((feature, i) => (
                                        <li key={i} className='flex items-center gap-3 text-sm text-[#444]'>
                                            <div className='bg-[#f4f4f5] min-w-5 h-5 flex items-center justify-center rounded text-black'>
                                                <Check size={10} strokeWidth={4} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className='group relative cursor-pointer w-full py-4 bg-white border border-[#e5e5e5] flex justify-center items-center gap-2 rounded-2xl overflow-hidden'>
                            <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
                            <div className='relative z-10 font-medium group-hover:text-white transition-colors duration-500'>
                                Get started with Pro
                            </div>
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className='flex flex-col p-8 rounded-[32px] bg-[#1a1a1a] text-white h-full justify-between gap-10 border border-[#1a1a1a]'>
                        <div>
                            <h3 className='text-2xl font-medium mb-4'>Enterprise</h3>
                            <div className='mb-6 flex flex-col'>
                                <span className='text-[45px] font-medium leading-tight'>Custom</span>
                                <p className='text-sm text-gray-400'>Per user/month, billed annually</p>
                            </div>

                            <div className='space-y-4 mb-4'>
                                <p className='font-medium text-white'>For multiple teams</p>
                                <ul className='space-y-3'>
                                    {['Everything in Pro', 'Up to 5 team members', '100 monitors', '15 status pages', '200+ integrations'].map((feature, i) => (
                                        <li key={i} className='flex items-center gap-3 text-sm text-gray-300'>
                                            <div className='bg-white text-black min-w-5 h-5 flex items-center justify-center rounded'>
                                                <Check size={10} strokeWidth={4} />
                                            </div>
                                            {feature.includes('Everything in Pro') ? (
                                                <span>Everything in <span className='font-semibold text-white'>Pro</span></span>
                                            ) : (
                                                feature
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className='group relative cursor-pointer w-full py-4 bg-white text-black flex justify-center items-center gap-2 rounded-2xl overflow-hidden'>
                            <div className='absolute inset-0 bg-[#e5e9eb] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
                            <div className='relative z-10 font-medium transition-colors duration-500'>
                                Get started with Enterprise
                            </div>
                        </div>
                    </div>

                </div>
                  </div>
                </InteractiveBackground>
            </div>
        </div>
    )
}

export default Pricing
