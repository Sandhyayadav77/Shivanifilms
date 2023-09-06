import React from 'react'
import recording from '../images/recording.jpg'
import studio from '../images/studio.jpg'
import editing from '../images/editing.jpg'
import facility from '../images/facility.jpg'

const Assets = () => {
    return (
        <>
            <div className="assets-main-content h-full w-full pt-[120px]">
                <div className="inner-assets h-full">
                    {/* recording  */}
                    <div className='recording p-4 bg-[#DAEAFF] h-fit sm:flex sm:items-center sm:justify-center  sm:gap-32'>
                        <div className="left sm:w-[60%]">
                            <h1 className='bg-[#2B5483] text-[22px] sm:text-2xl  text-white text-center m-4 p-1'>Audio Recording Studio:</h1>
                            <p className='p-4 text-base text-justify leading-5 tracking-tight sm:text-xl'>
                                Step into our professional audio recording studio, where sound is transformed into an immersive experience. Equipped with industry-leading microphones, mixing consoles, and acoustic treatment, our studio ensures pristine audio quality for voice-overs, dubbing, music production, and radio jingles. Whether you need a soothing narration or a catchy jingle, our audio recording studio is designed to capture every note with perfection
                            </p>
                        </div>
                        <img src={recording} alt="shivanifilms" className=" rounded-md sm:min-h-[380px] sm:w-[48%] before:content-[''] after:content-[''] shadow-md shadow-[#B21651] " />
                    </div>
                    {/*  studio*/}
                    <div className='studio p-4 bg-[#B21651] h-fit sm:flex sm:items-center sm:justify-center sm:gap-10'>
                        <img src={studio} alt="shivanifilms" className="max-h-[500px] rounded-md sm:w-[48%] sm:min-h-[380px] before:content-[''] after:content-[''] shadow-md shadow-[#DAEAFF] " />

                        <div className="left sm:w-[60%]">
                            <h1 className='bg-[#DAEAFF] text-[22px] sm:text-2xl text-center m-3 p-1'>Video & Photography Studio:</h1>
                            <p className='p-4 pt-2 text-base text-justify text-white sm:leading-6 tracking-tight sm:text-xl'>
                                Our spacious and adaptable video and photography studio sets the stage for creativity. With versatile lighting setups, green screens, and an array of backdrops, we offer the perfect environment for capturing stunning visuals. Whether it's a product shoot, a promotional video, or a photo session, our studio provides the ideal canvas to bring your ideas to life. Our experienced photographers have an eye for detail, ensuring each shot is composed to perfection, while our skilled videographers masterfully capture the essence of your story in every frame. From concept to execution, our studio is designed to cater to all your visual needs, making it the ultimate hub for photography and videography enthusiasts alike.
                            </p>
                        </div>
                    </div>
                    {/* animation editing  */}
                    <div className='animation-editing p-4 bg-[#DAEAFF] h-fit sm:flex sm:items-center sm:justify-center  sm:gap-32'>
                        <div className="left sm:w-[60%]">
                            <h1 className='bg-[#2B5483] text-[22px] sm:text-2xl  text-white text-center m-4 p-1'>Animation Studio:</h1>
                            <p className='p-4 text-base text-justify leading-5 tracking-tight sm:text-xl'>
                                Unlock the potential of animation and video editing at our dedicated workstation. Our talented animators and editors work tirelessly to craft seamless animations and compelling video edits that leave a lasting impact. Equipped with the latest software and technology, our animation and editing station is where imagination meets reality.
                            </p>
                        </div>
                        <img src={editing} alt="shivanifilms" className=" rounded-md sm:min-h-[380px] sm:w-[48%] before:content-[''] after:content-[''] shadow-md shadow-[#B21651] " />
                    </div>
                    {/*  studio*/}
                    <div className='studio p-4 bg-[#B21651] h-fit sm:flex sm:items-center sm:justify-center sm:gap-10 border-b-2 border-b-white'>
                        <img src={facility} alt="shivanifilms" className="max-h-[400px] rounded-md sm:w-[43%] sm:min-h-[380px] before:content-[''] after:content-[''] mx-auto shadow-md shadow-[#DAEAFF] " />

                        <div className="left sm:w-[60%]">
                            <h1 className='bg-[#DAEAFF] text-[22px] sm:text-2xl text-center m-3 p-1'>Post-Production Facilities:</h1>
                            <p className='p-4 pt-2 text-base text-white text-justify sm:leading-6 tracking-tight sm:text-xl'>
                                Our commitment to excellence doesn't end with the shoot. Our post-production facilities feature top-of-the-line hardware and software to fine-tune and perfect every aspect of your project. From color grading to sound mixing, we ensure that your final deliverable exceeds expectations.
                                At Our Studio, we understand the importance of having the right infrastructure to deliver outstanding results. Our well-equipped spaces and skilled team ensure that every project, big or small, receives the same level of attention and dedication. Collaborate with us, and let's bring your creative vision to life with the perfect blend of artistry and technology.
                                Contact us today to discuss your next project and experience the difference of working with a studio that combines creativity, innovation, and exceptional resources. Together, we can make your dreams a reality!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Assets