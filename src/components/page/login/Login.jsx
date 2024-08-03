import React from 'react'
import Logo from "../../assets/Logo.svg";



function Login() {
    return (
        <div className='w-full h-screen'>
            <nav className="w-full h-[10%] p-1 md-p-[10px] flex items-center justify-between md:flex-wrap    ">
                <div className="flex items-center gap-2 ml-3">
                    <img className="md:w-[50px] md:h-[50px] h-[30px] w-[30px]" src={Logo} alt="" />
                    <span className="md:text-[22px] text-[16px] font-[500] poppins">Login</span>
                </div>
            </nav>
            <section>
                <div className='w-full h-[500px] bg-[#FDDC87] flex justify-center items-center'>
                    <div className='w-[50%] h-full flex flex-col justify-center gap-5  items-center'>
                        <h1 className='font-bold text-[35px]'>
                            Login
                        </h1>
                        <div className='flex flex-col gap-8'>
                            <input className='w-[300px] h-[50px] placeholder: pl-[15px] outline-none' placeholder='Enter the email' />
                            <input className='w-[300px] h-[50px] placeholder: pl-[15px] outline-none' placeholder='Enter the password' />
                            <div className='flex justify-center items-center'>
                                <button className='bg-[#002D49] text-white text-[16px] font-bold w-[250px] h-[60px]'>
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login