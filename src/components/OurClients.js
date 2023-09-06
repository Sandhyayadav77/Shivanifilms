import React, { useMemo } from 'react'
import images from '../images/Clients/ClientImages'

const OurClients = () => {
    const mappedClients = useMemo(() => images.map((image, index) => <div key={index} className='shadow-inner shadow-red-800  rounded-3xl mx-8 my-7 mb-16'> <h1 className='text-center uppercase text-[33px] font-semibold py-3 text-red-800 '>{image.title}</h1>
        <div className='grid grid-cols-4  md:grid-cols-7 gap-4 justify-center items-center  px-9 py-5 '>{
            image.imagesArray.map((image_, index) => <img className='rounded-lg hover:scale-105 duration-200 hover:shadow-slate-700 hover:shadow-2xl' key={index} src={image_} width={140} height={60} alt="shivanifilms" />)
        }
        </div>
    </div>), [])
    return (
        <>
            <div className="our-clients-page pt-[132px] w-screen h-full">
                {/* heading */}
                <div className="heading w-full mx-auto ">
                    <h1 className='uppercase text-[30px] md:text-[25px] font-bold w-full mx-auto text-center text-[#094A85] py-3'> Our Clients PUBLICATION HOUSES
                    </h1>
                    <p className='normal-case text-center p-3 md:w-[60%] mx-5 md:mx-auto border-2 shadow-inner rounded-lg shadow-[#094A85] mt-3  '>15 year work experience in educational, animation & video content development. great work with oxford university press , cambridage university press, ratna sagar, arvind publication, navdeep publication,hall marks publication, vijeta publication & more than 100 publications.
                    </p>
                </div>
                {/* clients */}
                <div className='my-2 '>
                    {
                        mappedClients
                    }
                </div>
            </div>
        </>
    )
}

export default OurClients