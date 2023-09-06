// import React from 'react'
// import { MdMoneyOff } from 'react-icons/md'
// import { BiSolidShoppingBags } from 'react-icons/bi'
// import { IoPersonSharp } from 'react-icons/io5'
// import { HiDocumentText } from 'react-icons/hi'
// import { BsFillBellFill } from 'react-icons/bs'
// import { GiTrophy } from 'react-icons/gi'



// const Member = () => {
//   return (
//     <>
//       <p className='uppercase text-2xl font-bold text-center py-6'>why become a member ?</p>
//       <div className=' grid grid-cols-3 md:grid-cols-6 justify-center items-center'>
//         <div className='p-4 flex flex-col justify-center items-center space-y-2'>
//           <div className='bg-[#B21651] h-[70px] w-[70px] rounded-full flex justify-center items-center'>
//             <BiSolidShoppingBags color='white' size={40} />
//           </div>
//           <p className='text-xs md:text-sm text-center'>Apply to jobs  </p>
//         </div>
//         <div className='p-4 flex flex-col justify-center items-center space-y-2'>
//           <div className='bg-[#B21651] h-[70px] w-[70px] rounded-full flex justify-center items-center'>
//             <MdMoneyOff color='white' size={40} />
//           </div>
//           <p className='text-xs md:text-sm text-center'>Never have to pay .</p>
//         </div>
//         <div className='p-4  flex flex-col justify-center items-center space-y-2'>
//           <div className='bg-[#B21651] h-[70px] w-[70px] rounded-full flex justify-center items-center'>
//             <IoPersonSharp color='white' size={40} />
//           </div>
//           <p className='text-xs md:text-sm text-center'>Posted by  verified recruiters. </p>
//         </div>
//         <div className='p-4  flex flex-col justify-center items-center space-y-2'>
//           <div className='bg-[#B21651] h-[70px] w-[70px] rounded-full flex justify-center items-center'>
//             <HiDocumentText color='white' size={40} />
//           </div>
//           <p className='text-xs md:text-sm text-center'>Create & share your online portfolio.</p>
//         </div>
//         <div className='p-4  flex flex-col justify-center items-center space-y-2'>
//           <div className='bg-[#B21651] h-[70px] w-[70px] rounded-full flex justify-center items-center'>
//             <BsFillBellFill color='white' size={40} />
//           </div>
//           <p className='text-xs md:text-sm text-center'>Get instant job notifications. </p>
//         </div>
//         <div className='p-4  flex flex-col justify-center items-center space-y-2'>
//           <div className='bg-[#B21651] h-[70px] w-[70px] rounded-full flex justify-center items-center'>
//             <GiTrophy color='white' size={40} />
//           </div>
//           <p className='text-xs md:text-sm text-center'>Participate in online auditions & talent-contests</p>
//         </div>

//       </div>
//       <div className='uppercase p-4 m-3 text-2xl bg-[#B21651] text-white font-semibold flex justify-between rounded-lg '>
//        <p>Get Ready for a career full of fame and money</p>
//        <button className='px-7 py-1 bg-white rounded-3xl text-[#b21651] text-lg hover:scale-105 duration-200'>SUBSCRIBE</button>
//       </div>

//     </>
//   )
// }

// export default Member


import React from 'react';
import { MdMoneyOff } from 'react-icons/md';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { IoPersonSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillBellFill } from 'react-icons/bs';
import { GiTrophy } from 'react-icons/gi';

const Member = () => {
  const elements = [
    { icon: <BiSolidShoppingBags color='white' size={40} />, text: 'Apply to jobs' },
    { icon: <MdMoneyOff color='white' size={40} />, text: 'Never have to pay' },
    { icon: <IoPersonSharp color='white' size={40} />, text: 'Posted by verified recruiters' },
    { icon: <HiDocumentText color='white' size={40} />, text: 'Create & share your online portfolio' },
    { icon: <BsFillBellFill color='white' size={40} />, text: 'Get instant job notifications' },
    { icon: <GiTrophy color='white' size={40} />, text: 'Participate in online auditions & talent contests' },
  ];

  const radius = 120; // Adjust this to change the circle's radius
  const angleIncrement = (2 * Math.PI) / elements.length;

  return (
    <>
      <p className='uppercase text-2xl font-bold text-center py-6'>why become a member ?</p>
      <div className='grid grid-cols-3 md:grid-cols-6 justify-center items-center '>
        {elements.map((element, index) => (
          <div
            key={index}
            className='h-[130px]  flex flex-col justify-center items-center  f'
            // style={{
            //   left: `${50 + radius * Math.cos(index * angleIncrement)}%`,
            //   top: `${50 + radius * Math.sin(index * angleIncrement)}%`,
            // }}
          >
            <div className='bg-[#B21651] h-[70px] w-[70px] rounded-full flex justify-center items-center '>
              {element.icon}
            </div>
            <p className='text-xs md:text-sm text-center'>{element.text}</p>
          </div>
        ))}
      </div>
      <div className='uppercase p-4 m-3 bg-[#B21651] text-white font-semibold flex  flex-col md:flex-row justify-between items-center rounded-lg '>
        <p className='text-sm md:text-2xl max-md:text-center'>Get Ready for a career full of fame and money</p>
        <button className=' text-sm md:text-lg px-5  md:px-7 md:py-1 bg-white rounded-3xl text-[#b21651] hover:scale-105 duration-200'>
          SUBSCRIBE
        </button>
      </div>
    </>
  );
};

export default Member;
