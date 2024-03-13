"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image'

function SkillsBlock( {
} ) {
    const [hovered1, sethovered1] = useState( false );
    const [hovered2, sethovered2] = useState( false );
    const [hovered3, sethovered3] = useState( false );
    return (
        <>
            <div className='jm-b-skill-sections bg-white relative max-w-[1144px] mx-auto'>
                <div className="container align-middle justify-between z-2 py-[80px] md:py-[100px] grid grid-cols-1 md:grid-cols-2 relative gap-x-6 gap-y-6 md:gap-y-0">
                    <div className="text-container-wrapper relative">
                        <div className="text-container md:sticky md:top-[100px]">
                            <h4 className='font-oswald text-[24px] lg:text-[40px] lg:tracking-[1px] text-dark-blue-05'>WHAT I REALLY LOVE TO DO.</h4>
                            <p className='text-dark-blue-05 mt-4 font-lato text-[12px] md:text-[14px] lg:text-[20px] tracking-[0.4px]'>I&apos;m Jun Mar Manuel, a skilled front-end developer with a passion for creating clean and user-friendly websites. I specialize in creating visually appealing designs with a focus on functionality and accessibility.</p>
                            <ul className='mt-4 relative'>
                                <li className={`absolute top-0 hello ${hovered1 ? ' opacity-100' : ' opacity-0 '} transform transition-all hidden lg:block`} id='image-1'>
                                    <ul className='flex gap-4 flex-wrap'>
                                    <li>
                                        <Image
                                    src='/assets/css-icon.svg'
                                    alt='css-icon'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                        </li>
                                        <li>
                                        <Image
                                    src='/assets/html-icon.svg'
                                    alt='html-icon'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                        </li>
                                        <li>
                                        <Image
                                    src='/assets/js-icon.svg'
                                    alt='js-icon'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                        </li>
                                        <li>
                                        <Image
                                    src='/assets/php-icon.svg'
                                    alt='php-icon'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                        </li>
                                        <li>
                                        <Image
                                    src='/assets/react-icon.svg'
                                    alt='react-icon'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                        </li>
                                        <li>
                                        <Image
                                    src='/assets/sass-icon.svg'
                                    alt='sass-icon'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                        </li>
                                        <li>
                                        <Image
                                    src='/assets/nextjs-icon.svg'
                                    alt='nextjs-icon'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                        </li>
                                        <li>
                                        <Image
                                    src='/assets/tailwind-icon.svg'
                                    alt='tailwind-icon'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                        </li>
                                    </ul>
                                </li>
                                <li className={`absolute top-0 hello ${hovered2 ? ' opacity-100' : ' opacity-0 '} transform transition-all hidden lg:block`} id='image-2'>
                                    <ul className='flex gap-x-4'>
                                    <li>
                                        <Image
                                    src='/assets/acf-icon.svg'
                                    alt='hero-image'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                        </li>
                                        <li>
                                        <Image
                                    src='/assets/graphql-icon.svg'
                                    alt='hero-image'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                        </li>
                                        <li>
                                        <Image
                                    src='/assets/wp-icon.svg'
                                    alt='hero-image'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                        </li>
                                      
                                    </ul>
                                    </li>
                                <li className={`absolute top-0 hello ${hovered3 ? ' opacity-100' : ' opacity-0 '} transform transition-all hidden lg:block`} id='image-3'>
                                    <ul className='flex gap-x-4'>
                                    <li>
                                        <Image
                                    src='/assets/figma-icons.svg'
                                    alt='hero-image'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                        </li>
                                    </ul></li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-icon-list-container">
                        <ul className='flex flex-col md:max-w-[470px] mx-auto gap-y-[60px]'>
                            <li className='text-dark-blue-05 skills' id='li-1' onMouseEnter={( ) => sethovered1( true )} onMouseLeave={( ) => sethovered1( false )}>
                                <Image
                                    src='/assets/skills-icon1.svg'
                                    alt='hero-image'
                                    width={70}
                                    height={70}
                                    className='w-[60px] h-[60px] md:w-[70px] md:h-[70px]'
                                />
                                <p className='mt-4 mb-0 md:my-4 text-blue-500 font-lato text-[20px]'>WEB DEVELOPMENT</p>
                                <p className='font-lato text-[14px] md:text-[16px] text-dark-blue-05'>For crafting responsive and dynamic websites with optimal performance and functionality.</p>
                            </li>
                            <li className='text-dark-blue-05 skills' id='li-2' onMouseEnter={( ) => sethovered2( true )} onMouseLeave={( ) => sethovered2( false )}>
                                <Image
                                    src='/assets/skill-icon2.svg'
                                    alt='hero-image'
                                    width={70}
                                    height={70}
                                    className='w-[60px] h-[60px] md:w-[70px] md:h-[70px]'
                                />
                                <p className='mt-4 mb-0 md:my-4 text-blue-500 font-lato text-[20px]'>CMS DEVELOPMENT</p>
                                <p className='font-lato text-[14px] md:text-[16px] text-dark-blue-05'>For empowering businesses to control and update the content without knowledge in coding.</p>
                            </li>
                            <li className='text-dark-blue-05 skills' id='li-3' onMouseEnter={( ) => sethovered3( true )} onMouseLeave={( ) => sethovered3( false )}>
                                <Image
                                    src='/assets/skill-icon3.svg'
                                    alt='hero-image'
                                    width={70}
                                    height={70}
                                    className='w-[60px] h-[60px] md:w-[70px] md:h-[70px]'
                                />
                                <p className='mt-4 mb-0 md:my-4 text-blue-500 font-lato text-[20px]'>UI DESIGN AND PROTOTYPING</p>
                                <p className='font-lato text-[14px] md:text-[16px] text-dark-blue-05'>For creating beautiful interfaces with fast presentation without prior development.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SkillsBlock;
