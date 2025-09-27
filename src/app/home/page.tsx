"use client";

import React from 'react'
import Hero from '@/app/shared/sections/Hero';
import Gallery from '@/app/shared/sections/Gallery';

const Home = () => {
  return (
    <div className='w-full mx-auto max-w-[1400px] px-4 lg:px-6 py-10'>
      <div className='mb-10 lg:mb-20'>
        <Hero/>
      </div>

      <div  className='mb-15'>
        <Gallery />
      </div>
      
    </div>
  )
}

export default Home