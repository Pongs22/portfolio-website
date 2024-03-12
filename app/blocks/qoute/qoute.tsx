"use client"

import Image from 'next/image'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );
function QouteBlock( {
} ) {
    function shuffleArray( array: string[] ) {
        for ( let i = array.length - 1; i > 0; i-- ) {
            const j = Math.floor( Math.random() * ( i + 1 ) );
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    function hideBox() {
        const boxIds = Array.from( { length: 50 }, ( _, index ) => `#box-${ index }` );
        shuffleArray( boxIds );
    
        boxIds.forEach( ( boxId, index ) => {
            gsap.to( boxId, { opacity: 0, delay: index * 0.02, duration: 0.1 } );
        } );
    }

    useEffect( () => {

        gsap.to( '.jm-b-qoute-block', {
            scrollTrigger: {
                trigger: '.jm-b-qoute-block',
                start: 'start+=125px center+=100px',
                end: 'start+=125px center+=100px',
                scrub: 1,
                onEnter: () => hideBox(),
            },
        } );
    } );
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
