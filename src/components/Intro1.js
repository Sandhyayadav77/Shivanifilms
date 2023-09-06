import React from 'react'
import image from '../images/image2.webp'
const Intro1 = () => {
  return (
    <>
      <div className="main w-screen h-fit bg-[#3B4462] before:content-[''] after:content-['']  flex flex-col justify-center items-center sm:flex-row sm:w-[100%]">
        <div className='w-[90%] object-cover p-6 '>
          <img src={image} className='w-full h-[400px] sm:h-[500px] object-cover rounded-3xl  shadow-xl shadow-blue-200  ' alt="shivanifilms" />
        </div>
        <div className="para w-screen p-5 ">
          <p className='w-[60%] sm:w-[80%] mx-auto text-white text-sm sm:text-lg tracking-tight leading-5 text-left'>"Welcome to our all-in-one creative hub, where talent meets opportunity. Discover, connect, and thrive as artists and employers unite on our platform, revolutionizing the way projects are brought to life. From music to voice overs, journalism to fashion, our comprehensive database effortlessly matches artists with their ideal projects. Unleash your creativity, explore our educational OTT platform for children, and unlock endless possibilities in the world of art and media."</p>
        </div>
      </div>
    </>
  )
}

export default Intro1