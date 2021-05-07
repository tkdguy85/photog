import React from 'react'
import BG from '../img/bg.jpg'

export default function Home() {
  return (
    <main>
      <img 
        src={BG} 
        alt="black and white flower"
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-20'>
        <div>
          <h1 className='text-6xl text-center py-8 text-blue-200 font-bold leading-none lg:leading-snug'>Welcome to PhotoG Tips</h1>
          <p className='text-3xl text-yellow-500 font-semibold leading-none lg:leading-snug'>Budget friendly tips and tricks for amateur photography.</p>
        </div>
      </section>
    </main>
  )
}
