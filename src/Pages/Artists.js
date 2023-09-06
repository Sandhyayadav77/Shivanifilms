// import React from 'react'
// import artist from '../images/artists.jpg'

// const Artists = () => {
//     return (
//         <>
//             <div className="main-artists h-fit w-screen bg-gradient-to-b from-purple-800 to-fuchsia-60 pt-[120px]">
//                 <div className="inner-main-artist h-full lg:flex lg:pt-8 lg:items-start lg:justify-center">
//                     <div className="img lg:w-[40%] lg:h-fit ">
//                         <h1 className='text-[3rem] md:text-[5rem] lg:hidden text-white text-center pb-7'>Artists</h1>
//                         <img src={artist} className='relative  object-cover p-4 rounded-full' alt="sivanifilms" />
//                     </div>
//                     <div className="contact w-full lg:h-fit  max-sm:sm:bg-gradient-to-t from-fuchsia-700 to-fuchsia-60">
//                         <div className="signup lg:w-[95%] mx-auto w-full  ">
//                             <form action="https://getform.io/f/f60ad434-55c8-4fab-84b1-a1003999d218" method='post'>
//                                 <div className="contact-page w-[90%] h-fit flex flex-col mt-10 justify-center items-center sm:items-start  mx-auto rounded-lg shadow-lg shadow-gray-300 before:content-[''] after:content-[''] sm:pl-16 pb-10 bg-white">
//                                     <h1 className='text-xl sm:text-3xl text-[#b21651]  pt-10 font-bold pb-2'>Get in touch</h1>
//                                     <label htmlFor="myname" className='text-base sm:text-xl font-medium py-2'>Enter your name</label>
//                                     <input type="text" placeholder='enter your name' id='myname' className='w-[70%] border border-black p-1 rounded-md text-base capitalize focus:border-2 outline-none' required />
//                                     <label htmlFor="myemail" className='text-base sm:text-xl font-medium py-2'>Enter your email</label>
//                                     <input type="text" placeholder='enter your email' id='myemail' className='w-[70%] border border-black p-1 rounded-md text-base capitalize focus:border-2 outline-none' required/>
//                                     <label htmlFor="myphone" className='text-base sm:text-xl font-medium py-2'>Enter your phone number</label>
//                                     <input type="text" placeholder='Phone number' id='myphone' className='w-[70%] border border-black p-1 rounded-md text-base capitalize focus:border-2 outline-none' required />
//                                     <label htmlFor="employee" className='text-base sm:text-xl font-medium py-2'>Are you an employer or artist?</label>

//                                     <div className="options flex gap-4">
//                                         <span className='flex justify-center items-center gap-4'>
//                                             <input type="radio" value='Artist' name='designation' id='myArtist' className=''  />
//                                             <label htmlFor="myArtist">Artist</label><br />
//                                         </span>
//                                         <span className='flex justify-center items-center  gap-4'>
//                                             <input type="radio" value='Employer' name='designation' id='myEmployee' className='' />
//                                             <label htmlFor="myEmployee">Employer</label>
//                                         </span>
//                                     </div>

//                                     <button type="submit" className='max-sm:self-center my-5 w-[120px] h-[38px] rounded-md px-[5px]  bg-white text-[#b21651] border-2 border-[#b21651] hover:scale-110 hover:bg-[#b21651] hover:text-white duration-200 text-xl font-bold'>Submit</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Artists



import React , {useState} from 'react'
import { BookingCard } from '../BookingCard'
import Preview from '../components/Preview'
import { Link } from 'react-router-dom';
import axios from 'axios'

const ArtistsOptions = ["Actor", "Singer", "Musician", "Writer", "Dancer", "Voice-over Artist", "Filmmaker", "Start-up Comedian", "Stylist", "Photographer", "Model"]
let state = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]
   
    
const Artists = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [mediaFiles, setMediaFiles] = useState([]);

     // State for displaying preview
     const [preview, setPreview] = useState(null);
     const handleFileChange = (e) => {
        const files = e.target.files;
        setMediaFiles(Array.from(files));
     }

      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Perform form submission to backend here
        
        // Display preview
        displayPreview(name, age, phone, mediaFiles);
         // Prepare data to send to backend
         const formData = new FormData();
         formData.append('name', name);
         formData.append('age', age);
         formData.append('phone', phone);
         mediaFiles.forEach((file) => {
             formData.append('mediaFiles', file);
         });
 
         // Make POST request to backend API to store data
         try {
             await axios.post('http://localhost:5000/api/upload', formData, {
                 headers: { 'Content-Type': 'multipart/form-data' }
             });
             console.log('Data stored in the backend');
         } catch (error) {
             console.error('Error storing data:', error);
         }
    };
    

    const displayPreview = (name, age, phone, mediaFiles) => {
        const previewComponent = (
            <Preview
                name={name}
                age={age}
                phone={phone}
                mediaFiles={mediaFiles}
            />
        );
        setPreview(previewComponent);
    };
    return (
        <>
            <div className="min-h-[1200px] pt-[122px] w-screen">
                {/* <div className="p-4 m-2 text-center rounded-md bg-gray-800 shadow-md shadow-pink-800 text-white text-3xl">
                    Choose Category
                </div>

                <div className="hire-artists flex space-x-4 justify-center items-center w-full h-[100px] bg-gray-800 my-4">


                    <div className='flex justify-center items-center flex-col'>
                        <label htmlFor="states" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a State</label>
                        <select id="states" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option defaultValue={state[0]}>Select City</option>

                            {
                                state.map((state, index) => <option key={index} value={state}>{state}</option>)
                            }
                        </select>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <label htmlFor="artists" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Category</label>
                        <select id="artists" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option defaultValue={ArtistsOptions[0]}>Choose Category</option>
                            {
                                ArtistsOptions.map((artist, index) => <option key={index} value={artist}>{artist}</option>)
                            }
                        </select>

                    </div>
                    
                </div>
                <div className="cards sm:grid-cols-2 md:grid lg:grid-cols-3  w-screen m-auto">
                    <BookingCard />
                    <BookingCard />
                    <BookingCard />
                    <BookingCard />
                    <BookingCard />
                    <BookingCard />
                </div>
               */}

               <h1>Upload Your Media and Information</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                <input type="tel" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                <input type="file" accept="audio/*,video/*" multiple onChange={handleFileChange} />
                <button type="submit">Upload</button>
                <li>
                    <Link to="/display">Display Files</Link>
                </li>
            </form>
            {preview}
        </div>
              

        </>
    )
}

export default Artists