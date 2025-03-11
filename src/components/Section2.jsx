import React from 'react'
import { Button } from './ui/button'

function Section2() {
    return (
        <div className='bg-gray-50 py-16'>
            <div className='w-full text-center'>
                <h1 className='text-gray-700 text-4xl font-bold'>Without Proper Training, You Might:</h1>
            </div>

            <div className='flex flex-wrap justify-center gap-10 mt-16 px-6 p-10 bg-blue-50'>
                <div className='bg-white h-80 w-80 rounded-2xl shadow-lg shadow-blue-100 flex items-center justify-center p-6'>
                    <h1 className='text-3xl text-center font-medium'>
                        Struggle with complex software tools
                    </h1>
                </div>

                <div className='bg-white h-80 w-80 rounded-2xl shadow-lg shadow-blue-100 flex items-center justify-center p-6'>
                    <h1 className='text-3xl text-center font-medium'>
                        Feel stuck without structured learning
                    </h1>
                </div>

                <div className='bg-white h-80 w-80 rounded-2xl shadow-lg shadow-blue-100 flex items-center justify-center p-6'>
                    <h1 className='text-3xl text-center font-medium'>
                        Miss out on monetizing your skills
                    </h1>
                </div>
            </div>
            <div className='w-full text-center mt-20'>
                <h1 className='text-purple-700 text-4xl font-bold'>With This Course, <span className='bg-gradient-to-r from-purple-700 to-pink-600 text-transparent bg-clip-text'>You Get:</span></h1>
            </div>
            <div className="w-full flex flex-col flex-wrap items-center gap-10 mt-16 px-6 p-10">
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-5 shadow-lg shadow-blue-300 px-6 text-center">
                    <i className="fa-solid fa-globe text-2xl"></i>
                    <h1 className="text-gray-800 text-xl font-semibold">
                        Hands-on Lessons – Learn digital painting, shading & composition.
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-5 shadow-lg shadow-blue-300 px-6 text-center">
                    <i className="fa-solid fa-rotate-right text-2xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Tool Mastery – Master Procreate, Photoshop, & Illustrator.
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-5 shadow-lg shadow-blue-300 px-6 text-center">
                    <i className="fa-solid fa-newspaper text-2xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Exclusive Resource Pack – Brushes, templates & textures.
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-5 shadow-lg shadow-blue-300 px-6 text-center">
                    <i className="fa-solid fa-coins text-2xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Live Mentorship – Weekly Q&A sessions with
                        industry pros.
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-5 shadow-lg shadow-blue-300 px-6 text-center">
                    <i className="fa-solid fa-location-dot text-2xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Project-Based Learning – Build a stunning portfolio.
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-5 shadow-lg shadow-blue-300 px-6 text-center">
                    <i className='text-2xl font-extrabold'>@</i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Certificate of Completion – Boost your creative career.
                    </h1>
                </div>
                <div className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-5 shadow-lg shadow-blue-300 px-6 text-center">
                    <i className="fa-solid fa-book-open text-2xl"></i>
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Community Access – Network with fellow artists.
                    </h1>
                </div>
            </div>
            <div className='mt-10 flex justify-center'>
                <Button className='rounded-2xl w-full sm:w-[300px] md:w-[400px] lg:w-[500px] text-3xl px-10 py-10 text-white bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 text-wrap'>Book Now At ₹49 </Button>
            </div>


        </div>


    )
}

export default Section2
