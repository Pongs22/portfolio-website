'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Atropos from 'atropos/react';

function AboutBlock( {
} ) {
    const [hovered, sethovered] = useState( false );
    
    return (
        <>
            <div className='bg-white pb-[268px] pt-[80px] md:pt-[100px]' id='about'>
                <div className="container grid md:grid-cols-2 max-w-[1144px] gap-x-8 lg:gap-x-[121px] my-auto align-middle">
                    <div className="text-container lg:max-w-[461px] my-auto">
                        <h2 className='text-light-blue-05 font-oswald text-[20px] mb-3 md:text-[29px] md:leading-[25.536px] md:tracking-[0.44px] lg:text-[40px] md:mb-6'>ABOUT ME</h2>
                        <p className='text-dark-blue-05 font-lato text-[12px] md:text-[16px] lg:text-[16px] md:leading-[25px] lg:leading-[25px] tracking-[0.16px]'>As a recent graduate,  with a strong passion for turning lines of code into captivating user experiences.  I&apos;m thrilled to be delving into the world of web development, where I channel my love for problem-solving and attention to detail to craft seamless and responsive websites.
                            <br></br><br></br> And now I am very happy to serve clients at Greydient Lab. Which really taught me valuable lessons in teamwork, adaptability, and the power of clean, organized code. I&apos;m a firm believer in continuous learning and embrace each project as a chance to enhance my skills and expand my knowledge.</p>
                        <div className="button-container lg:mt-[48px] md:mt-[32px] mt-[24px] flex justify-end md:justify-start">
                            <Link href="#" className='font-oswald text-[16px] tracking-[1px] lg:text-[24px] rounded-[4px] lg:tracking-[1.2px] bg-light-blue-05 hover:bg-light-blue-04 transform transition-all py-2 lg:py-3 px-4 lg:px-7 '>Download CV</Link>
                        </div>
                    </div>
                    <div className="image-container h-full w-full mt-[40px] md:mt-0" onMouseEnter={( ) => sethovered( true )} onMouseLeave={( ) => sethovered( false )}>
                        <Atropos shadow={true} shadowScale={0.4} highlight={false} activeOffset={2} className='image-wrapper max-w-full relative ' data-atropos-offset="5">
                            <div className="bg-gradient-to-b from-[#FFD2A5] via-30% via-light-orange to-light-orange-05 pt-10 relative  !transform !transition-all">
                                <Image
                                    src='/assets/my-pic.png'
                                    alt='footer-image'
                                    width={305}
                                    height={427.95}
                                    data-atropos-offset="-5"
                                    data-atropos-opacity="1"
                                    className={`my-auto mx-auto relative transform transition-all  ${hovered ? ' !opacity-0' : ' !opacity-100 '}`}
                                />
                                <Image
                                    src='/assets/my-pic-2.png'
                                    alt='footer-image'
                                    width={356}
                                    height={427.95}
                                    data-atropos-offset="-5"
                                    data-atropos-opacity="0"
                                    className={`z-10 mx-auto absolute bottom-0 left-[12%] md:left-[7%] lg:left-[17.5%] opacity-0 group-hover:opacity-100 h-[427.95px] transform transition-all ${hovered ? ' !opacity-100' : ' !opacity-0 '}`}
                                />
                            </div>
                        </Atropos>
                    </div>
                </div>
            </div >
        </>
    );
}

export default AboutBlock;
