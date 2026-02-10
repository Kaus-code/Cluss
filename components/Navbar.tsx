import React from 'react'
import Image from 'next/image'
import Logo from '../public/Logo.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 text-black md:mx-10 lg:mx-15 mt-1'>
      <div className='flex gap-2 items-center cursor-pointer'>
        <Image src={Logo} alt="Logo" className="rounded-full w-9" />
        <div className='text-2xl coiny text-[#666666]'>cluss</div>
      </div>
      <div className='hidden gap-8 lg:gap-13 md:flex'>
        <div className='relative cursor-pointer transition duration-300 group'>
          <div className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#bbbbbb] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">
            Home
          </div>
        </div>
        <div className='group cursor-pointer flex items-center gap-1.5 hover:text-[#bbbbbb] transition duration-300'>
          <div>About</div>
          <Image src='https://cdn.prod.website-files.com/673786754d248974527e65b5/673a2c5929486b4e031f7c94_dropdown-arrow.svg' alt="Logo" width={7} height={7} className="rounded-full group-hover:scale-y-[-1] group-hover:invert-75 transition-transform duration-300 cursor-pointer" />
        </div>
        <div className='group cursor-pointer flex items-center gap-1.5 hover:text-[#bbbbbb] transition duration-300'>
          <div>Contact Us</div>
          <Image src='https://cdn.prod.website-files.com/673786754d248974527e65b5/673a2c5929486b4e031f7c94_dropdown-arrow.svg' alt="Logo" width={7} height={7} className="rounded-full group-hover:scale-y-[-1] group-hover:invert-75 transition-transform duration-300 cursor-pointer" />
        </div>
        <div className='relative cursor-pointer transition duration-300 group'>
          <div className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#bbbbbb] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">
            Explore 
          </div>
        </div>
      </div>
      <div className='flex lg:hidden items-center gap-5'>
        <div className='group relative cursor-pointer px-3 py-2 md:px-5 md:py-3 bg-[#e5e9eb] flex gap-2 rounded-full overflow-hidden'>
          <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
          <div className='relative z-10 flex gap-2 group-hover:text-white transition-colors duration-500'>
            <div>Let's Start</div>
            <div className='group-hover:-rotate-45 transition duration-500' >👋</div>
          </div>
        </div>
        <div className='hover:bg-[#e5e9eb] rounded-full cursor-pointer transition duration-700 hover:translate-x-1 hover:translate-y-[-2px]'><Image src="https://cdn.prod.website-files.com/673786754d248974527e65b5/673a401dc37634f53f2462ea_Button%20menu.svg" alt="Logo" width={40} height={40} className="rounded-full" /></div>
      </div>
      <div className='hidden lg:flex items-center gap-5'>
        <div className='hover:bg-[#e5e9eb] rounded-full cursor-pointer transition duration-700 hover:translate-x-1 hover:translate-y-[-2px]'><Image src="https://cdn.prod.website-files.com/673786754d248974527e65b5/673a401dc37634f53f2462ea_Button%20menu.svg" alt="Logo" width={40} height={40} className="rounded-full" /></div>
        <div className='group relative cursor-pointer px-3 py-2 md:px-5 md:py-3 bg-[#e5e9eb] flex gap-2 rounded-full overflow-hidden'>
          <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
          <div className='relative z-10 flex gap-2 group-hover:text-white transition-colors duration-500'>
            <div>Let's Start</div>
            <div className='group-hover:-rotate-45 transition duration-500' >👋</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar