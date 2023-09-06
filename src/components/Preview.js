// Preview.js

import React from 'react';

const Preview = ({ name, age, phone, mediaFiles }) => {
    return (
        <div>
            <h2>Uploaded Preview:</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Phone: {phone}</p>
            {mediaFiles.map((file, index) => (
                <div key={index}>
                    {file.type.includes('audio') ? (
                        <audio controls src={URL.createObjectURL(file)} />
                    ) : (
                        <video controls src={URL.createObjectURL(file)} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Preview;
