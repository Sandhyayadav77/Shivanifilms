import React from 'react'
import director from '../images/director.png'

const About = () => {
  return (
    <>
      <div className="main h-full w-full pt-[120px]">
        <div className="inner-about-container h-fit w-full bg-[#15133A]">
        {/* opacity */}
          <div className='absolute w-full h-fit opacity-30 bg-gradient-to-r from-fuchsia-900 '></div>
          {/* para content */}
          <div className="about-para w-full ">
            <h1 className='text-[3rem] pt-4   font-bold text-center text-gray-200'>About Us</h1>
            <div className="about-content w-[80%] h-fit mx-auto before:content-[''] after:content-[''] shadow-md shadow-white p-4 leading-4 ">
              <p className='text-white text-justify pt-3 tracking-tight z-[9999] lg:text-lg'>
                We are dedicated to fostering collaboration and connecting talented artists with visionary employers in the dynamic world of media. Our platform serves as a thriving hub where creativity knows no bounds. We believe in the transformative power of artistic expression. That's why we're passionate about bringing together artists from diverse disciplines such as music, voice-overs, journalism, photography, fashion, and beyond. Whether you're an established professional or a rising talent, our platform offers a multitude of opportunities to showcase your skills and find projects that align with your artistic vision. For employers, we provide a seamless and efficient way to discover exceptional talent. Our comprehensive database showcases a wide range of artists, making it easier than ever to find the perfect match for your creative endeavors. Whether you're seeking a captivating voice-over artist, a visionary photographer, or a multi-talented team, our platform streamlines the hiring process and ensures you connect with the right talent to bring your projects to life.
              </p>
            </div>
          </div>

          {/* director content */}
          <div className="dir-content h-fit w-full mt-14 ">
            <div className="block w-[60%] sm:w-[90%] mx-auto p-4 rounded-lg bg-[#daeaff] ">
              <h1 className='text-2xl md:text-3xl text-center h-[43px] font-bold'> Deva Negi</h1>
            </div>
            <div className=' p-6  mx-auto sm:flex  sm:gap-10  sm:justify-center sm:items-center'>
              <div className="photo w-[80%] sm:w-[30%] mx-auto">
              <img src={director} alt="MR. DEVA NEGI" className=' block rounded-lg mx-auto border-[4px] m-3 h-[300px] sm:h-[250px] sm:w-[400px]'/>
              </div>
              <div className="intro text-white text-justify  w-[80%] h-fit mx-auto before:content-[''] after:content-[''] shadow-md shadow-white p-4 leading-4 sm:[h-400px] lg:text-lg ">
                <p>Deva Negi, our esteemed founder, is a highly dedicated and immensely talented creative director with significant contributions to the media industry. Holding postgraduate degrees in Journalism & Mass Communication, TV & Radio Programme Production, and Direction, he showcases a relentless commitment to professional growth. With vast experience collaborating with prestigious organizations and TV channels, Mr. Negi's innovative thinking has brought about groundbreaking projects. Beyond his professional achievements, his passion for travel and diverse cultures fuels his mission to raise awareness and celebrate global diversity. Mr. Negi's visionary leadership inspires our team to reshape the media landscape and create meaningful connections.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About