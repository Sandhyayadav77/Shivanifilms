import React from 'react'
import image from '../images/image42.png'
import image1 from '../images/image3.webp'


const Intro2 = () => {
    return (
        <>
            <div className="main w-screen h-full bg-[#FFFFFF] ">
                <div className="inner-container w-[100%]   flex flex-col justify-between sm:flex-row-reverse ">
                    <div className="image max-sm:mt-2 mx-auto ">
                        <img src={image1} className='max-sm:rounded-xl max-sm:h-[400px] sm:object-cover sm:h-full' alt="shivanifilms" />
                    </div>
                    {/* content */}
                    <div className="content mx-4 px-15 my-2 h-full flex flex-col justify-between before:content-[''] after:content-[''] max-sm:shadow-lg max-sm:shadow-gray-800 p-4 rounded-sm">
                        <div className="text ">
                            <p className='text-[#2C3C63] mx-auto sm:w-[70%] text-base font-bold text-justify tracking-tight leading-5 sm:text-xl sm:leading-7 sm:tracking-wide'>Enter the realm of media excellence and elevate your creative journey. Join us today for an extraordinary experience. Are you ready to embark on new ventures?</p>
                        </div>
                        <div className='my-3 mx-auto' >
                            <img src={image} alt="shivanifilms" />
                        </div>
                        <p className='font-bold text-center sm:text-xl'>Choose your path below and be part of our thriving community.</p>
                        {/* buttons  */}
                        <div className='btns flex gap-10 mx-auto my-2 p-5 w-full justify-center items-center h-fit sm:min-h-[85px] '>
                            <button className='py-1 px-2 sm:px-3 rounded-3xl min-h-[60px] bg-[rgb(78,120,175)] text-white hover:scale-110 duration-200 hover:bg-[#1C6184]'>
                                <span className='block max-sm:text-xs'>Connect with</span>
                                <span className='block max-sm:text-xs'>  Top Talent</span>
                            </button>
                            <button className='py-1 px-2 sm:px-3 rounded-3xl  min-h-[60px] bg-[rgb(78,120,175)] text-white hover:scale-110 duration-200 hover:bg-[#1C6184]'>
                                <span className='block max-sm:text-xs'>Find Exciting
                                </span>
                                <span className='block max-sm:text-xs'>  Projects</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Intro2