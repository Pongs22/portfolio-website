"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/assets/featured-image.json";

function HeroBlock ( {
} ) {
  return (
    <>
      <div className='jm-b-hero-sections bg-dark-blue-05 flex pb-[185px] relative overflow-hidden justify-center text-center '>
        <div className="absolute top-[64px] md:top-[84px] w-screen h-screen z-1 align-items-center justify-center grid grid-cols-boxes-sm-width grid-rows-boxes-sm-height md:grid-cols-boxes-width-md md:grid-rows-boxes-height-md lg:grid-cols-boxes-width lg:grid-rows-boxes-height">
          {Array.from( { length: 10 * 7 } ).map( ( _, index ) => (
            <div key={index} className="col-span-1 size-[125px] md:size-[150px] lg:size-[200px] border border-dark-blue-01 hover:bg-dark-blue-03 transition-all "></div>
          ) )}
        </div>
        <div className="container relative align-middle justify-center z-2 mt-[200px]">
          <div className="text-container  max-w-[625px] mx-auto">
            <p className='text-left font-oswald text-[30px] font-normal tracking-[1.5px] pl-1 text-light-orange-05'>Hi I am Jun Mar,</p>
            <h1 className='font-oswald  text-[32px] lg:text-[67px] text-white leading-[61.104px] tracking-[1.072px]'>FRONT END <span className='text-light-blue-05'>DEVELOPER</span>  <br></br> <span className='text-[19.5px] lg:text-[41px] leading-normal tracking-[1.128px]'>AND I <span className='text-light-blue-05'>LOVE</span> DEVELOPING YOUR IDEAS</span></h1>
            <div className="button-container flex justify-between mt-4">
              <p className='max-w-[335px] text-left text-[20px] text-light-gray-01 font-normal font-lato leading-[24px]'>I am skilled in building and designing things for the web. Currently working web-based projects at Greydient Lab.</p>
              <button id="workshead" className='px-[47px] py-[19px] bg-light-orange-05 text-white font-oswald text-[24px] font-semibold rounded-[4px]'>View Projects</button>
            </div>
          </div>
          <div className="max-w-[1144px] mx-auto mt-20"><Lottie animationData={groovyWalkAnimation} /></div>
        </div>
      </div >
    </>
  );
}

export default HeroBlock;
