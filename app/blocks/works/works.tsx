"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Atropos from 'atropos/react';
import gsap from 'gsap';
import SplitType from 'split-type';

function WorksBlock( {
} ) {

    useEffect( () => {

        new SplitType( '#workssplit' );
        gsap.from( '#workssplit .char', {
            y: -10,
            stagger: 0.02,
            delay: 0.02,
            duration: .1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.jm-b-works-section',
                start: 'top+=75px center',
                end: 'top+=85px center',
            },
        } );
        gsap.set( '.jm-b-works-section .description', { opacity: 0 } );
        gsap.to( '.jm-b-works-section .description', {
            opacity: 1,
            delay: 0.2,
            scrollTrigger: {
                trigger: '.jm-b-works-section',
                start: 'top+=75px center',
                end: 'top+=75px center',
            },
        } );

        gsap.set( '.jm-b-works-section .third-image', { opacity: 1 } );
        gsap.to( '.jm-b-works-section .third-image', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.jm-b-works-section',
                start: 'bottom center',
                end: 'bottom center',
                scrub: 1,
            },
        } );

        gsap.set( '.jm-b-works-section .first-image', { opacity: 0 } );
        gsap.to( '.jm-b-works-section .first-image', {
            opacity: 1,
            scrollTrigger: {
                trigger: '.jm-b-works-section',
                start: 'top center',
                end: 'top center',
                scrub: 1,
            },
        } );

        const worksText = document.querySelectorAll( '.jm-b-works-section .works-text-container' );
        gsap.utils.toArray( worksText ).forEach( function ( g ) {
            gsap.set( g as HTMLElement, {opacity:0, x:-100} );
            gsap.to( g as HTMLElement, {
                opacity: 1,
                x:0,
                stagger: 4,
                scrollTrigger: {
                    trigger: g as HTMLElement,
                    start: 'top-=250px center',
                    end: 'top-=250px center',
                },
            } );
        } );

        const worksImage = document.querySelectorAll( '.jm-b-works-section .works-image-container' );
        gsap.utils.toArray( worksImage ).forEach( function ( g ) {
            gsap.set( g as HTMLElement, {opacity:0, x:100} );
            gsap.to( g as HTMLElement, {
                opacity: 1,
                x:0,
                stagger: 4,
                scrollTrigger: {
                    trigger: g as HTMLElement,
                    start: 'top-=250px center',
                    end: 'top-=250px center',
                },
            } );
        } );

        gsap.set( '.jm-b-works-section .work-text-container', { opacity:0, x:100 } );
        gsap.to( '.jm-b-works-section .work-text-container', {
            opacity: 1,
            x:0,
            scrollTrigger: {
                trigger: '.jm-b-works-section .work-text-container',
                start: 'top-=250px center',
                end: 'top-=250px center',
            },
        } );

        gsap.set( '.jm-b-works-section .work-image-container', {opacity:0, x:-100} );
        gsap.to( '.jm-b-works-section .work-image-container', {
            opacity: 1,
            x:0,
            scrollTrigger: {
                trigger: '.jm-b-works-section .work-image-container',
                start: 'top-=250px center',
                end: 'top-=250px center',
            },
        } );

        const container = document.getElementById( 'works' );
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
                while ( totalDistance >= 100 ) {
                    createStar( clientX, clientY );
                    totalDistance -= 100;
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
            <div className='jm-b-works-section color bg-dark-blue-04 py-[80px] md:py-[125px] overflow-hidden relative ' id='works' data-color='#111737'>
                <Image
                    src='/assets/first-image.svg'
                    alt='css-icon'
                    width={700}
                    height={700}
                    className='first-image absolute hidden md:block md:top-[300px] lg:top-[300px] z-1 animate-spin-slow -left-[200px] md:w-[450px] lg:w-[700px]' />
                <Image
                    src='/assets/second-image.svg'
                    alt='css-icon'
                    width={800}
                    height={800}
                    className='absolute hidden md:block lg:top-[950px] z-1 animate-spin-slow -right-[200px] md:w-[550px] lg:w-[900px] md:top-[800px]' />
                <Image
                    src='/assets/third-image.svg'
                    alt='css-icon'
                    width={800}
                    height={800}
                    className='third-image absolute hidden md:block lg:bottom-[-150px] z-1 animate-spin-slow -left-[200px] md:w-[550px] lg:w-[900px] md:bottom-[50px]' />
                <div className="container header-container max-w-[1144px]">
                    <div className="text-container md:max-w-[400px] lg:max-w-[557px]">
                        <h4 className='font-oswald text-[24px] lg:text-[30px] tracking-[1.5px] ' id='workssplit'>FEATURED WORKS</h4>
                        <p className='font-lato text-[12px] md:text-[16px] lg:text-[20px] tracking-[0.2px] text-white mt-4 description'>Each project represents a unique challenge I&apos;ve tackled, combining creativity, attention to detail, and a user-centric approach.</p>
                    </div>
                </div>
                <div className="works-container container md:mt-[150px] mt-[60px] lg:mt-[230px] max-w-[1144px] relative z-10">
                    <div className="grid grid-cols-1 md:gap-y-[245px] gap-y-[80px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
                            <div className="works-text-container col-span-2 md:col-span-1 order-2 md:order-1 md:my-auto md:max-w-[477px] mt-4 p-1">
                                <h4 className='mb-2 lg:mb-4 font-oswald lg:text-[30px] md:text-[20px] md:tracking-[1.4px] lg:tracking-[1.5px]'>RISING WAVE</h4>
                                <div className="paragraph-wrapper p-6 bg-dark-blue-01 text-light-blue-01 overflow-hidden">
                                    <p className='text-[12px] md:tracking-[0.12px] lg:text-[16px]'>A Distributed SQL stream processing database, simplifying real-time app development with seamless data ingestion.</p>
                                    <ul className='flex gap-x-[10px] font-lato text-[9px] lg:text-[10px] tracking-[0.1px] text-light-orange-05 mt-2'>
                                        <li>Wordpress</li>
                                        <li>Javascript</li>
                                        <li>PHP</li>
                                        <li>Sass</li>
                                    </ul>
                                </div>
                                <div className="link-container mt-[28px] flex justify-end">
                                    <Link href="https://risingwave.com" target='_blank' className='font-lato text-[16px] tracking-[0.46px]  ring-1 ring-white text-white hover:ring-light-blue-05 hover:text-light-blue-05 transform transition-all px-3 py-2 rounded-[4px]'>View Website</Link>
                                </div>
                            </div>
                            <div className="works-image-container col-span-2 md:col-span-1 order-1 md:order-2 justify-end flex relative">

                                <Image
                                    src='/assets/img-background.svg'
                                    alt='hero-image'
                                    width={558}
                                    height={449}
                                    className='absolute right-[-50%] z-1 top-1/2 translate-y-[-50%]'
                                />
                                <Atropos shadow={true} shadowScale={0.4} highlight={true} activeOffset={2} className="w-full h-full " >
                                    <div className="bg-[#0257DA] relative">
                                        <Image
                                            src='/assets/rw-no-bg-img.svg'
                                            alt='hero-image'
                                            width={558}
                                            height={449}
                                            className='flex w-full md:w-[558px] '
                                            data-atropos-offset="15"
                                        />
                                    </div>
                                </Atropos>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
                            <div className="text-container col-span-2 md:col-span-1 order-2 my-auto justify-end flex">
                                <div className="work-text-container col-span-2 md:col-span-1 order-2 md:order-1 md:my-auto md:max-w-[477px] mt-4 p-1">
                                    <h4 className='mb-2 lg:mb-4 font-oswald lg:text-[30px] md:text-[20px] md:tracking-[1.4px] lg:tracking-[1.5px] md:text-end'>MINDPORT</h4>
                                    <div className="paragraph-wrapper p-6 bg-dark-blue-01 text-light-blue-01" >
                                        <p className='text-[12px] md:tracking-[0.12px] lg:text-[16px]'>A platform where you can share your experience, guided by friends and mentors, for a better self growth and career.</p>
                                        <ul className='flex gap-x-[10px] font-lato text-[9px] lg:text-[10px] tracking-[0.1px] text-light-orange-05 mt-2'>
                                            <li>Wordpress</li>
                                            <li>Javascript</li>
                                            <li>PHP</li>
                                            <li>Sass</li>
                                        </ul>
                                    </div>
                                    <div className="link-container mt-[28px] flex justify-end md:justify-start">
                                        <Link href="https://mindportjourney.com" target='_blank' className='font-lato text-[16px] tracking-[0.46px] ring-1 ring-white px-3 py-2 rounded-[4px] text-white hover:ring-light-blue-05 hover:text-light-blue-05 transform transition-all'>View Website</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="work-image-container col-span-2 md:col-span-1 order-1 flex relative">
                                <Image
                                    src='/assets/img-background.svg'
                                    alt='hero-image'
                                    width={558}
                                    height={449}
                                    className='absolute left-[-50%] z-1 top-1/2 translate-y-[-50%]'
                                />
                                 <Atropos shadow={true} shadowScale={0.4} highlight={true} activeOffset={2} className="w-full h-full " >
                                    <div className="bg-[#E67635] relative">
                                        <Image
                                            src='/assets/mp-no-bg-img.svg'
                                            alt='hero-image'
                                            width={558}
                                            height={449}
                                            className='flex w-full md:w-[558px] '
                                            data-atropos-offset="15"
                                        />
                                    </div>
                                </Atropos>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
                            <div className="works-text-container col-span-2 md:col-span-1 order-2 md:order-1 md:my-auto md:max-w-[477px] mt-4 p-1">
                                <h4 className='mb-2 lg:mb-4 font-oswald lg:text-[30px] md:text-[20px] md:tracking-[1.4px] lg:tracking-[1.5px]'>LOBY</h4>
                                <div className="paragraph-wrapper p-6 bg-dark-blue-01 text-light-blue-01">
                                    <p className='text-[12px] md:tracking-[0.12px] lg:text-[16px]'>An efficient building management system to enhance residents’ experience with intuitive and smart solutions.</p>
                                    <ul className='flex gap-x-[10px] font-lato text-[9px] lg:text-[10px] tracking-[0.1px] text-light-orange-05 mt-2'>
                                        <li>React</li>
                                        <li>Nextjs</li>
                                        <li>Tailwind</li>
                                        <li>GSAP</li>
                                    </ul>
                                </div>
                                <div className="link-container mt-[28px] flex justify-end">
                                    <Link href="https://www.loby.tech" target='_blank' className='font-lato text-[16px] tracking-[0.46px] ring-1 ring-white px-3 py-2 rounded-[4px] text-white hover:ring-light-blue-05 hover:text-light-blue-05 transform transition-all'>View Website</Link>
                                </div>
                            </div>
                            <div className="works-image-container col-span-2 md:col-span-1 order-1 md:order-2 justify-end flex relative">
                                <Image
                                    src='/assets/img-background.svg'
                                    alt='hero-image'
                                    width={558}
                                    height={449}
                                    className='absolute right-[-50%] z-1 top-1/2 translate-y-[-50%]'
                                />
                               <Atropos shadow={true} shadowScale={0.4} highlight={true} activeOffset={2} className="w-full h-full " >
                                    <div className="bg-gray-100 relative">
                                        <Image
                                            src='/assets/loby-no-bg-img.svg'
                                            alt='hero-image'
                                            width={558}
                                            height={449}
                                            className='flex w-full md:w-[558px] '
                                            data-atropos-offset="15"
                                        />
                                    </div>
                                </Atropos>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

        </>
    );
}

export default WorksBlock;
