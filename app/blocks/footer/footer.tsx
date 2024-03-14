'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

function FooterBlock( {
} ) {
    const currentYear = new Date().getFullYear();

    useEffect( () => {
        const container = document.getElementById( 'contact' );
        const color = ['/assets/id-1.svg', '/assets/id-2.svg', '/assets/id-3.svg','/assets/blue-circ-trail.svg','/assets/blue-cross.svg','/assets/blue-dia-trail.svg','/assets/cross-orange.svg','/assets/white-circ-trail.svg','/assets/white-dia-trail.svg'];
        const fall = ['fall-1', 'fall-2', 'fall-3'];
        const getRandomColor = () => {
            const randomIndex = Math.floor( Math.random() * color.length );
            const randomColor = color[randomIndex];
            return randomColor;
        };
        const getRandomAnimation = () => {
            const randomIndexes = Math.floor( Math.random() * fall.length );
            const randomAnimation = fall[randomIndexes];
            return randomAnimation;
        };
        if ( container ) {
            const createStar = ( x: number, y: number ) => {
                const star = document.createElement( 'span' );
                star.className = 'star';
                star.style.left = x + 'px';
                star.style.top = y + 'px';
                star.style.background = `url( ${getRandomColor()} ) center / cover no-repeat`;
                star.style.animation = `${getRandomAnimation()} 2s ease-in-out`;
                container.appendChild ( star );
                setTimeout( () => {
                    star.remove();
                }, 1200 );
            };

            let prevMouseX = 0;
            let prevMouseY = 0;
            let totalDistance = 0;

            const handleMove = ( event: MouseEvent ) => {
                const { clientX, clientY } = event;
                const distance = Math.sqrt( ( clientX - prevMouseX ) ** 2 + ( clientY - prevMouseY ) ** 2 );
                totalDistance += distance;
                while ( totalDistance >= 25 ) {
                    createStar( clientX, clientY );
                    totalDistance -= 25;
                }
                prevMouseX = clientX;
                prevMouseY = clientY;
            };

            container.addEventListener( 'mousemove', handleMove );

            return () => {
                container.removeEventListener( 'mousemove', handleMove );
            };
        }
    }, [] );

    return (
        <>
            <footer className='jm-b-footer bg-dark-blue-05 relative z-10'>
                <div className="contact-section-wrapper container max-w-[1144px]" >
                    <div id='contact' className="content text-center md:text-start flex flex-col gap-y-2 md:flex-row justify-between bg-dark-blue-01 mt-[-80px] md:mt-[-125px] py-5 px-8 md:p-[40px] lg:py-[76px] lg:px-[97px]">
                        <div className="text-container lg:max-w-[461px] md:max-w-[419px] max-w-[351px] mx-auto md:mx-0">
                            <h2 className='font-oswald text-[20px] leading-[18.24px] tracking-[0.32px] md:text-[28px] md:leading-[25.536px] md:tracking-[0.44px] lg:text-[40px] lg:leading-[36.48px] lg:tracking-[0.64px] mb-3'>Have a question?</h2>
                            <p className='font-lato text-[12px] md:text-[16px] lg:leading-[25px]'>While I&apos;m not actively seeking new job at the moment, I am very happy to respond to your messages or even have a tea with you. </p>
                        </div>
                        <div className="button-container md:my-auto mt-3 py-2">
                            <Link href='mailto:junmarm18@gmail.com' className='py-2 px-4 lg:py-[12px] lg:px-[27px] my-auto font-oswald md:text-[16px] md:tracking-[1.12px] lg:text-[24px] font-semibold bg-light-orange-05 hover:bg-light-orange-03 transform transition-all rounded-[4px]'>Send a Message</Link>
                        </div>
                    </div>
                </div>
                <div className="wrapper border-b border-dark-blue-01 bg-dark-blue-05 relative z-10" >
                    <div className="container max-w-[1144px] pt-[80px] md:pt-[125px] px-[28px] pb-[32px] mx-auto relative hidden lg:block">
                        <Image
                            src='/assets/footer-bg-portfolio.svg'
                            alt='footer-image'
                            width={1142}
                            height={310}
                            className=' my-auto w-full h-full'
                        />
                        <Image
                            src='/assets/footer-hover-1.svg'
                            alt='footer-image'
                            data-atropos-offset="10"
                            width={288}
                            height={168}
                            className=' my-auto absolute bottom-[62px] left-[122px] animate-bounce-slow-2'
                        />
                        <Image
                            src='/assets/footer-hover-2.svg'
                            alt='footer-image'
                            width={217}
                            height={140}
                            data-atropos-offset="-10"
                            className=' my-auto absolute top-[225px] right-[150px] animate-bounce-slow'
                        />
                    </div>
                    <div className="container max-w-[1144px] pt-[80px] md:pt-[125px] px-[28px] pb-[32px] mx-auto relative lg:hidden">
                        <Image
                            src='/assets/footer-feature.svg'
                            alt='footer-image'
                            width={1142}
                            height={310}
                            className=' my-auto w-full h-full'
                        />
                    </div>
                </div>
                <div className="container max-w-[1144px] grid grid-cols-2 gap-y-4 md:flex md:justify-between flex-col md:flex-row py-[30px] text-center justify-center mx-auto">
                    <div className="logo-wrapper order-1">
                        <Image
                            src='/assets/logoooo.svg'
                            alt='hero-image'
                            width={70}
                            height={60}
                            className=' my-auto w-[50px] h-[40px] md:w-full md:h-full'
                        />
                    </div>
                    <div className="copyright-wrapper my-auto order-3 md:order-2 col-span-2">
                        <p className='font-lato text-light-gray-01 text-[12px] md:text-[16px] tracking-[1.12px]'>Built and designed by me @ {currentYear} </p>
                    </div>
                    <div className="social-link-wrapper md:my-auto order-2 md:order-3 my-auto">
                        <ul className='flex gap-x-[36px] my-auto mx-auto align-middle justify-center'>
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
                                        className=' mx-auto my-auto grayscale hover:grayscale-0 transition-all'
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
                                        className=' mx-auto my-auto grayscale hover:grayscale-0 transition-all'
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
                                        className=' mx-auto my-auto grayscale hover:grayscale-0 transition-all'
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterBlock;
