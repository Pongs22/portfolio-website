import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

function FooterBlock( {
} )

{
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className='jm-b-footer bg-dark-blue-05' id='qouteText'>
                <div className="wrapper border-b border-dark-blue-01 bg-dark-blue-05">
                    <div className="container max-w-[1144px] pt-[185px] px-[28px] pb-[32px]">
                        <Image
                            src='/assets/footer-feature.svg'
                            alt='hero-image'
                            width={70}
                            height={60}
                            className=' my-auto w-[50px] h-[40px] md:w-full md:h-full'
                        />

                    </div>
                </div>
                <div className="container max-w-[1144px] flex justify-between flex-col md:flex-row py-[30px]">
                    <div className="logo-wrapper order-1">
                        <Image
                            src='/assets/logoooo.svg'
                            alt='hero-image'
                            width={70}
                            height={60}
                            className=' my-auto w-[50px] h-[40px] md:w-full md:h-full'
                        />
                    </div>
                    <div className="copyright-wrapper my-auto order-3 md:order-2">
                        <p className='font-lato text-light-gray-01 text-[16px] tracking-[1.12px]'>Built and designed by me @ {currentYear} </p>
                    </div>
                    <div className="social-link-wrapper my-auto order-2 md:order-3">
                        <ul className='flex gap-x-[36px] my-auto  align-middle'>
                            <li>
                                <p className='sr-only'>
                                    Linkedin</p>
                                <Link href={'#'} >
                                    <Image
                                        src='/assets/linked-in-icon.svg'
                                        alt='hero-image'
                                        width={36}
                                        height={36}
                                        sizes='100vw'
                                        className=' mx-auto my-auto grayscale hover:grayscale-0 transition-all'
                                    />
                                </Link>
                            </li>
                            <li>
                                <p className='sr-only'>GitHub</p>
                                <Link href={'#'} >
                                    <Image
                                        src='/assets/git-hub-icon.svg'
                                        alt='hero-image'
                                        width={36}
                                        height={36}
                                        sizes='100vw'
                                        className=' mx-auto my-auto grayscale hover:grayscale-0 transition-all'
                                    />
                                </Link>
                            </li>
                            <li className=''>
                                <p className='sr-only'>Facebook</p>
                                <Link href={'#'}>
                                    <Image
                                        src='/assets/facebook-icon.svg'
                                        alt='hero-image'
                                        width={36}
                                        height={36}
                                        sizes='100vw'
                                        className=' mx-auto my-auto grayscale hover:grayscale-0 transition-all'
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterBlock;
