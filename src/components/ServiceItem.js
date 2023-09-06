import React, { useMemo } from 'react'
import { FaVideo } from 'react-icons/fa'


const Services = [
    {
        title: "Video  Production :",
        titlePoints: ["TV Serials", "AD Films", "Corporate Films", "Promo Shoots"],
        key: 1
    },
    {
        title: "Multimedia   Services :",
        titlePoints: [" Videography", "Video Editing", "Animation"],
        key: 2
    },
    {
        title: "Audio  Services:",
        titlePoints: [" Radio Jingles", "Music"],
        key: 3
    },
    {
        title: "Content  Creation:",
        titlePoints: ["E-Learning", "Creative Vision"],
        key: 4
    },
]
const ServiceItem = () => {
    const mappedServices = useMemo(() => Services.map((serviceItem) => <div key={serviceItem.key} className='serviceItem mx-auto  max-xs:flex-col xs:flex-row md:flex md:justify-center md:items-center '>
        <div className="title  px-4 py-3 mx-auto my-2 bg-[#c25785] max-w-[222px]  h-fit flex item-center justify-center gap-4 rounded-xl  ">
            <div>
                <FaVideo size={50} className='text-black w-full h-full' />
            </div>
            <p className='text-white text-2xl font-semibold'>{serviceItem.title}</p>
        </div>
        <div className='title-services px-7 py-3 bg-black md:min-w-[200px] w-fit rounded-2xl mx-auto  relative max-xs:bottom-5 xs:bottom-3 md:-left-5 md:top-0 z-[999] '>
            <ul className="max-w-md space-y-1 text-white list-disc list-inside ">
                {
                    serviceItem.titlePoints.map((points, index) => <li key={index}>{points}</li>)
                }
            </ul>
        </div>
    </div>) , [])
    return (
        <>
            <div className='w-full min-h-[80px] bg-[#B21651] text-white flex justify-center items-center 
                text-[50px] font-semibold max-sm:text-[38px]'>Our Services</div>
            <div className='w-full h-full bg-[#E6F3FF] py-5 xs:grid gap-x-8 xl:gap-x-0 gap-y-4 grid-cols-2' >
                {
                    mappedServices
                }
            </div>
        </>
    )
}

export default ServiceItem;

