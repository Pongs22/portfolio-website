"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

function NavigationBar( {
} ) {
  const [preventScroll, setpreventScroll] = useState( false );
  useEffect( () => {
   
    const mains = document.querySelector( 'body' );
    if( mains ){
      if ( preventScroll ) {
      mains.classList.add( 'overflow-hidden' );
    }
    else {
      mains.classList.remove( 'overflow-hidden' );
    }
    return () => {
      mains.classList.remove( 'overflow-hidden' );
      mains.classList.add( 'overflow-x-hidden' );
    };
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
      <div className='jm-b-navbar b absolute top-0 z-[100] w-full bg-transparent py-[12px]'>
        <div className="container flex justify-between">
          <div className="logo-container fonr-oswald text-[40px] text-white">
            <Image
              src='/assets/logoooo.svg'
              alt='hero-image'
              width={70}
              height={60}
              className='mx-auto my-auto h-[40px] w-[50px] md:h-full md:w-full'
            /></div>
          <div className="menu-container my-auto hidden justify-center align-middle md:block">
            <ul className='flex gap-x-[75px] my-auto align-middle justify-center [&>li]:my-auto [&>li]:font-lato [&>li]:text-[14px]'>
            <li className='hidden'><Link href={'/login'} className='font-bold tracking-[1.4px] transition-all hover:text-light-blue-05' >Login</Link></li>
              <li><button className='font-bold tracking-[1.4px] transition-all hover:text-light-blue-05' onClick={() => handleClick( '#works' )} >Works</button></li>
              <li><button className='font-bold tracking-[1.4px] transition-all hover:text-light-blue-05' onClick={() => handleClick( '#about' )}>About</button></li>
              <li><button className='transform rounded-[4px] bg-light-orange-05 px-4 py-3 font-oswald tracking-[1.04px] text-white transition-all hover:bg-light-orange-03' onClick={() => handleClick( '#contact' )}>CONTACT ME</button></li>
            </ul>
          </div>
          <div className="menu-mobile-container my-auto block justify-center align-middle md:hidden">
            <button onClick={() => setpreventScroll( true )} id='navBtn'>
              <Image
                src='/assets/nav-mb-icon.svg'
                alt='hero-image'
                width={40}
                height={24}
                className='mx-auto my-auto'
              />
            </button>
          </div>
        </div>
     
      <div className={`nav-bar-dropdown  absolute ${preventScroll ? ' block' : ' hidden '} transform transition-all top-0 h-screen w-screen md:hidden z-[999] duration-700  bg-black/80`} id='backDrop'>
      </div>
      <div className={`w-[275px] md:hidden bg-dark-blue-01 h-screen  ${preventScroll ? ' right-0 ' : ' right-[-200%] '} top-0 absolute z-[1000] transform transition-all duration-500 py-[12px] px-[24px] justify-end flex`} id='navMenu'>
        <button onClick={() => setpreventScroll( false )} id='navBtn'>
          <Image
            src='/assets/close-img.svg'
            alt='hero-image'
            width={40}
            height={24}
            className='absolute right-[24px] top-[12px]'
          />
        </button>   
        <div className="menu-wrapper absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-y-[32px]">
          <ul className='flex flex-col gap-y-[50px] my-auto align-middle justify-center [&>li]:my-auto [&>li]:font-lato [&>li]:text-[14px] md:hidden'>
            <li className='mx-auto flex'><button className='font-bold tracking-[1.4px] transition-all hover:text-light-blue-05' onClick={() => handleClick( '#works' )}>Works</button></li>
            <li className='mx-auto flex'><button className='font-bold tracking-[1.4px] transition-all hover:text-light-blue-05' onClick={() => handleClick( '#about' )}>About</button></li>
            <li className='mx-auto flex'><button className='font-bold tracking-[1.4px] transition-all hover:text-light-blue-05' onClick={() => handleClick( '#contact' )}>Contact Me</button></li>
            <li className='mx-auto flex'><a href="/assets/jm-portfolio.pdf" download="JM Portfolio" className='transform rounded-[4px] bg-light-orange-05 px-4 py-3 font-oswald tracking-[1.04px] text-white transition-all hover:bg-light-orange-03'>Download CV</a></li>
          </ul>
          <ul className='mx-auto my-auto flex justify-center gap-x-[36px] align-middle'>
          <li>
            <p className='sr-only'>
                Linkedin</p>
            <Link href={'https://www.linkedin.com/in/jun-mar-manuel-6899a9228/'} target='_blank'>
                <Image
                    src='/assets/linked-in-icon.svg'
                    alt='hero-image'
                    width={36}
                    height={36}
                    sizes='100vw'
                    className='mx-auto my-auto transition-all'
                />
            </Link>
          </li>
            <li>
                <p className='sr-only'>GitHub</p>
                <Link href={'https://github.com/Pongs22'} target='_blank' >
                    <Image
                        src='/assets/git-hub-icon.svg'
                        alt='hero-image'
                        width={36}
                        height={36}
                        sizes='100vw'
                        className='mx-auto my-auto transition-all'
                    />
                </Link>
            </li>
            <li className=''>
                <p className='sr-only'>Facebook</p>
                <Link href={'https://www.facebook.com/junmarm'} target='_blank'>
                    <Image
                        src='/assets/facebook-icon.svg'
                        alt='hero-image'
                        width={36}
                        height={36}
                        sizes='100vw'
                        className='mx-auto my-auto transition-all'
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
