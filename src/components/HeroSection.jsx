import React from 'react'
import { Button } from './ui/button'
import img from '../assets/img.png'

function HeroSection() {
    return (
        <div className='bg-gray-50 w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 md:py-16'>
            <div className="max-w-4xl text-center px-2">
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-purple-700 leading-tight'>
                    Master the Art of <span className='bg-gradient-to-r from-purple-700 to-pink-600 text-transparent bg-clip-text'>Digital</span> Illustration
                </h1>
            </div>

            <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 text-center mt-6 sm:mt-8 w-11/12 md:w-3/5'>
                A 4-Week Course Designed for Beginners & Enthusiasts!
            </h3>

            <div className='flex justify-center w-full mt-8'>
                <img className='h-auto w-full max-w-xs sm:max-w-md md:max-w-lg rounded-lg shadow-lg' src={img} alt="Illustration Course" />
            </div>

            <div className="max-w-3xl text-center mt-8 sm:mt-10 px-2">
                <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed'>
                    Learn to create stunning digital artwork with step-by-step guidance from industry experts.
                </h3>
                <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-4'>
                    No prior experience required. Just your creativity! <br />
                    <span className="font-bold">Enroll now for ₹7,999</span>
                </h3>
            </div>

            <div className='flex justify-center w-full mt-8'>
                <Button className='rounded-4xl text-lg sm:text-2xl px-6 py-4 sm:px-10 sm:py-7 text-white bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600'>
                    Secure Your Spot For Just ₹79
                </Button>
            </div>

            <h3 className='text-lg sm:text-2xl font-semibold mt-4 text-center px-2'>
                Use a coupon code within 15 minutes to unlock a special bonus pack!
            </h3>
        </div>


    )
}

export default HeroSection
