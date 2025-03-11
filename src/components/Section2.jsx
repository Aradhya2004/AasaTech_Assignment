import React from 'react'
import { Button } from './ui/button'

function Section2() {
    return (
        <div className='bg-gray-50 py-12 px-4 sm:px-6 md:py-16'>
            <div className='w-full text-center'>
                <h1 className='text-gray-700 text-3xl sm:text-4xl md:text-5xl font-bold'>
                    Without Proper Training, You Might:
                </h1>
            </div>

            <div className='flex flex-wrap justify-center gap-6 sm:gap-10 mt-12 px-4 py-6 sm:py-10 bg-blue-50'>
                {["Struggle with complex software tools", "Feel stuck without structured learning", "Miss out on monetizing your skills"].map((text, index) => (
                    <div key={index} className='bg-white h-64 sm:h-80 w-72 sm:w-80 rounded-2xl shadow-lg shadow-blue-100 flex items-center justify-center p-6'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl text-center font-medium'>{text}</h1>
                    </div>
                ))}
            </div>

            <div className='w-full text-center mt-16 sm:mt-20'>
                <h1 className='text-purple-700 text-3xl sm:text-4xl md:text-5xl font-bold'>
                    With This Course, <span className='bg-gradient-to-r from-purple-700 to-pink-600 text-transparent bg-clip-text'>You Get:</span>
                </h1>
            </div>

            <div className="w-full flex flex-col items-center gap-6 sm:gap-10 mt-12 sm:mt-16 px-4 py-6">
                {[
                    { icon: "fa-globe", text: "Hands-on Lessons – Learn digital painting, shading & composition." },
                    { icon: "fa-rotate-right", text: "Tool Mastery – Master Procreate, Photoshop, & Illustrator." },
                    { icon: "fa-newspaper", text: "Exclusive Resource Pack – Brushes, templates & textures." },
                    { icon: "fa-coins", text: "Live Mentorship – Weekly Q&A sessions with industry pros." },
                    { icon: "fa-location-dot", text: "Project-Based Learning – Build a stunning portfolio." },
                    { icon: "fa-book-open", text: "Community Access – Network with fellow artists." },
                    { icon: "@", text: "Certificate of Completion – Boost your creative career." },
                ].map((item, index) => (
                    <div key={index} className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-4 sm:gap-5 shadow-lg shadow-blue-300 px-6 text-center">
                        <i className={`fa-solid ${item.icon} text-xl sm:text-2xl`}></i>
                        <h1 className="text-gray-800 text-sm sm:text-lg md:text-xl font-semibold">{item.text}</h1>
                    </div>
                ))}
            </div>

            <div className='mt-10 flex justify-center'>
                <Button className='rounded-2xl w-full sm:w-[250px] md:w-[350px] lg:w-[400px] text-xl sm:text-2xl md:text-3xl px-6 sm:px-10 py-6 sm:py-10 text-white bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600'>
                    Book Now At ₹49
                </Button>
            </div>
        </div>

    )
}

export default Section2
