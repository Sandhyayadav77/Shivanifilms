import React, { useMemo } from 'react'
import AvImagesArrays from '../images/AvProduction/AvProduction'
const AvProduction = () => {
    const images = useMemo(() => AvImagesArrays.map((image, index) => <div key={index} className="rounded overflow-hidden shadow-lg">
        <img className="w-full h-40" src={image.url} alt="River" />
    </div>), []);

    return (

        <>
            <div className='pt-[150px]'>
            <h1 className='text-xl max-md:mx-3 md:text-3xl text-[#B21651] text-center font-semibold h-14 uppercase' style={{fontFamily:"Raleway"}}>Audio Visual Production Houses</h1>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {images}
                </div>
            </div>
        </>
    )
}

export default AvProduction