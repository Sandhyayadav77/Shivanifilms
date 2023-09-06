import React from 'react'
import leftface from '../images/leftface.jpg'
import rightface from '../images/rightface.jpg'
const Servicesbottom = () => {
    return (
        <>
            <div className="h-fit w-screen  ">
                <div className="inner-bottom-content h-fit">
                    <div className='h-fit w-screen flex justify-between items-center '>
                        <img src={leftface} className='object-cover w-[50%] h-fit' alt="shivanifilms" />
                        <p className='bottom-para leading-tight max-xs:text-[5px] max-xs:w-[80%] xs:w-[60%] mx-auto max-md:text-xs z-40 tracking-tight text-center min-h-[160px] w-full self-center flex justify-center items-center '>
                            At Our Studio, we take pride in having a cutting-edge facility equipped with a wide range of assets and equipment to bring your creative projects to life. Our passion for excellence is mirrored in the quality and capabilities of our dedicated spaces, ensuring every aspect of your production receives the attention it deserves.</p>
                        <img src={rightface} className='object-cover w-[50%] h-full' alt="shivanifilms" />
                    </div>
                </div>
            </div>
           
        </>

    )
}

export default Servicesbottom