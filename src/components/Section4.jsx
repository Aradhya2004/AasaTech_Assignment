import React from 'react'
import { Button } from './ui/button'

function Section4() {
    return (
        <div className="bg-gray-50 flex flex-col items-center">

            <div className="w-full text-center mt-16 sm:mt-20">
                <h1 className="text-3xl sm:text-4xl text-gray-800 font-semibold">
                    Not Satisfied{" "}
                    <span className="bg-gradient-to-r from-gray-700 to-gray-500 text-transparent bg-clip-text">
                        Yet?
                    </span>
                </h1>
                <h3 className="text-lg sm:text-2xl mt-3 text-gray-700">
                    We got you! Here are a few extra features
                </h3>
            </div>

            <div className="w-full flex flex-col items-center gap-6 px-4 sm:px-6 py-8">
                {[
                    {
                        icon: "fa-regular fa-calendar",
                        text: "Sketching Basics – Shape, form, and proportion fundamentals",
                    },
                    {
                        icon: "fa-solid fa-hexagon-nodes",
                        text: "Digital Painting – Master shading, blending & coloring techniques",
                    },
                    {
                        icon: "fa-brands fa-whatsapp",
                        text: "Tool Mastery – Hands-on with Procreate, Photoshop & Illustrator",
                    },
                    {
                        icon: "fa-regular fa-image",
                        text: "Character & Concept Art – Create professional-grade designs",
                    },
                    {
                        icon: "fa-solid fa-arrow-up-right-dots",
                        text: "Portfolio Building – Craft stunning pieces to showcase your skills",
                    },
                    {
                        icon: "fa-regular fa-id-badge",
                        text: "Bonus: Monetization Guide – How to sell your art & get freelance gigs",
                    },
                    {
                        icon: "fa-solid fa-computer",
                        text: "Certificate of Completion – Boost your creative career",
                    },
                    {
                        icon: "fa-solid fa-database",
                        text: "Project-Based Learning – Build a stunning portfolio",
                    },
                    {
                        icon: "fa-solid fa-user",
                        text: "Live Mentorship – Weekly Q&A sessions with industry pros",
                    },
                ].map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white h-20 rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[700px] flex items-center gap-5 shadow-lg shadow-blue-300 px-6"
                    >
                        <i className={`${feature.icon} text-2xl`}></i>
                        <h1 className="text-gray-800 font-semibold text-lg sm:text-xl">
                            {feature.text}
                        </h1>
                    </div>
                ))}
            </div>

            <div className="mt-8 sm:mt-10 flex justify-center">
                <Button className="rounded-2xl w-full sm:w-[250px] md:w-[300px] lg:w-[350px] text-2xl sm:text-3xl px-8 py-8 text-white bg-gradient-to-r from-blue-800 via-blue-600 to-pink-600">
                    Book Now For ₹79
                </Button>
            </div>

            <div className="w-full text-center mt-16 sm:mt-20">
                <h1 className="text-3xl sm:text-4xl text-gray-900 font-semibold">
                    Enroll Now for{" "}
                    <span className="bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text">
                        ₹7,999
                    </span>
                </h1>
            </div>

            <div className="w-full flex flex-col items-center gap-4 px-4 sm:px-6 py-6">
                {[
                    "Secure Your Spot for Just ₹79",
                    "Bonus Offer: Apply a coupon code within 15 minutes to unlock:",
                    "Exclusive Brush & Texture Pack",
                    "Extra Live Q&A Session with Mentors",
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-3xl w-full sm:w-[350px] md:w-[400px] lg:w-[500px] flex items-center justify-center border border-gray-300 text-center p-4"
                    >
                        <h1 className="text-gray-800 text-lg sm:text-xl font-semibold">
                            {item}
                        </h1>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center mt-10 text-center px-4">
                <h1 className="text-lg sm:text-2xl font-semibold">
                    We Offer Everything You Need at ₹7,999, But Wait...
                </h1>
                <div className="mt-6 bg-gradient-to-r from-pink-300 to-green-200 rounded-2xl w-full sm:w-[400px] p-5">
                    <h1 className="text-lg sm:text-xl text-gray-900 font-medium">
                        Use a Special Code & Unlock a Game-Changing Discount to Avail the
                        Same Course at a Discounted Price!
                    </h1>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <Button className="rounded-2xl w-full sm:w-[250px] md:w-[300px] lg:w-[350px] text-2xl sm:text-3xl px-8 py-8 text-white bg-gradient-to-r from-blue-800 via-blue-600 to-pink-600">
                    Book Now For ₹79
                </Button>
            </div>
        </div>
    )
}

export default Section4
