import React, { useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import sliderImagesArray from '../images/Avproduction/AvProductionImages';
const Slide = () => {


    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliderImagesArray.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === sliderImagesArray.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImagesArray.length);
        }, 2000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [sliderImagesArray.length]);


    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
         <div className='max-w-[1400px] h-[680px]  scrollbar-hide w-full m-auto  px-4 relative group pt-[162px]'>
            <div
                style={{ backgroundImage: `url(${sliderImagesArray[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>
           
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {sliderImagesArray.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Slide