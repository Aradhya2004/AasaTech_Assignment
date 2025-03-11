import React from 'react'
import img from '../assets/img1.png'

function Section3() {
    return (
        <div className='bg-gray-50 w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6'>
            <div className='flex justify-center w-full'>
                <iframe className='h-auto w-full sm:h-[400px] sm:w-[600px] shadow-lg shadow-blue-500 rounded-lg' src="" />
            </div>

            <div className='flex flex-wrap justify-center gap-6 sm:gap-10 mt-12 px-4 py-6'>
                {[
                    { name: "Aditi Verma", age: "22", text: "I always wanted to learn digital art, but tutorials were confusing. This course made everything so simple! Now, I'm taking commissions online!" },
                    { name: "Rajesh Khanna", age: "30", text: "Switching from traditional art to digital felt overwhelming, but this course changed everything! The structured lessons helped me master Procreate in weeks!" }
                ].map((person, index) => (
                    <div key={index} className='bg-gradient-to-t from-blue-500 to-purple-500 p-1 rounded-md shadow-lg w-full sm:w-80'>
                        <div className="bg-white rounded-md p-6 sm:p-7">
                            <h1 className='text-2xl sm:text-3xl text-center font-medium mt-6'>{person.name}</h1>
                            <h3 className='text-lg sm:text-xl text-center mt-2'>{person.age}</h3>
                            <p className='mt-4 text-center font-semibold text-sm sm:text-base'>{person.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-col gap-2 justify-center items-center mt-16 sm:mt-20 text-center'>
                <h1 className='text-3xl sm:text-4xl text-purple-700 font-bold'>Is This Right For You?</h1>
                <h3 className='text-lg sm:text-2xl'>Everybody is fond of Digital Art! You need it too.</h3>
            </div>

            <div className='flex justify-center w-full mt-8 sm:mt-10'>
                <img className='h-auto max-w-full sm:max-w-lg' src={img} alt="Illustration Course" />
            </div>
        </div>

    )
}

export default Section3
