import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div id='home' className="h-[92.4vh] flex flex-col justify-center items-center">
      <div className="flex flex-col 2xl:gap-4 items-center">
        <h1 className="text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-[#C9D1D9]">Hi, My name is <span className="text-[#58A6FF]">Aayush</span></h1>
        <h1 className="text-2xl 2xl:text-5xl md:text-4xl text-center text-[#C9D1D9]">and I am a passionate</h1>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Wev Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Designer',
        1000,
        'Video Editor.',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      className="text-xl md:text-4xl 2xl:text-4xl text-center text-[#A5D6FF]"
      repeat={Infinity}
    />
      </div>
    </div>
  )
}

export default Hero