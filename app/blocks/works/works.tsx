"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Atropos from 'atropos/react';

function WorksBlock( {
} ) {

    useEffect( () => {
        const container = document.getElementById( 'qouteText' );
        const color = ['/assets/id-1.svg', '/assets/id-2.svg', '/assets/id-3.svg'];
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
            <div className='jm-b-works-section bg-dark-blue-04 py-[80px] md:py-[125px] overflow-hidden relative'>
                <Image
                    src='/assets/first-image.svg'
                    alt='css-icon'
                    width={700}
                    height={700}
                    className='absolute hidden md:block md:top-[300px] lg:top-[300px] z-1 animate-spin-slow -left-[200px] md:w-[450px] lg:w-[700px]' />
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
                    className='absolute hidden md:block lg:bottom-[-150px] z-1 animate-spin-slow -left-[200px] md:w-[550px] lg:w-[900px] md:bottom-[50px]' />
                <div className="container header-container max-w-[1144px]">
                    <div className="text-container md:max-w-[400px] lg:max-w-[557px]">
                        <h4 className='font-oswald md:text-[24px] lg:text-[30px] tracking-[1.5px]'>FEATURED <span className='text-light-orange-05'>WORKS</span></h4>
                        <p className='font-lato md:text-[16px] lg:text-[20px] tracking-[0.2px] text-light-blue-01 mt-4'>Each project represents a unique challenge I&apos;ve tackled, combining creativity, attention to detail, and a user-centric approach.</p>
                    </div>
                </div>
                <div className="works-container container md:mt-[150px] mt-[80px] lg:mt-[230px] max-w-[1144px] relative z-10">
                    <div className="grid grid-cols-1 md:gap-y-[245px] gap-y-[100px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
                            <div className="text-container col-span-2 md:col-span-1 order-2 md:order-1 md:my-auto md:max-w-[477px] mt-4 p-1">
                                <h4 className='mb-2 lg:mb-4 font-oswald lg:text-[30px] md:text-[20px] md:tracking-[1.4px] lg:tracking-[1.5px]'>RISING WAVE (US)</h4>
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
                                    <Link href="#" className='font-lato text-[16px] tracking-[0.46px] ring-1 ring-white px-3 py-2 rounded-[4px]'>View Website</Link>
                                </div>
                            </div>
                            <div className="text-container col-span-2 md:col-span-1 order-1 md:order-2 justify-end flex relative">

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
                                <div className="text-container col-span-2 md:col-span-1 order-2 md:order-1 md:my-auto md:max-w-[477px] mt-4 p-1">
                                    <h4 className='mb-2 lg:mb-4 font-oswald lg:text-[30px] md:text-[20px] md:tracking-[1.4px] lg:tracking-[1.5px] md:text-end'>MINDPORT (THAILAND)</h4>
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
                                        <Link href="#" className='font-lato text-[16px] tracking-[0.46px] ring-1 ring-white px-3 py-2 rounded-[4px]'>View Website</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="text-container col-span-2 md:col-span-1 order-1 flex relative">
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
                            <div className="text-container col-span-2 md:col-span-1 order-2 md:order-1 md:my-auto md:max-w-[477px] mt-4 p-1">
                                <h4 className='mb-2 lg:mb-4 font-oswald lg:text-[30px] md:text-[20px] md:tracking-[1.4px] lg:tracking-[1.5px]'>LOBY (SINGAPORE)</h4>
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
                                    <Link href="#" className='font-lato text-[16px] tracking-[0.46px] ring-1 ring-white px-3 py-2 rounded-[4px]'>View Website</Link>
                                </div>
                            </div>
                            <div className="text-container col-span-2 md:col-span-1 order-1 md:order-2 justify-end flex relative">
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
