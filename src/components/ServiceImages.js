import React, { useMemo } from 'react'
import Recording1 from '../images/RecordingStudio1.png'
import Recording2 from '../images/RecordingStudio2.png'
import VideoShootingStudio from '../images/VideoShootingStudio.png'
import VideoEditingStudio from '../images/VideoEditingStudio.png'
import Animation from '../images/AnimationStudio.png'
import Animation2 from '../images/AnimationStudio2.png'
import camera1 from '../images/Camera1.png'
import camera2 from '../images/Camera2.png'
import camera3 from '../images/camera3.png'
import camera4 from '../images/Camera4.png'
import camera5 from '../images/camera5.png'
import camera6 from '../images/camera6.png'
import camera7 from '../images/Camera7.png'
import camera8 from '../images/Camera8.png'
const cameras = [camera1, camera2, camera3, camera4, camera5, camera6, camera7, camera8]
const ServiceImages = () => {
    const mappedCamera = useMemo(() => cameras.map((camera, index)=><div key={index} className="w-fit rounded-lg shadow  max-md:mb-6  hover:scale-105 hover:shadow-xl hover:shadow-slate-500 duration-200">
    <a href="/">
        <img className="rounded-t-lg h-48 w-56" src={camera} alt="shivanifilms" />
    </a>
</div>) , [])
    return (
        <>
            {/* INFRASTRUCTURE RECORDING STUDIO */}
            <div className="h-full w-screen flex flex-col justify-start md:space-y-[-10px] items-center bg-[#E6F3FF]">
                <h1 className='text-2xl md:text-3xl min-h-[60px] mt-3 text-center text-[#1B558C] ' style={{fontFamily:"lato"}}>INFRASTRUCTURE RECORDING STUDIO</h1>
                <div className=' flex flex-col md:flex-row w-full  gap-7 justify-around items-center m-4  min-h-[270px]'>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-md:mb-6  hover:scale-105 hover:shadow-xl hover:shadow-slate-500 duration-200">
                        <a href="/">
                            <img className="rounded-t-lg " width={370} src={Recording1} alt="shivanifilms" />
                        </a>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:shadow-xl hover:shadow-slate-500 duration-200">
                        <a href="/">
                            <img className="rounded-t-lg " width={350} src={Recording2} alt="shivanifilms" />
                        </a>
                    </div>
                </div>
            </div>
            {/* VIDEO SHOOTING STUDIO */}
            <div className="h-full w-screen flex flex-col justify-around md:space-y-[-10px] items-center md:flex-row  pt-5 bg-[#E6F3FF]">
                <div className=' min-w-[45%] flex flex-col space-y-[-70px] justify-center items-center md:space-y-[-40px]'>
                    <h1 className='text-2xl md:text-3xl min-h-[60px]  text-center text-[#1B558C]'  style={{fontFamily:"lato"}}> VIDEO SHOOTING STUDIO</h1>
                    <div className=' flex flex-col md:flex-row w-full  gap-7 justify-around items-center m-4  min-h-[270px] min-w-[45%]'>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-md:mb-6  hover:scale-105 hover:shadow-xl hover:shadow-slate-500 duration-200">
                            <a href="/">
                                <img className="rounded-t-lg w-96 object-cover" src={VideoShootingStudio} alt="shivanifilms" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=' min-w-[45%] flex flex-col space-y-[-50px] xs:space-y-[-10px] justify-center items-center md:space-y-[-40px]'>
                    <h1 className='text-2xl md:text-3xl min-h-[60px]  text-center text-[#1B558C] ' style={{fontFamily:"lato"}}> VIDEO EDITING STUDIO</h1>
                    <div className=' flex flex-col md:flex-row w-full  gap-7 justify-around items-center m-4  min-h-[270px]  min-w-[45%]'>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-md:mb-6  hover:scale-105 hover:shadow-xl hover:shadow-slate-500 duration-200">
                            <a href="/">
                                <img className="rounded-t-lg w-96" src={VideoEditingStudio} alt="shivanifilms" />
                            </a>
                        </div>
                    </div>
                </div>


            </div>
            {/* animation studio */}
            <div className="h-full w-screen flex flex-col justify-start md:space-y-[-10px] items-center bg-[#E6F3FF]">
                <h1 className='text-2xl md:text-3xl min-h-[60px] mt-3 text-center text-[#1B558C] '  style={{fontFamily:"lato"}}>ANIMATION STUDIO</h1>
                <div className=' flex flex-col md:flex-row w-full  gap-7 justify-around items-center m-4  min-h-[270px]'>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-md:mb-6  hover:scale-105 hover:shadow-xl hover:shadow-slate-500 duration-200">
                        <a href="/">
                            <img className="rounded-t-lg " width={370} src={Animation} alt="shivanifilms" />
                        </a>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:shadow-xl hover:shadow-slate-500 duration-200">
                        <a href="/">
                            <img className="rounded-t-lg " width={350} src={Animation2} alt="shivanifilms" />
                        </a>
                    </div>
                </div>
            </div>
            {/* camera-lights */}
            <div className="h-full w-screen flex flex-col justify-start md:space-y-[-80px] items-center bg-[#E6F3FF] mx-auto">
                <h1 className='text-2xl md:text-3xl min-h-[60px] mt-3 text-center text-[#1B558C]'  style={{fontFamily:"lato"}}>CAMERA -LIGHTS & EQUIPMENTS</h1>
                <div className=' grid  grid-cols-2  md:grid-cols-4 w-full   justify-around items-center m-4  min-h-[740px] p-10'>
                    {
                        mappedCamera
                    }

                </div>
            </div>
        </>
    )
}

export default ServiceImages