"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/assets/featured-image.json";
import SplitType from 'split-type';
import { gsap } from 'gsap';

function HeroBlock( {
} ) {
  useEffect( () => {

    new SplitType( '#split' );
    new SplitType( '#splitText' );

    gsap.set( '.button-container button', {opacity:0, y: 10, } );
    gsap.set( '.button-container p', {opacity:0, y: 10, } );
    gsap.set( '.lottie', {opacity:0, y: 120, } );

    gsap.from( '#split .char', {
      y: -10,
      stagger: 0.02,
      delay: 0.6,
      duration: .2,
      opacity: 0,
    } );

    gsap.from( '#splitText .char', {
      y: -10,
      stagger: 0.02,
      delay: 1.3,
      duration: .1,
      opacity: 0,
    } );

    gsap.to( '.button-container p', {
      y: 0,
      delay: 2.3,
      opacity: 1,
    } );
  
    gsap.to( '.button-container button', {
      y: 0,
      delay: 2.8,
      opacity: 1,
      duration: .2,
    } );
  
    gsap.to( '.jm-b-hero-sections .lottie', {
      y: 0,
      delay: 3.3,
      opacity: 1,
      stagger: 4,
    } );


  }, [] );

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
      <div className='jm-b-hero-sections bg-dark-blue-05 flex lg:pb-[185px] md:pb-[100px] pb-[50px] relative overflow-hidden justify-center text-center '>
        <div className="absolute top-[64px] md:top-[84px] w-screen h-screen z-1 align-items-center justify-center grid grid-cols-boxes-sm-width grid-rows-boxes-sm-height md:grid-cols-boxes-width-md md:grid-rows-boxes-height-md lg:grid-cols-boxes-width lg:grid-rows-boxes-height">
          {Array.from( { length: 10 * 7 } ).map( ( _, index ) => (
            <div key={index} className="col-span-1 size-[125px] md:size-[150px] lg:size-[200px] border border-dark-blue-01 transition-all "></div>
          ) )}
        </div>

        <div className="container relative align-middle justify-center z-2 mt-[200px]">
          <div className="text-container max-w-[256px] md:max-w-[380px] lg:max-w-[625px] mx-auto">
            <p className='text-left font-oswald text-[19.5px] tracking-[0.536px] lg:w-[612px] leading-normal md:text-[20px] md:tracking-[1.2px] lg:text-[30px] font-normal lg:tracking-[1.5px] p-0 md:pl-1 text-light-orange-05' id='split'>Hi I am Jun Mar,</p>
            <h1 className='font-oswald text-[27px] md:text-[40px] tracking-[0.512px] leading-[29.184px] md:leading-[43.776px] md:tracking-[0.768px] lg:text-[67px] text-white lg:leading-[61.104px] lg:tracking-[1.072px] ' id='splitText'>FRONT END <span className='text-light-blue-05'>DEVELOPER</span>  <br></br> <span className='text-[16.5px] tracking-[0.536px] md:text-[24px] md:tracking-[0.798px] lg:text-[41px] leading-normal lg:tracking-[1.128px]'>AND I <span className='text-light-blue-05'>LOVE</span> DEVELOPING YOUR IDEAS</span></h1>
            <div className="button-container flex justify-between mt-4">
              <p className='max-w-[170px] tracking-[0.1px] md:max-w-[250px] lg:max-w-[335px] text-left text-[10px] md:text-[14px] lg:text-[20px] text-light-gray-01 font-normal font-lato md:leading-[18px] lg:leading-normal'>I am skilled in building and designing things for the web. Currently working web-based projects at Greydient Lab.</p>
              <button id="workshead" className='px-2 py-1 md:px-[16px] md:py-[8px] lg:px-[47px] md:leading-[12px] lg:py-[19px] bg-light-orange-05 hover:bg-light-orange-03 transform transition-all text-white font-oswald text-[12px] md:text-[15px] lg:text-[24px] font-semibold rounded-[4px]' onClick={() => handleClick( '#works' )}>View Projects</button>
            </div>
          </div>
          <div className="max-w-[1144px] mx-auto mt-20 lottie"><Lottie animationData={groovyWalkAnimation} /></div>
        </div>
      </div >
    </>
  );
}

export default HeroBlock;
