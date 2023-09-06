import React, { useMemo } from 'react';
import MediaAcademyData from '../MediaAcademy.json'
import bg from '../images/mediaAcademybg.jpg'
// "cours_duration": "",


const childCourses =
    ["Book Reading",
        "Story Telling",
        "Public Speaking",
        "Basic Etiquette",
        "Personality Development", "Converation Practice",
        "General Awareness",
        "Quizzes",
        "Behavior and Attitude",
        "Hobby Recognition",
        "Stage Presence ",
        "Public and Camera Exposure"
        , "Anchoring"
    ]
  
const MediaAcademy = () => {
    const mappedData = useMemo(() => {
        return MediaAcademyData.map((MediaAcademyItem) => <div key={MediaAcademyItem.key} className="z-[9999] pt-[132px] content  max-xs:w-full  md:w-[55%] bg-white opacity-80 p-5 shadow-lg shadow-pink-900 m-5 flex flex-col justify-center items-center mx-auto rounded-lg">
            <div className=' bg-white  p-5 shadow-lg shadow-pink-900 m-5 flex flex-col justify-center items-center mx-auto rounded-lg z-[999]'>
                <h1 className='text-3xl uppercase text-center font-semibold p-5 text-violet-950'>{MediaAcademyItem.cours_duration}</h1>
                <div className='flex w-full py-2 px-2 text-violet-950 items-center font-semibold text-xl justify-between '><p>Courses</p><p>Courses Fees</p> </div>
                <div className="courses_prices w-full mx-auto px-3">
                    {
                        MediaAcademyItem.courses.map((MediaAcademyItemCourses, index) => <div key={index} className=' flex justify-between items-center gap-6 border px-2 py-1 w-full '>
                            <p className="course_name capitalize z-[9999] text-pink-700 font-semibold text-[18px] py-2 table-auto border-collapse">{MediaAcademyItemCourses.course_name} </p>
                            <p className="course_price capitalize z-[9999] font-semibold ">{MediaAcademyItemCourses.price}/-</p>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
        );
    }, [MediaAcademyData]);
    return (
        <div className='main-container h-screen w-screen relative scrollbar-hide object-cover'>
            <img src={bg} className='absolute z-[-9999] w-screen h-screen' alt="shivanifilms" />
            <div className='absolute z-[-9999] bg-black opacity-50 w-screen h-screen'></div>
            <div className="h-full w-full  max-xs:mx-13 ">
                {mappedData}
                {/* children courses */}
                <div  className="z-[9999] pt-[132px] content  max-xs:w-full  md:w-[55%] bg-white opacity-80 p-5 shadow-lg shadow-pink-900 m-5 flex flex-col justify-center items-center mx-auto rounded-lg">
            <div className=' bg-white  p-5 shadow-lg shadow-pink-900 m-5 flex flex-col justify-center items-center mx-auto rounded-lg z-[999]'>
                <h1 className='text-3xl uppercase text-center font-semibold p-5 text-violet-950'>For children of 5-Years old and above</h1>
                <p className='text-violet-950 font-semibold text-xl py-2'>FEES: 20000/-</p>
                <div className='flex w-full py-2 px-2 text-violet-950 items-center font-semibold text-xl justify-center'><p>Courses</p> </div>
                <div className="courses_prices w-full mx-auto px-3">
                    {
                        childCourses.map((childItemCourses, index) => <div key={index} className=' flex justify-center items-center gap-6 border px-2 py-1 w-full '>
                            <p className="course_name capitalize z-[9999] text-pink-700 font-semibold text-[18px] py-2 table-auto border-collapse">{childItemCourses} </p>
                           
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}

export default MediaAcademy;

