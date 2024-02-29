"use client"

import Image from 'next/image'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );
function QouteBlock( {
} ) {
    function hideBox() {

        gsap.to( '#box-1', { opacity: 0, delay: .1, duration: .1 } );
        gsap.to( '#box-6', { opacity: 0, delay: .2, duration: .1 } );
        gsap.to( '#box-0', { opacity: 0, delay: .3, duration: .1 } );
        gsap.to( '#box-4', { opacity: 0, delay: .4, duration: .1 } );
        gsap.to( '#box-8', { opacity: 0, delay: .5, duration: .1 } );
        gsap.to( '#box-2', { opacity: 0, delay: .6, duration: .1 } );
        gsap.to( '#box-3', { opacity: 0, delay: .7, duration: .1 } );
        gsap.to( '#box-9', { opacity: 0, delay: .8, duration: .1 } );
        gsap.to( '#box-5', { opacity: 0, delay: .9, duration: .1 } );
        gsap.to( '#box-7', { opacity: 0, delay: 1, duration: .1 } );
    }

    function showBox() {

        gsap.to( '#box-1', { opacity: 1, delay: .1, duration: .1 } );
        gsap.to( '#box-6', { opacity: 1, delay: .2, duration: .1 } );
        gsap.to( '#box-0', { opacity: 1, delay: .3, duration: .1 } );
        gsap.to( '#box-4', { opacity: 1, delay: .4, duration: .1 } );
        gsap.to( '#box-8', { opacity: 1, delay: .5, duration: .1 } );
        gsap.to( '#box-2', { opacity: 1, delay: .6, duration: .1 } );
        gsap.to( '#box-3', { opacity: 1, delay: .7, duration: .1 } );
        gsap.to( '#box-9', { opacity: 1, delay: .8, duration: .1 } );
        gsap.to( '#box-5', { opacity: 1, delay: .9, duration: .1 } );
        gsap.to( '#box-7', { opacity: 1, delay: 1, duration: .1 } );

    }

    function hideBox2() {

        gsap.to( '#box-14', { opacity: 0, delay: .1, duration: .1 } );
        gsap.to( '#box-18', { opacity: 0, delay: .2, duration: .1 } );
        gsap.to( '#box-16', { opacity: 0, delay: .3, duration: .1 } );
        gsap.to( '#box-11', { opacity: 0, delay: .4, duration: .1 } );
        gsap.to( '#box-17', { opacity: 0, delay: .5, duration: .1 } );
        gsap.to( '#box-10', { opacity: 0, delay: .6, duration: .1 } );
        gsap.to( '#box-19', { opacity: 0, delay: .7, duration: .1 } );
        gsap.to( '#box-12', { opacity: 0, delay: .8, duration: .1 } );
        gsap.to( '#box-13', { opacity: 0, delay: .9, duration: .1 } );
        gsap.to( '#box-15', { opacity: 0, delay: 1, duration: .1 } ) ;
    }

    function showBox2() {

        gsap.to( '#box-14', { opacity: 1, delay: .1, duration: .1 } );
        gsap.to( '#box-18', { opacity: 1, delay: .2, duration: .1 } );
        gsap.to( '#box-16', { opacity: 1, delay: .3, duration: .1 } );
        gsap.to( '#box-11', { opacity: 1, delay: .4, duration: .1 } );
        gsap.to( '#box-17', { opacity: 1, delay: .5, duration: .1 } );
        gsap.to( '#box-10', { opacity: 1, delay: .6, duration: .1 } );
        gsap.to( '#box-19', { opacity: 1, delay: .7, duration: .1 } );
        gsap.to( '#box-12', { opacity: 1, delay: .8, duration: .1 } );
        gsap.to( '#box-13', { opacity: 1, delay: .9, duration: .1 } );
        gsap.to( '#box-15', { opacity: 1, delay: 1, duration: .1 } );

    }

    function hideBox3() {

        gsap.to( '#box-22', { opacity: 0, delay: .1, duration: .1 } );
        gsap.to( '#box-25', { opacity: 0, delay: .2, duration: .1 } );
        gsap.to( '#box-28', { opacity: 0, delay: .3, duration: .1 } );
        gsap.to( '#box-27', { opacity: 0, delay: .4, duration: .1 } );
        gsap.to( '#box-26', { opacity: 0, delay: .5, duration: .1 } );
        gsap.to( '#box-29', { opacity: 0, delay: .6, duration: .1 } );
        gsap.to( '#box-24', { opacity: 0, delay: .7, duration: .1 } );
        gsap.to( '#box-21', { opacity: 0, delay: .8, duration: .1 } );
        gsap.to( '#box-23', { opacity: 0, delay: .9, duration: .1 } );
        gsap.to( '#box-20', { opacity: 0, delay: 1, duration: .1 } ) ;
    }

    function showBox3() {

        gsap.to( '#box-22', { opacity: 1, delay: .1, duration: .1 } );
        gsap.to( '#box-25', { opacity: 1, delay: .2, duration: .1 } );
        gsap.to( '#box-28', { opacity: 1, delay: .3, duration: .1 } );
        gsap.to( '#box-27', { opacity: 1, delay: .4, duration: .1 } );
        gsap.to( '#box-26', { opacity: 1, delay: .5, duration: .1 } );
        gsap.to( '#box-29', { opacity: 1, delay: .6, duration: .1 } );
        gsap.to( '#box-24', { opacity: 1, delay: .7, duration: .1 } );
        gsap.to( '#box-21', { opacity: 1, delay: .8, duration: .1 } );
        gsap.to( '#box-23', { opacity: 1, delay: .9, duration: .1 } );
        gsap.to( '#box-20', { opacity: 1, delay: 1, duration: .1 } );

    }

    function hideBox4() {

        gsap.to( '#box-31', { opacity: 0, delay: .1, duration: .1 } );
        gsap.to( '#box-39', { opacity: 0, delay: .2, duration: .1 } );
        gsap.to( '#box-37', { opacity: 0, delay: .3, duration: .1 } );
        gsap.to( '#box-35', { opacity: 0, delay: .4, duration: .1 } );
        gsap.to( '#box-38', { opacity: 0, delay: .5, duration: .1 } );
        gsap.to( '#box-36', { opacity: 0, delay: .6, duration: .1 } );
        gsap.to( '#box-34', { opacity: 0, delay: .7, duration: .1 } );
        gsap.to( '#box-33', { opacity: 0, delay: .8, duration: .1 } );
        gsap.to( '#box-32', { opacity: 0, delay: .9, duration: .1 } );
        gsap.to( '#box-30', { opacity: 0, delay: 1, duration: .1 } );
    }

    function showBox4() {

        gsap.to( '#box-31', { opacity: 1, delay: .1, duration: .1 } );
        gsap.to( '#box-39', { opacity: 1, delay: .2, duration: .1 } );
        gsap.to( '#box-37', { opacity: 1, delay: .3, duration: .1 } );
        gsap.to( '#box-35', { opacity: 1, delay: .4, duration: .1 } );
        gsap.to( '#box-38', { opacity: 1, delay: .5, duration: .1 } );
        gsap.to( '#box-36', { opacity: 1, delay: .6, duration: .1 } );
        gsap.to( '#box-34', { opacity: 1, delay: .7, duration: .1 } );
        gsap.to( '#box-33', { opacity: 1, delay: .8, duration: .1 } );
        gsap.to( '#box-32', { opacity: 1, delay: .9, duration: .1 } );
        gsap.to( '#box-30', { opacity: 1, delay: 1, duration: .1 } );

    }

    function hideBox5() {

        gsap.to( '#box-45', { opacity: 0, delay: .1, duration: .1 } );
        gsap.to( '#box-49', { opacity: 0, delay: .2, duration: .1 } );
        gsap.to( '#box-47', { opacity: 0, delay: .3, duration: .1 } );
        gsap.to( '#box-43', { opacity: 0, delay: .4, duration: .1 } );
        gsap.to( '#box-48', { opacity: 0, delay: .5, duration: .1 } );
        gsap.to( '#box-41', { opacity: 0, delay: .6, duration: .1 } );
        gsap.to( '#box-40', { opacity: 0, delay: .7, duration: .1 } );
        gsap.to( '#box-46', { opacity: 0, delay: .8, duration: .1 } );
        gsap.to( '#box-44', { opacity: 0, delay: .9, duration: .1 } );
        gsap.to( '#box-42', { opacity: 0, delay: 1, duration: .1 } );
    }

    function showBox5() {

        gsap.to( '#box-45', { opacity: 0, delay: .1, duration: .1 } );
        gsap.to( '#box-49', { opacity: 0, delay: .2, duration: .1 } );
        gsap.to( '#box-47', { opacity: 0, delay: .3, duration: .1 } );
        gsap.to( '#box-43', { opacity: 0, delay: .4, duration: .1 } );
        gsap.to( '#box-48', { opacity: 0, delay: .5, duration: .1 } );
        gsap.to( '#box-41', { opacity: 0, delay: .6, duration: .1 } );
        gsap.to( '#box-40', { opacity: 0, delay: .7, duration: .1 } );
        gsap.to( '#box-46', { opacity: 0, delay: .8, duration: .1 } );
        gsap.to( '#box-44', { opacity: 0, delay: .9, duration: .1 } );
        gsap.to( '#box-42', { opacity: 0, delay: 1, duration: .1 } );

    }



    useEffect( () => {

        showBox();
        gsap.to( '.jm-b-qoute-block', {
            scrollTrigger: {
                trigger: '.jm-b-qoute-block',
                start: 'start+=125px center+=100px',
                end: 'start+=125px center+=100px',
                scrub: 1,
                onEnter: () => hideBox(),
                onLeaveBack: () => showBox(),
            },
        } );
        gsap.to( '.jm-b-qoute-block', {
            scrollTrigger: {
                trigger: '.jm-b-qoute-block',
                start: 'start+=250px center+=100px',
                end: 'start+=250px center+=100px',
                scrub: 1,
                onEnter: () => hideBox2(),
                onLeaveBack: () => showBox2(),
            },
        } );
        gsap.to( '.jm-b-qoute-block', {
            scrollTrigger: {
                trigger: '.jm-b-qoute-block',
                start: 'start+=375px center+=100px',
                end: 'start+=375px center+=100px',
                scrub: 1,
                onEnter: () => hideBox3(),
                onLeaveBack: () => showBox3(),
            },
        } );
        gsap.to( '.jm-b-qoute-block', {
            scrollTrigger: {
                trigger: '.jm-b-qoute-block',
                start: 'start+=500px center+=100px',
                end: 'start+=500px center+=100px',
                scrub: 1,
                onEnter: () => hideBox4(),
                onLeaveBack: () => showBox4(),
            },
        } );
        gsap.to( '.jm-b-qoute-block', {
            scrollTrigger: {
                trigger: '.jm-b-qoute-block',
                start: 'start+=625px center+=100px',
                end: 'start+=625px center+=100px',
                scrub: 1,
                onEnter: () => hideBox5(),
                onLeaveBack: () => showBox5(),
            },
        } );
    }, [] );
    return (
        <>
            <div className='jm-b-qoute-block bg-dark-blue-05 relative overflow-hidden'>
                <Image
                    src='/assets/big-dia-orange.svg'
                    alt='assets-1'
                    width={129}
                    height={129}
                    className='absolute top-[-7%] right-[10%]'
                />
                <Image
                    src='/assets/small-dia-orange.svg'
                    alt='assets-1'
                    width={47.5}
                    height={47.5}
                    className='absolute top-[12%] left-[16%]'
                />
                <Image
                    src='/assets/blue-dia-sm.svg'
                    alt='assets-1'
                    width={37.5}
                    height={37.5}
                    className='absolute top-[17%] left-[35%]'
                />
                <Image
                    src='/assets/white-circle-sm.svg'
                    alt='assets-1'
                    width={37.5}
                    height={37.5}
                    className='absolute top-[14%] right-[35%]'
                />
                <Image
                    src='/assets/blue-circle-sm.svg'
                    alt='assets-1'
                    width={37.5}
                    height={37.5}
                    className='absolute bottom-[24%] left-[10%]'
                />
                <Image
                    src='/assets/white-dia-sm.svg'
                    alt='assets-1'
                    width={37.5}
                    height={37.5}
                    className='absolute bottom-[4%] left-[35%]'
                />
                <Image
                    src='/assets/white-dots-sm.svg'
                    alt='assets-1'
                    width={316}
                    height={316}
                    className='absolute bottom-[-29%] right-[10%]'
                />

                <div className="container flex justify-between">
                    <div className="absolute top-0 w-screen h-screen z-1 align-items-center justify-center grid grid-cols-boxes-sm-width grid-rows-boxes-sm-height md:grid-cols-boxes-width-md md:grid-rows-boxes-height-md lg:grid-cols-boxes-width lg:grid-rows-boxes-height">
                        {Array.from( { length: 10 * 5 } ).map( ( _, index ) => (
                            <div key={index} className="col-span-1 size-[125px] md:size-[150px] lg:size-[200px] border border-light-gray-01 bg-white transition-all" id={`box-${index}`}></div>
                        ) )}
                    </div>
                    <div className="text-container mx-auto my-auto py-[206.5px]">
                        <h2 className='font-oswald text-[67px] leading-[100.5px] tracking-[1.072px] w-[997px]'>&ldquo;NOT EVERYONE CAN BE AN <span className=' text-light-blue-05'>ARTIST</span>, <br></br>BUT A GREAT ARTIST CAN COME FROM <span className='text-light-orange-05'>EVERYWHERE</span>.&rdquo;</h2>
                        <p className='font-oswald text-[32px] pt-9 text-end'> - Anton Ego, &ldquo;Ratatouille&rdquo;</p>
                    </div>
                </div>


            </div>
        </>
    );
}

export default QouteBlock;
