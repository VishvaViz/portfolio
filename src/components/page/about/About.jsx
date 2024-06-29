import React from 'react'
import Logo from '../../assets/Logo.svg'
import WorkSpace from '../../assets/Workplace culture.svg'
import SemiCircl from '../../assets/semicricl.svg'
import Circle from './Circle'
function About() {
    return (
        <div>
            <div className='w-full flex flex-col gap-6 '>
                <div className='w-full h-[10%] p-[5px] flex items-center justify-between flex-wrap   '>

                    <div className='flex items-center gap-2'>
                        <img className='w-[50px] h-[50px]' src={Logo} alt="" />
                        <span className='text-[20px] font-[500] poppins'>
                            About us
                        </span>
                    </div>
                    <div className='flex justify-between items-center  mr-[20px]'>
                        <span className='w-[113px] h-[30px] poppins '>
                            Contact Us
                        </span>
                        <span className='w-[100px] flex justify-center items-center h-[34px] rounded-[30px] border-[1.23px] border-black p-[5px] poppins'>
                            Home
                        </span>
                    </div>
                </div>

                <div className='flex justify-around items-center '>
                    <div className=''>
                        <img className='' src={SemiCircl} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='jost font-[500] md:text-[50px] lg:text-[60px] '>
                            Crafting Tomorrow's
                        </span>
                        <span className='jost font-[500] md:text-[50px] lg:text-[60px]  text-[#FBB90F]'>
                            Design, Today
                        </span>
                    </div>
                    <div>
                        <img className='lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px]' src={WorkSpace} alt="" />
                    </div>
                </div>
                <div className=' space-y-[60px]'>

                    <div className='flex flex-col justify-center items-center'>
                        <span className='jost text-[25px] font-[600]'>
                            About <span className='jost text-[25px] font-[600] text-[#FBB90F]'>Hood</span>
                        </span>
                        <p className='text-[20px] text-[#6C6C6C] font-[400] text-center leading-[40px]'>
                            Welcome to Designshood, where creativity meets innovation. As pioneers in the design industry, we excel in<br />
                            UI/UX design, branding, and development, crafting compelling and  functional experiences. Our dedication goes beyond<br />
                            design we are committed to nurturing the next generation of designers through our specialized training programs,<br />
                            Join us in redefining the future of design and unlocking endless possibilities.<br />
                        </p>
                    </div>
                    <div className='flex justify-evenly h-[] w-full'>
                        <Circle text={'Creative Excellence'} deg={140} deg1={140} />
                        <Circle text={'Creative Excellence'} deg={180} deg1={150} />
                        <Circle text={'Creative Excellence'} deg={150} deg1={140} />
                        <Circle text={'Creative Excellence'} deg={180} deg1={180} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About