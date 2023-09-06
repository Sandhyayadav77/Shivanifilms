import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../images/logo.webp'
import { Link } from 'react-router-dom';

function Header() {
    const [toggle, setToggle] = useState(false);
    const handleMenuOptionClick = () => {
        setToggle(false); // This should hide the menu
    };
   

    return (
        <>
            <div className=''>
                <div className='w-screen mx-auto flex md:flex-col justify-between items-center z-[99900] fixed top-0  bg-white'>
                    <Link to='/' className="w-48 md:w-52 ml-6 font-bold md:h-fit ">
                        <img src={logo} alt="shivanifilms" />
                    </Link>
                    {
                        toggle ?
                            <AiOutlineClose size={45} onClick={() => setToggle(!toggle)} className=' text-2xl md:hidden block p-2' /> :
                            <AiOutlineMenu size={45} onClick={() => setToggle(!toggle)} className='  block md:hidden
                     text-2xl p-2'/>

                    }


                    <ul className=' hidden md:flex md:justify-center md:items-center space-x-20  text-[20px] text-white py-1 bg-[#B21651] w-full '>

                        <Link to='/' className='cursor-pointer hover:scale-110 duration-200 hover:text-gray-100 '>Home</Link>
                        <Link to='/services' className='cursor-pointer hover:scale-110 duration-200 hover:text-gray-100'>Services</Link>
                        <Link to='/artists' className='cursor-pointer hover:scale-110 duration-200 hover:text-gray-100' >Artists</Link>
                        <Link to='/projects' className='cursor-pointer hover:scale-110 duration-200 hover:text-gray-100'>Projects</Link>
                        <Link to='/assets' className='cursor-pointer hover:scale-110 duration-200 hover:text-gray-100'>Assets</Link>
                        <Link to='/about' className='cursor-pointer hover:scale-110 duration-200 hover:text-gray-100'>About</Link>
                        <Link to='/our-clients' className='cursor-pointer hover:scale-110 duration-200 hover:text-gray-100'>Our Clients</Link>


                    </ul>
                    {/* responsive menu */}

                    <ul className={` duration-300 md:hidden flex justify-start text-lg gap-5 mt-[-25px] pt-5 items-center flex-col  fixed left-[-100%] h-screen bg-black z-[999] text-white top-[95px] w-full  ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                        <Link to='/' className='py-4 pl-4 cursor-pointer ' onClick={handleMenuOptionClick} >Home</Link>
                        <Link to='/about' className='py-4 pl-4 cursor-pointer' onClick={handleMenuOptionClick}>About</Link>
                        <Link to='/artists' className='py-4 pl-4 cursor-pointer' onClick={handleMenuOptionClick}>Artists</Link>
                        <Link to='/projects' className='py-4 pl-4 cursor-pointer' onClick={handleMenuOptionClick}>Projects</Link>
                        <Link to='/assets' className='py-4 pl-4 cursor-pointer' onClick={handleMenuOptionClick}>Assets</Link>
                        <Link to='/services' className='py-4 pl-4 cursor-pointer' onClick={handleMenuOptionClick}>Services</Link>
                        <Link to='/our-clients' className='py-4 pl-4 cursor-pointer' onClick={handleMenuOptionClick}>Our Clients</Link>
                    </ul>
                </div>
            </div>

        </>
    )
};

export default Header;