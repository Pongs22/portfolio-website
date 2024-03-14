"use client"

import React, { ReactNode, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );

interface BackgroundTransitionProps {
  children: ReactNode;
}


function BackgroundTransition( { children }: BackgroundTransitionProps ) {

  useEffect( () => {

    const colorElement = document.querySelectorAll( '.color' );
    const color = [];
    colorElement.forEach( ( element ) => {
        const colors = element.getAttribute( 'data-color' );
        if ( colors ) {
          color.push( colors );
        }
    } );

        gsap.utils.toArray( colorElement ).forEach( function ( g ) {
            const bgcolor = ( g as HTMLElement ).getAttribute( 'data-color' );
            if ( bgcolor ){
            ScrollTrigger.create( {
                trigger: g as HTMLElement,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => gsap.to( '.jm-b-skill-sections, .jm-b-works-section, .jm-b-about-section', { backgroundColor: bgcolor } ),
                onEnterBack: () => gsap.to( '.jm-b-skill-sections, .jm-b-works-section, .jm-b-about-section', { backgroundColor: bgcolor } ),
                scrub: 2,
            } );
          }
        } );
  }, [] );
  return (
    <>
    <div className='background-transition relative'>
      {children}
    </div>
     
    </>
  );
}

export default BackgroundTransition
;
