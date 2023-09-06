import React from 'react'
import { AiTwotoneMail } from 'react-icons/ai'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (

    <>

      <div className="container mx-auto px-5 md:px-0">
        <footer className="text-gray-100 bg-[#B21651]">
          <div className="max-w-5xl mx-auto py-5">
            <h1 className="text-center font-semibold text-xl lg:text-4xl h-[60px]">Join the Shivanifilms</h1>
            {/* <p className="text-center px-20 py-1">Sign up to the newsletter and be the first one to know about new product or
            special offers.</p> */}
            <div className="flex justify-center mt-6">
              <div className="flex-row">
                <div className="bg-white rounded-lg">
                  <div className="flex flex-warp justify-between md:flex-row">
                    <input type="email"
                      className="m-1 p-3 md:w-96 appearance-none border-none text-[#B21651] text-sm font-medium focus:outline-none focus:border-white focus:rounded focus:placeholder-transparent"
                      placeholder="Enter your email" aria-label="Enter your email" />
                    <button
                      className="w-full text-sm m-1 p-2  bg-[#B21651] rounded-lg font-semibold lg:w-auto hover:bg-white hover:shadow-md hover:shadow-[#B21651] hover:text-[#B21651]">Subscribe</button>
                  </div>
                </div>
                {/* <p className="text-sm ml-1 mt-2 font-light text-gray-300">We won't spam. Pinky promise</p> */}
              </div>
            </div>
            <hr className="h-px mt-6 bg-[#B21651] border-none" />
            <div className="flex items-center justify-center mt-6">
            
                  <Link to="/" className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">Home</Link>
                  <Link to="/about" className="px-4 md:pl-10 md:pr-4 text-sm text-gray-100 font-medium hover:text-gray-400">About</Link>
                  <Link to="/services" className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">Services</Link>
            </div>
          </div>
          <div className=" bg-[#B21651] text-white p-4 text-center">
            <p>&copy; 2023 Shivanifilms. All rights reserved.</p>
            <div className="mt-4 flex justify-center items-center gap-5">
              <a
                href="https://www.facebook.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4"

              >
                <FaInstagram size={24} />
              </a>
              <a
                href="mailto:shivanifilms@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4"

              >
                <AiTwotoneMail size={24} />
              </a>
              <a
                href="http://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4"

              >
                <BsLinkedin size={24} />
              </a>

            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;