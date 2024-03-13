"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

function NavigationBar( {
} ) {
  const [preventScroll, setpreventScroll] = useState( false );
  useEffect( () => {
   
    const mains = document.querySelector( 'main' );
  
    if ( preventScroll ) {
      if( mains ){
      mains.classList.add( 'overflow-hidden','overflow-x-hidden' );
    }
    }
    else {
      if( mains ){
      mains.classList.remove( 'overflow-hidden' );
      }
    }

    const handleResize = () => {
      setpreventScroll( false );
    };
    window.addEventListener( 'resize', handleResize );
  }, [preventScroll] );

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
    setpreventScroll( false );
  };

  return ( 
    <>
      <div className='jm-b-navbar bg-transparent absolute top-0 z-[100] w-full b py-[12px]'>
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
            <button onClick={() => setpreventScroll( true )} id='navBtn'>
              <Image
                src='/assets/nav-mb-icon.svg'
                alt='hero-image'
                width={40}
                height={24}
                className=' mx-auto my-auto'
              />
            </button>
          </div>
        </div>
     
      <div className={`nav-bar-dropdown  absolute ${preventScroll ? ' block' : ' hidden '} transform transition-all top-0 h-screen w-screen md:hidden z-[999] duration-700  bg-black/80`} id='backDrop'>
      </div>
      <div className={`w-[275px] bg-dark-blue-01 h-screen  ${preventScroll ? ' right-0 ' : ' right-[-100%] '} top-0 absolute z-[1000] transform transition-all duration-500 py-[12px] px-[24px] justify-end flex`} id='navMenu'>
        <button onClick={() => setpreventScroll( false )} id='navBtn'>
          <Image
            src='/assets/close-img.svg'
            alt='hero-image'
            width={40}
            height={24}
            className='absolute top-[12px] right-[24px]'
          />
        </button>   
        <div className="menu-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-[32px]">
          <ul className='flex flex-col gap-y-[50px] my-auto align-middle justify-center [&>li]:my-auto [&>li]:font-lato [&>li]:text-[14px]'>
            <li className='flex mx-auto'><button className='tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all' onClick={() => handleClick( '#works' )}>Works</button></li>
            <li className='flex mx-auto'><button className='tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all' onClick={() => handleClick( '#about' )}>About</button></li>
            <li className='flex mx-auto'><button className='tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all' onClick={() => handleClick( '#contact' )}>Contact Me</button></li>
            <li className='flex mx-auto'><button className='font-oswald px-4 py-3 bg-light-orange-05 hover:bg-light-orange-03 transform transition-all text-white tracking-[1.04px] rounded-[4px]' onClick={() => handleClick( '#contact' )}>Download CV</button></li>
          </ul>
          <ul className='flex gap-x-[36px] my-auto mx-auto align-middle justify-center'>
            <li >
              <p className='sr-only'>
                Linkedin</p>
              <Link href={'#'} >
                <Image
                  src='/assets/linked-in-icon.svg'
                  alt='hero-image'
                  width={36}
                  height={36}
                  sizes='100vw'
                  className=' mx-auto my-auto transition-all'
                />
              </Link>
            </li>
            <li>
              <p className='sr-only'>GitHub</p>
              <Link href={'#'} >
                <Image
                  src='/assets/git-hub-icon.svg'
                  alt='hero-image'
                  width={36}
                  height={36}
                  sizes='100vw'
                  className=' mx-auto my-auto transition-all'
                />
              </Link>
            </li>
            <li className=''>
              <p className='sr-only'>Facebook</p>
              <Link href={'#'}>
                <Image
                  src='/assets/facebook-icon.svg'
                  alt='hero-image'
                  width={36}
                  height={36}
                  sizes='100vw'
                  className=' mx-auto my-auto transition-all'
                />
              </Link>
            </li>
          </ul>
        </div>
        </div>
        </div>
    </>
   );
}

export default NavigationBar;
