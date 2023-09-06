import React from 'react'

const SignUp = () => {
  return (
    <>


      <div className="main-container h-full w-screen sm:flex p-10">
        <div className="img sm:w-[45%] relative sm:h-[500px]">

          <img src='https://images.unsplash.com/photo-1618609377864-68609b857e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80' className='object-cover rounded-3xl w-full h-[250px] sm:h-full ' alt="shivanifilms" />
        </div>
        <div className="signup sm:w-[55%] h-full ">
          <form action="https://getform.io/f/f60ad434-55c8-4fab-84b1-a1003999d218" method='post'>
            <div className="contact-page w-[90%] h-full flex flex-col gap-2 mt-5 justify-center items-center sm:items-start  mx-auto before:content-[''] after:content-[''] sm:pl-16 bg-white">
              <h1 className='text-xl md:text-3xl sm:text-2xl text-[#b21651] pt-2 font-bold pb-2'>REGISTER YOURSELF</h1>
              <label htmlFor="myname" className='text-base sm:text-xl font-medium py-2'>Enter your name</label>
              <input type="text" placeholder='enter your name' id='myname' name='myname' className='w-[70%] border border-black p-1 rounded-md text-base capitalize focus:border-2 outline-none'  required/>
              <label htmlFor="myemail" className='text-base sm:text-xl font-medium py-2'>Enter your email</label>
              <input type="text" placeholder='enter your email' id='myemail' name='myemail' className='w-[70%] border border-black p-1 rounded-md text-base capitalize focus:border-2 outline-none'  required/>
              <label htmlFor="myphone" className='text-base sm:text-xl font-medium py-2'>Enter your phone number</label>
              <input type="text" placeholder='Phone number' id='myphone' name='myphone' className='w-[70%] border border-black p-1 rounded-md text-base capitalize focus:border-2 outline-none' required />
              <label htmlFor="employee" className='text-base sm:text-xl font-medium py-2'>Are you an employer or artist?</label>

                                    <div className="options flex gap-4">
                                        <span className='flex justify-center items-center gap-4'>
                                            <input type="radio" value='Artist' name='designation' id='myArtist' className=''  />
                                            <label htmlFor="myArtist">Artist</label><br />
                                        </span>
                                        <span className='flex justify-center items-center  gap-4'>
                                            <input type="radio" value='Employer' name='designation' id='myEmployee' className='' />
                                            <label htmlFor="myEmployee">Employer</label>
                                        </span>
                                    </div>
                  <button type="submit" className='max-sm:self-center my-5 w-[120px] h-[38px] rounded-md px-[5px]  bg-white text-[#b21651] border-2 border-[#b21651] hover:scale-110 hover:bg-[#b21651] hover:text-white duration-200 text-xl font-bold'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp