import React from 'react';
import Image from 'next/image'

function DesignBlock( {
} ) {
  return (
    <>
      <div className='jm-b-other-feature bg-white relative py-[136px] overflow-hidden'>
        <div className="container flex justify-between">
        <div className="absolute top-0 w-screen h-screen z-1 align-items-center justify-center grid grid-cols-boxes-sm-width grid-rows-boxes-sm-height md:grid-cols-boxes-width-md md:grid-rows-boxes-height-md lg:grid-cols-boxes-width lg:grid-rows-boxes-height">
          {Array.from( { length: 10 * 5 } ).map( ( _, index ) => (
            <div key={index} className="col-span-1 size-[125px] md:size-[150px] lg:size-[200px] border border-light-gray-01 transition-all"></div>
          ) )}
        </div>
        <div className="container relative z-10">
            <div className="text-container">
                <h4 className='font-oswald text-[30px] tracking-[1.5px] text-dark-blue-05' >OTHER WORKS</h4>
                <p className='text-dark-blue-05 font-lato text-[20px] w-[557px]'>Each project represents a unique challenge I&apos;ve tackled, combining creativity, attention to detail, and a user-centric approach.</p>
            </div>
            <div className="works-container grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[29px] ">
                <div className=" bg-light-orange-05 h-[558px] rounded-[8px]">asdf</div>
                <div className=" bg-light-orange-05 h-[558px] rounded-[8px] lg:hidden">asdf</div>
                <div className=" bg-light-orange-05 h-[558px] rounded-[8px] lg:hidden">asdf</div>
                <div className="lg:grid lg:grid-cols-1 gap-y-6 hidden">
                    <div className="bg-light-orange-05 rounded-[8px]">asdf</div>
                    <div className="bg-light-orange-05 rounded-[8px]">asdf</div>
                </div>

            </div>
        </div>

        </div>
      </div>
    </>
  );
}

export default DesignBlock;
