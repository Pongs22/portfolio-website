"use client"

import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

function NavigationBar( {
} ) {

  const scrollToSection = ( sectionId: string ) => {
    const section = document.querySelector( sectionId );
    if ( section ) {
      const { top } = section.getBoundingClientRect();
      window.scrollTo( {
        behavior: 'smooth',
        top: top + window.scrollY,
      } );
    }
  };

  const handleClick = ( sectionId: string ) => {
    scrollToSection( sectionId );
  };
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
                <li><button className='tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all' onClick={() => handleClick( '#works' )} >Works</button></li>
                <li><button className='tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all' onClick={() => handleClick( '#about' )}>About</button></li>
                <li><button className='font-oswald px-4 py-3 bg-light-orange-05 hover:bg-light-orange-03 transform transition-all text-white tracking-[1.04px] rounded-[4px]' onClick={() => handleClick( '#contact' )}>CONTACT ME</button></li>
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
