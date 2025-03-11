import React from 'react'
import img from '../assets/img1.png'

function Section3() {
    return (
        <div className='bg-gray-50 w-full flex flex-col items-center justify-center py-16 px-6'>
            <div className='flex justify-center w-full'>
                <iframe className='h-130 w-130 shadow-lg shadow-blue-500 rounded-lg' src="" />
            </div>
            <div className='flex flex-wrap justify-center gap-10 mt-16 px-6 p-10'>
                <div className='bg-white h-80 w-80 rounded-md shadow-lg flex flex-col p-1 bg-gradient-to-t from-blue-500 to-purple-500'>
                    <div class="bg-white rounded-md p-7.5">
                        <h1 className='text-3xl text-center font-medium mt-10'>
                            Aditi Verma
                        </h1>
                        <h3 className='text-xl text-center mt-2'>22</h3>
                        <p className='mt-5 text-center font-semibold'>I always wanted to learn digital art,
                            but tutorials were confusing. This
                            course made everything so simple!
                            Now, I m taking commissions online!</p>
                    </div>
                </div>

                <div className='bg-white h-80 w-80 rounded-md shadow-lg flex flex-col p-1 bg-gradient-to-t from-blue-500 to-purple-500'>
                    <div className="bg-white rounded-md p-7.5">
                        <h1 className='text-3xl text-center font-medium mt-10'>
                            Rajesh Khanna
                        </h1>
                        <h3 className='text-xl text-center mt-2'>30</h3>
                        <p className='mt-5 text-center font-semibold'>Switching from traditional art to
                            digital felt overwhelming, but this
                            course changed everything! The
                            structured lessons helped me master
                            Procreate in weeks!</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-3 justify-center items-center mt-20'>
                <h1 className='text-4xl text-purple-700 font-bold'> Is This Right For You?</h1>
                <h3 className='text-2xl'>Everybody is fond of Digital Art! You need it too.</h3>
            </div>
            <div className='flex justify-center w-full mt-10'>
                <img className='h-auto max-w-lg' src={img} alt="Illustration Course" />
            </div>
        </div>
    )
}

export default Section3
