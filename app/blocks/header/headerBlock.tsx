import React from 'react';
import Image from 'next/image'

function NavigationBar( {
} ) {
  return (
    <>
      <div className='jm-b-navbar bg-transparent backdrop-blur-sm absolute top-0 z-[100] w-full b py-[12px]'>
        <div className="container flex justify-between">
            <div className="logo-container fonr-oswald text-[40px] text-white">
              <Image
              src='/assets/logoooo.svg'
              alt='hero-image'
              width={70}
              height={60}
              className=' mx-auto my-auto w-[50px] h-[40px] md:w-full md:h-full'
            /></div>
            <div className="menu-container align-middle justify-center my-auto hidden md:block">
              <ul className='flex gap-x-[75px] my-auto align-middle justify-center [&>li]:my-auto [&>li]:font-lato [&>li]:text-[14px]'>
                <li><button className='tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all'>Works</button></li>
                <li><button className='tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all'>About</button></li>
                <li><button className='font-oswald px-4 py-3 bg-light-orange-05 text-white tracking-[1.04px] rounded-[4px]'>CONTACT ME</button></li>
              </ul>
            </div>
            <div className="menu-mobile-container align-middle justify-center my-auto block md:hidden">
            <Image
              src='/assets/nav-mb-icon.svg'
              alt='hero-image'
              width={40}
              height={24}
              className=' mx-auto my-auto'
            />
            </div>
        </div>

      </div>
    </>
  );
}

export default NavigationBar;
