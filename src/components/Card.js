import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <>
            <div className="main-container w-screen h-fit">
                <div className="inner-main-container sm:flex w-full h-full">
                    {/* card 1 */}
                    <div className="card-1 min-h-[400px] sm:h-[500px] w-full bg-[#E7C1C3] flex flex-col justify-center items-center gap-10 ">
                        <div className='rounded-full h-[240px] w-[240px] bg-[#A10F18] flex justify-center items-center'>
                            <h1 className='uppercase h-[180px] w-[180px] bg-white rounded-full text-[#A10F18] text-2xl font-bold flex flex-col justify-center items-center'>
                                <span>Audio-Video</span>
                                <span> production</span>
                                <span>house</span>
                            </h1>
                        </div>
                        <Link to="/Audio-visual-production-house" className='bg-[#CF6B71] hover:scale-110 duration-150 w-[100px] min-h-[40px] hover:bg-gradient-to-tr from-[#A10F18] to-[#CF6B71] outline-none hover:border hover:border-[#A10F18]  text-2xl text-white px-7  py-1 rounded-full'> <button>Visit</button></Link>
                    </div>




                    {/* card 2 */}
                    <div className="card-1 min-h-[400px] sm:h-[500px] w-full bg-[#BEC9D6] flex flex-col justify-center items-center gap-10 ">
                        <div className='rounded-full h-[240px] w-[240px] bg-[#042D62] flex justify-center items-center'>
                            <h1 className='uppercase h-[180px] w-[180px] bg-white rounded-full text-[#042D62] text-2xl font-bold flex flex-col justify-center items-center'>
                                <span>Media</span>
                                <span> Academy</span>

                            </h1>
                        </div>
                        <Link to="/media-academy" className='bg-[#4E78AF] hover:scale-110 duration-150 w-[100px] min-h-[40px] hover:bg-gradient-to-tr from-[#042D62] to-[#4E78AF] outline-none hover:border hover:border-[#042D62]  text-2xl text-white px-7  py-1 rounded-full'> <button>Visit</button></Link>
                    </div>


                    {/* card 3 */}
                    <div className="card-3 min-h-[400px] sm:h-[500px] w-full bg-[#D1C7DA] flex flex-col justify-center items-center gap-10 ">
                        <div className='rounded-full h-[240px] w-[240px] bg-[#662674] flex justify-center items-center'>
                            <h1 className='uppercase h-[180px] w-[180px] bg-white rounded-full text-[#662674] text-2xl font-bold flex flex-col justify-center items-center'>
                                <span>BrainBox</span>
                                <span> OTT</span>

                            </h1>
                        </div>
                        <a href="/" className='bg-[#B86FC8] hover:scale-110 duration-150 w-[100px] min-h-[40px] hover:bg-gradient-to-tr from-[#662674] to-[#B86FC8] outline-none hover:border hover:border-[#662674]  text-2xl text-white px-7  py-1 rounded-full'> <button>Visit</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
