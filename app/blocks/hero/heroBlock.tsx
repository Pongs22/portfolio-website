import React from 'react';
import Image from 'next/image'

function HeroBlock( {
} ) {
  return (
    <>
      <div className='jm-b-hero-sections bg-dark-blue-05 w-screen h-screen relative overflow-hidden justify-center text-center'>
      <div className="absolute w-[1600px] z-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-8 grid-rows-7">
          {Array.from( { length: 8 * 7 } ).map( ( _, index ) => (
            <div key={index} className="w-[200px] h-[200px] border border-dark-blue-01 hover:bg-dark-blue-03 transition-all"></div>
          ) )}
        </div>

        <div className="text-container pt-[200px] text-light-blue-05 relative align-middle justify-center z-2">
            <h1>FRONT END DEVELOPER, <br></br> AND I LOVE DEVELOPING YOUR IDEAS</h1>
        </div>
          
      </div>
    </>
  );
}

export default HeroBlock;
