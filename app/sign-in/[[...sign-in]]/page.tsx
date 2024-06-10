import Image from "next/image";
import images from  '../../../public/public/images/Website-PNG.png'
import Header from '@/app/Header/[[...header]]/page';
import { ClerkProvider, SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'
export default function Login() {
  return (
   <>
    <Header />
    <section className="relative bg-[#f2f6f6] overflow-y-hidden">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">

          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="flex-1 bg-[#09072d00] text-center hidden lg:flex">
              <div className="img m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                    <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" alt="" />
              </div>
          </div>
            
          
            
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl text-black font-extrabold">
                                Sign In
                            </h1>
                            
                            <div className="w-full flex-1 mt-8">

                              <div className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" placeholder="Email" />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password" />
                                    <button
                                        className="mt-5 tracking-wide font-semibold bg-[#0a0822] text-gray-100 w-full py-4 rounded-lg hover:bg-[#0c0b1c] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>

                                        <span className="ml-3">
                                            Sign In
                                        </span>
                                    </button>
                                </div>

                                <div className="my-12 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        Or sign Up if u have not a account
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <button
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[#0a0822] text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                        <div className="bg-white p-2 rounded-full" >
                                        
                                        </div>
                                        <span className="ml-4">
                                            Sign In with Google
                                        </span>
                                    </button>
                                </div>

                                

                              
                            </div>
                        </div>
            
            
          </div>
        </div>
    </section>
    </>
  )
}
