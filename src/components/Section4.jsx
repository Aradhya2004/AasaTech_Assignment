import React from 'react'
import { Button } from './ui/button'

function Section4() {
    return (
        <div className='bg-gray-50 flex flex-col items-center'>
            <div className='w-full text-center mt-20'>
                <h1 className=' text-4xl text-gray-800 font-semibold'>Not Satisfied <span className='bg-gradient-to-r from-gray-700 to-gray-500 text-transparent bg-clip-text'>Yet?</span></h1>
                <h3 className='text-2xl mt-3 text-gray-700'>We got you! Here are few extra features</h3>
            </div>
            <div className="w-full flex flex-col flex-wrap items-center gap-10 px-6 p-10">
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-7 shadow-lg shadow-blue-300 px-6">
                    <i className="fa-regular fa-calendar text-2xl"></i>
                    <h1 className="text-gray-800 text-xl font-semibold">
                        Sketching Basics – Shape, form, and proportion fundamentals
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-7 shadow-lg shadow-blue-300 px-6">
                    <i className="fa-solid fa-hexagon-nodes text-2xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Digital Painting – Master shading, blending & coloring techniques
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-7 shadow-lg shadow-blue-300 px-6">
                    <i className="fa-brands fa-whatsapp text-3xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Tool Mastery – Hands-on with Procreate, Photoshop & Illustrator
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-7 shadow-lg shadow-blue-300 px-6">
                    <i className="fa-regular fa-image text-2xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Character & Concept Art – Create professional-grade designs
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-7 shadow-lg shadow-blue-300 px-6">
                    <i className="fa-solid fa-arrow-up-right-dots text-2xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Portfolio Building – Craft stunning pieces to showcase your skills
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-7 shadow-lg shadow-blue-300 px-6">
                    <i className="fa-regular fa-id-badge text-3xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Bonus: Monetization Guide – How to sell your art & get freelance gigs
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-7 shadow-lg shadow-blue-300 px-6">
                    <i className="fa-solid fa-computer text-2xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Certificate of Completion – Boost your creative career
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center  gap-7 shadow-lg shadow-blue-300 px-6">
                    <i className="fa-solid fa-database text-2xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Project-Based Learning – Build a stunning portfolio
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-7 shadow-lg shadow-blue-300 px-6 text-center">
                    <i className="fa-solid fa-user text-2xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Live Mentorship – Weekly Q&A sessions with industry pros
                    </h1>
                </div>
            </div>
            <div className='mt-10 flex justify-center'>
                <Button className='rounded-2xl w-full sm:w-[200px] md:w-[300px] lg:w-[400px] text-3xl px-10 py-10 text-white bg-gradient-to-r from-blue-800 via-blue-600 to-pink-600 text-wrap'>Book Now For ₹79 </Button>
            </div>

            <div className='w-full text-center mt-20'>
                <h1 className=' text-4xl text-gray900 font-semibold'>Enroll Now for <span className='bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text'>₹7,999</span></h1>
            </div>
            <div className="w-full flex flex-col flex-wrap items-center gap-5 px-6 p-10">
                <div className="bg-white h-15 rounded-4xl w-full sm:w-[350px] md:w-[400px] lg:w-[500px] flex items-center justify-center border border-gray-300 text-center">
                    <h1 className="text-gray-800 text-xl font-semibold">
                        Secure Your Spot for Just ₹79
                    </h1>
                </div>
                <div className="bg-white h-15 rounded-4xl w-full sm:w-[350px] md:w-[400px] lg:w-[500px] flex items-center justify-center border border-gray-300 text-center">
                    <h1 className="text-gray-800 text-xl font-semibold p-5">
                        Bonus Offer: Apply a coupon code within 15 minutes to unlock:
                    </h1>
                </div>
                <div className="bg-white h-15 rounded-4xl w-full sm:w-[350px] md:w-[400px] lg:w-[500px] flex items-center justify-center border border-gray-300 text-center">
                    <h1 className="text-gray-800 text-xl font-semibold">
                        Exclusive Brush & Texture Pack
                    </h1>
                </div>
                <div className="bg-white h-15 rounded-4xl w-full sm:w-[350px] md:w-[400px] lg:w-[500px] flex items-center justify-center border border-gray-300 text-center">
                    <h1 className="text-gray-800 text-xl font-semibold">
                        Extra Live Q&A Session with Mentors
                    </h1>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h1 className='text-2xl'>WE Offer everything you need at ₹7,999 but wait...</h1>
                <div className='mt-10 bg-gradient-to-r from-pink-300 to-green-200 rounded-2xl w-150'>
                    <h1 className='text-xl p-5 text-center text-gray-900 font-medium'>Use a Special Code & Unlock a Game-Changing Discount to avail same course in a discounted price!</h1>
                </div>
            </div>
            <div className='mt-15 flex justify-center'>
                <Button className='rounded-2xl w-full sm:w-[200px] md:w-[300px] lg:w-[400px] text-3xl px-10 py-10 text-white bg-gradient-to-r from-blue-800 via-blue-600 to-pink-600 text-wrap'>Book Now For ₹79 </Button>
            </div>
        </div>
    )
}

export default Section4
