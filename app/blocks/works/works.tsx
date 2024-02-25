import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

function WorksBlock( {
} ) {
    return (
        <>
            <div className='jm-b-works-section bg-dark-blue-04 py-[125px] overflow-hidden '>
                <div className="container header-container max-w-[1144px]">
                    <div className="text-container max-w-[557px]">
                        <h4 className='font-oswald text-[30px] tracking-[1.5px]'>FEATURED <span className='text-light-orange-05'>WORKS</span></h4>
                        <p className='font-lato text-[20px] tracking-[0.2px] text-light-blue-01 mt-4'>Each project represents a unique challenge I&apos;ve tackled, combining creativity, attention to detail, and a user-centric approach.</p>
                    </div>
                </div>
                <div className="works-container container mt-[230px] max-w-[1144px]">
                    <div className="grid grid-cols-1 md:gap-y-[245px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
                            <div className="text-container col-span-2 md:col-span-1 order-2 md:order-1 my-auto max-w-[477px]">
                                <h4 className='mb-4 font-oswald text-[30px] tracking-[1.5px]'>RISING WAVE (US)</h4>
                                <div className="paragraph-wrapper p-6 bg-dark-blue-01 text-light-blue-01">
                                    <p className=''>A Distributed SQL stream processing database, simplifying real-time app development with seamless data ingestion.</p>
                                    <ul className='flex gap-x-[10px] font-lato text-[10px] tracking-[0.1px] text-light-orange-05 mt-2'>
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
                                <Image
                                    src='/assets/work-1.png'
                                    alt='hero-image'
                                    width={558}
                                    height={449}
                                    className='flex w-full md:w-[558px] z-2 relative'
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
                            <div className="text-container col-span-2 md:col-span-1 order-2 my-auto justify-end flex">
                                <div className="max-w-[477px]">
                                    <h4 className='mb-4 font-oswald text-[30px] tracking-[1.5px] text-end'>MINDPORT (THAILAND)</h4>
                                    <div className="paragraph-wrapper p-6 bg-dark-blue-01 text-light-blue-01">
                                        <p className=''>A platform where you can share your experience, guided by friends and mentors, for a better self growth and career.</p>
                                        <ul className='flex gap-x-[10px] font-lato text-[10px] tracking-[0.1px] text-light-orange-05 mt-2'>
                                            <li>Wordpress</li>
                                            <li>Javascript</li>
                                            <li>PHP</li>
                                            <li>Sass</li>
                                        </ul>
                                    </div>
                                    <div className="link-container mt-[28px] flex ">
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
                                <Image
                                    src='/assets/work-2.png'
                                    alt='hero-image'
                                    width={558}
                                    height={449}
                                    className='flex w-full md:w-[558px] z-2 relative'
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
                            <div className="text-container col-span-2 md:col-span-1 order-2 md:order-1 my-auto max-w-[477px]">
                                <h4 className='mb-4 font-oswald text-[30px] tracking-[1.5px]'>LOBY (SINGAPORE)</h4>
                                <div className="paragraph-wrapper p-6 bg-dark-blue-01 text-light-blue-01">
                                    <p className=''>An efficient building management system to enhance residents’ experience with intuitive and smart solutions.</p>
                                    <ul className='flex gap-x-[10px] font-lato text-[10px] tracking-[0.1px] text-light-orange-05 mt-2'>
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
                                <Image
                                    src='/assets/work-3.png'
                                    alt='hero-image'
                                    width={558}
                                    height={449}
                                    className='flex w-full md:w-[558px] z-2 relative'
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default WorksBlock;
