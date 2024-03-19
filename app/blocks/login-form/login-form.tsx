import React from 'react';
import Image from 'next/image'
import Atropos from 'atropos/react';


function LoginForm({
}) {
    return (
        <>
        
            <div className='login-form color h-screen w-screen bg-dark-blue-05 ld:pb-[268px] md:pb-[218px] pb-[150px] pt-[80px] md:pt-[100px] relative' id='about' data-color='#FFFFFF'>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <Image
                            src='/assets/logoooo.svg'
                            alt='hero-image'
                            width={70}
                            height={60}
                            className=' mx-auto my-auto w-[50px] h-[40px]'
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white font-oswald">Sign in to your account</h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-white font-oswald">Username</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-white font-oswald shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium leading-6 text-white font-oswald">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-dark-blue-05 font-oswald shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"></a>
                        </p>
                    </div>
                </div>
            </div>
          
        </>
    );
}

export default LoginForm;
