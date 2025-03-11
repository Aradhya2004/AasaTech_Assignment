import React from 'react'
import img from "../assets/Aasa-Logo.png"
import { Button } from './ui/button'

function Navbar() {
  return (
    <div className='bg-gray-100 h-30 flex w-full items-center justify-around sticky top-0'>
      <div>
        <img className='h-15' src={img} alt="logo" />
      </div>
      <div>
        <Button className='rounded-4xl text-xl px-10 py-7 text-white bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500'>Get Started</Button>
      </div>
    </div>
  )
}

export default Navbar
