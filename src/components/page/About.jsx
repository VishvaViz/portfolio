import React from 'react'
import Logo from '../assets/Logo.svg'

function About() {
    return (
        <div>
            <div className='w-full h-screen'>
                <div className='w-full h-[10%] bg-slate-300 flex items-center justify-between  '>

                    <div className='flex items-center gap-2'>
                        <img className='w-[50px] h-[50px]' src={Logo} alt="" />
                        <span className='text-[20px] font-[400]'>
                            About us
                        </span>
                    </div>
                    <div className='space-x-3 mr-[20px]'>
                        <span className='w-[113px] h-[30px] '>
                            Contact Us
                        </span>
                        <span className='w-[106px] h-[34px] rounded-[30px] border border-black p-[5px]'>
                            Home
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About