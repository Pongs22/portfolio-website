import React from 'react';
import Image from 'next/image'

function SkillsBlock( {
} ) {
    return (
        <>
            <div className='jm-b-skill-sections bg-white relative max-w-[1144px] mx-auto'>
                <div className="container align-middle justify-between z-2 py-[100px] grid grid-cols-1 md:grid-cols-2 relative gap-x-6 gap-y-6 md:gap-y-0">
                    <div className="text-container-wrapper relative">
                        <div className="text-container sticky top-[100px]">
                            <h4 className='font-oswald text-[40px] text-dark-blue-05'>WHAT I REALLY LOVE TO DO.</h4>
                            <p className='text-dark-blue-05 mt-4 font-lato text-[20px] tracking-[0.4px]'>I&apos;m Jun Mar Manuel, a skilled front-end developer with a passion for creating clean and user-friendly websites. I specialize in creating visually appealing designs with a focus on functionality and accessibility.</p>
                        </div>
                    </div>
                    <div className="skill-icon-list-container">
                        <ul className='flex flex-col max-w-[470px] mx-auto gap-y-[60px]'>
                            <li className='text-dark-blue-05'>
                                <Image
                                    src='/assets/skills-icon1.svg'
                                    alt='hero-image'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                <p className='my-4 text-blue-500 font-lato text-[20px]'>WEB DEVELOPMENT</p>
                                <p className='font-lato text-[16px] text-dark-blue-05'>For crafting responsive and dynamic websites with optimal performance and functionality.</p>
                            </li>
                            <li className='text-dark-blue-05'>
                                <Image
                                    src='/assets/skills-icon1.svg'
                                    alt='hero-image'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                <p className='my-4 text-blue-500 font-lato text-[20px]'>CMS DEVELOPMENT</p>
                                <p className='font-lato text-[16px] text-dark-blue-05'>For empowering businesses to control and update the content without knowledge in coding.</p>
                            </li>
                            <li className='text-dark-blue-05'>
                                <Image
                                    src='/assets/skills-icon1.svg'
                                    alt='hero-image'
                                    width={70}
                                    height={70}
                                    className=''
                                />
                                <p className='my-4 text-blue-500 font-lato text-[20px]'>UI DESIGN AND PROTOTYPING</p>
                                <p className='font-lato text-[16px] text-dark-blue-05'>For creating beautiful interfaces with fast presentation without prior development.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SkillsBlock;
