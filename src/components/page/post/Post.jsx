import React, { useState } from 'react';
import Axios from 'axios';
import Logo from "../../assets/Logo.svg";

function Post() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [imageType, setImageType] = useState('');
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };

    const handleTypeChange = (event) => {
        setImageType(event.target.value);
    };

    const handleFileUpload = async () => {
        if (!selectedFile || !imageType) {
            setMessage('Please select a file and an image type.');
            return;
        }

        const formData = new FormData();
        formData.append('postimg', selectedFile);
        formData.append('imageType', imageType);

        try {
            const response = await Axios.post('https://portfolio-backend-7262.onrender.com/api/uploadimage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 201) {
                setMessage('File uploaded and saved successfully.');
            } else {
                setMessage('File upload failed.');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('An error occurred during file upload.');
        }
    };

    return (
        <div className='w-full h-screen'>
            <nav className="w-full h-[10%] p-1 md:p-[10px] flex items-center justify-between md:flex-wrap">
                <div className="flex items-center gap-2 ml-3">
                    <img className="md:w-[50px] md:h-[50px] h-[30px] w-[30px]" src={Logo} alt="Logo" />
                    <span className="md:text-[22px] text-[16px] font-[500] poppins">Login</span>
                </div>
            </nav>
            <section>
                <div className='w-full h-[500px] bg-[#FDDC87] flex justify-between items-center'>
                    <div className='w-[50%] h-full flex flex-col justify-center gap-5 items-center'>
                        <h1 className='font-bold text-[35px]'>
                            Upload Post
                        </h1>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            <input type='file' onChange={handleFileChange} />
                            <select value={imageType} onChange={handleTypeChange} className='w-[250px] h-[50px] pl-[15px] outline-none'>
                                <option value="">Select Image Type</option>
                                <option value="portfolio">Portfolio</option>
                                <option value="teams">Teams</option>
                            </select>
                            <div className='flex justify-center items-center'>
                                <button 
                                    className='bg-[#002D49] text-white text-[16px] font-bold w-[250px] h-[60px]'
                                    onClick={handleFileUpload}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                        {message && <p className='text-[#002D49] font-semibold'>{message}</p>}
                    </div>
                    <div className='w-[50%] h-full flex justify-center items-center'>
                        {preview && <img src={preview} alt="Preview" className='max-h-full max-w-full' />}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Post;
