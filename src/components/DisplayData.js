// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DisplayData = () => {
//     const [artistsData, setArtistsData] = useState([]);

//     useEffect(() => {
//         fetchArtistsData();
//     }, []);

//     const fetchArtistsData = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/getAllArtistsData');
//             setArtistsData(response.data);
//         } catch (error) {
//             console.error('Error fetching artists data:', error);
//         }
//     };

//     return (
//         // <div className='pt-[222px]'>
//         //     <h2>All Artists' Data</h2>
//         //     <ul>
//         //         {artistsData.map((artist, index) => (
//         //             <li key={index}>
//         //                 <p>Name: {artist.name}</p>
//         //                 <p>Age: {artist.age}</p>
//         //                 <p>Phone: {artist.phone}</p>
//         //                 <p>Files:</p>
//         //                 <ul>
//         //                     {artist.files.map((file, fileIndex) => (
//         //                         <li key={fileIndex}>{file}</li>
//         //                     ))}
//         //                 </ul>
//         //             </li>
//         //         ))}
//         //     </ul>
//         // </div>
//         <div className='pt-[222px]'>
//             <h2>All Artists' Data</h2>
//             <ul>
//                 {artistsData.map((artist, index) => (
//                     <li key={index}>
//                         <p>Name: {artist.name}</p>
//                         <p>Age: {artist.age}</p>
//                         <p>Phone: {artist.phone}</p>
//                         <p>Files:</p>
//                         <ul>
//                             {artist.files.map((file, fileIndex) => (
//                                 <li key={fileIndex}>
//                                     <a
//                                         href={`http://localhost:5000/uploads/${artist.name}/${file}`}
//                                         target='_blank'
//                                         rel='noopener noreferrer'
//                                     >
//                                         {file}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default DisplayData;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayData = () => {
    const [artistsData, setArtistsData] = useState([]);

    useEffect(() => {
        fetchArtistsData();
    }, []);

    const fetchArtistsData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/getAllArtistsData');
            setArtistsData(response.data);
        } catch (error) {
            console.error('Error fetching artists data:', error);
        }
    };

    return (
        <div className='pt-[222px]'>
            <h2>All Artists' Data</h2>
            <ul>
                {artistsData.map((artist, index) => (
                    <li key={index}>
                        <p>Name: {artist.name}</p>
                        <p>Age: {artist.age}</p>
                        <p>Phone: {artist.phone}</p>
                        <p>Files:</p>
                        <ul>
                            {artist.files.map((file, fileIndex) => (
                                <li key={fileIndex}>
                                    <a
                                        href={`http://localhost:5000/uploads/${artist.name}/${file}`}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Download {file}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayData;
