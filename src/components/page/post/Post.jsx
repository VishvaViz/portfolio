import React, { useState } from 'react';
import Logo from "../../assets/Logo.svg";

function Post() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

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

    return (
        <div className='w-full h-screen'>
            <nav className="w-full h-[10%] p-1 md-p-[10px] flex items-center justify-between md:flex-wrap">
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
                            <input className='' type='file' onChange={handleFileChange} />
                            <div className='flex justify-center items-center'>
                                <button className='bg-[#002D49] text-white text-[16px] font-bold w-[250px] h-[60px]'>
                                    Save
                                </button>
                            </div>
                        </div>
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
