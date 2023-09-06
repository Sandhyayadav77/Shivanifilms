import React from 'react'
import clapperboard from '../images/clapperboard.png'
import logo from '../images/logo.png'
import ServiceItem from '../components/ServiceItem'
import Servicesbottom from '../components/Servicesbottom'
import ServiceImages from '../components/ServiceImages'
const Services = () => {
    return (
        <>
            <div className="service w-full h-fit pt-[120px]">
                <div className='bg-image w-full h-[400px] md:flex sm:items-center sm:justify-start md:-space-x-30'>
                    <img src={clapperboard} alt="shivanifilms" className='sm:w-[900px] md:w-[800px]' />
                    <p className='text-[#C3292B] text-justify w-[80%] md:text-xl md:w-[60%] md:tracking-tight sm:text-base sm:leading-6 mx-auto leading-4 p-4 md:mr-16 '>Welcome to Shivani Films, a leading Media Agency with a stellar reputation in the industry. Our expertise lies in providing top-notch Audio-Visual Production services, catering to various media platforms. As an innovative E-Learning Company, we are committed to delivering high-quality educational content that engages and enlightens learners. With a well-established presence in the world of Public Relations and Advertising, we take pride in crafting compelling campaigns that effectively convey our clients' messages to the masses. Whether it's promoting products, services, or causes, we excel in creating captivating content that leaves a lasting impact. </p>
                </div>
                <div className="logo w-full h-full bg-[#E6F3FF] ">
                    <img src={logo} alt="shivanifilms" className=' w-[70%]  mx-auto object-contain' />

                    <p className='text-4xl relative  h-[50px] lg:text-4xl md:top-[-40px] sm:top-[-20px] max-sm:text-xl w-fit lg:top-[-60px] mx-auto mb-4 text-[#C3292B] max-sm:top-[-10px] text-center '> Where Imagination Becomes Reality</p>
                </div>
                <ServiceItem />
                <ServiceImages/>
                <Servicesbottom />
            </div>
        </>
    )
}

export default Services