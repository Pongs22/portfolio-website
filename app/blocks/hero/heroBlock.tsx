"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/assets/featured-image.json";

function HeroBlock ( {
} ) {
  return (
    <>
      <div className='jm-b-hero-sections bg-dark-blue-05 flex lg:pb-[185px] md:pb-[100px] pb-[50px] relative overflow-hidden justify-center text-center '>
        <div className="absolute top-[64px] md:top-[84px] w-screen h-screen z-1 align-items-center justify-center grid grid-cols-boxes-sm-width grid-rows-boxes-sm-height md:grid-cols-boxes-width-md md:grid-rows-boxes-height-md lg:grid-cols-boxes-width lg:grid-rows-boxes-height">
          {Array.from( { length: 10 * 7 } ).map( ( _, index ) => (
            <div key={index} className="col-span-1 size-[125px] md:size-[150px] lg:size-[200px] border border-dark-blue-01 hover:bg-dark-blue-03 transition-all "></div>
          ) )}
        </div>
        
        <div className="container relative align-middle justify-center z-2 mt-[200px]">
          <div className="text-container max-w-[296px] md:max-w-[444px] lg:max-w-[625px] mx-auto">
            <p className='text-left font-oswald text-[19.5px] tracking-[0.536px] leading-normal md:text-[24px] md:tracking-[1.2px] lg:text-[30px] font-normal lg:tracking-[1.5px] p-0 md:pl-1 text-light-orange-05'>Hi I am Jun Mar,</p>
            <h1 className='font-oswald  text-[32px] md:text-[48px] tracking-[0.512px] leading-[29.184px] md:leading-[43.776px] md:tracking-[0.768px] lg:text-[67px] text-white lg:leading-[61.104px] lg:tracking-[1.072px]'>FRONT END <span className='text-light-blue-05'>DEVELOPER</span>  <br></br> <span className='text-[19.5px] tracking-[0.536px] md:text-[29px] md:tracking-[0.798px] lg:text-[41px] leading-normal lg:tracking-[1.128px]'>AND I <span className='text-light-blue-05'>LOVE</span> DEVELOPING YOUR IDEAS</span></h1>
            <div className="button-container flex justify-between mt-4">
              <p className='max-w-[170px] tracking-[0.1px] md:max-w-[275px] lg:max-w-[335px] text-left text-[10px] md:text-[16px] lg:text-[20px] text-light-gray-01 font-normal font-lato md:leading-[24px] leading-normal'>I am skilled in building and designing things for the web. Currently working web-based projects at Greydient Lab.</p>
              <button id="workshead" className='px-4 py-2 md:px-[22px] md:py-[10px] lg:px-[47px] lg:py-[19px] bg-light-orange-05 hover:bg-light-orange-03 transform transition-all text-white font-oswald text-[15px] md:text-[20px] lg:text-[24px] font-semibold rounded-[4px]'>View Projects</button>
            </div>
          </div>
          <div className="max-w-[1144px] mx-auto mt-20"><Lottie animationData={groovyWalkAnimation} /></div>
        </div>
      </div >
    </>
  );
}

export default HeroBlock;
