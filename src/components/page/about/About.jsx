import React from 'react'
import Logo from '../../assets/Logo.svg'
import WorkSpace from '../../assets/Workplace culture.svg'
import SemiCircl from '../../assets/semicricl.svg'
import img7 from "../../assets/service-footer1.svg";
import img8 from "../../assets/service-footer2.svg";
import Hil from '../../assets/Hil.svg'
import Rasi from '../../assets/rasi.svg'
import Snack from '../../assets/snack.svg'
import Circle from './Circle'
import bg from '../../assets/about-footer-bg.svg'
import x from '../../assets/about-footer-left.svg'
import y from '../../assets/service-footer1.svg'
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
                        <Circle text={'ClientsCentric Approach'} deg={180} deg1={150} />
                        <Circle text={'Innovative Solution'} deg={150} deg1={140} />
                        <Circle text={'CommitmentTo Quality'} deg={180} deg1={180} />
                    </div>
                </div>
                <div className='bg-custom-gradient'>
                    <div className="  flex w-full h-[200px]">
                        <div className="w-[70%] ">
                            <img src={img7} alt="" />
                        </div>
                        <div className="w-[30%] ">
                            <img src={img8} alt="" />
                        </div>
                    </div>

                </div>
                <div className='space-y-3'>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-[#FBB90F] text-[25px] font-[700]'>Hood <span className='text-black text-[25px] font-[700]'>Trusted By</span></h1>

                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center'>
                            <div className='h-[200px] w-[200px] rounded-[50%] bg-white shadow flex justify-center items-center'>
                                <img className='h-[130px] w-[120px]' src={Hil} />
                            </div>
                            <span className='text-[#757575] text-[20px]'>
                                Hilux Pharma
                            </span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='h-[200px] w-[200px] rounded-[50%] bg-white shadow flex justify-center items-center'>
                                <img className='h-[130px] w-[120px]' src={Rasi} />
                            </div>
                            <span className='text-[#757575] text-[20px]'>
                                Rasi Finance
                            </span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='h-[200px] w-[200px] rounded-[50%] bg-white shadow flex justify-center items-center'>
                                <img className='h-[130px] w-[120px]' src={Snack} />

                            </div>
                            <span className='text-[#757575] text-[20px]'>
                                Snacko
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center'>
                            <div className='h-[200px] w-[200px] rounded-[50%] bg-white shadow flex justify-center items-center'>
                                <img className='h-[130px] w-[120px]' src={Hil} />
                            </div>
                            <span className='text-[#757575] text-[20px]'>
                                Hilux Pharma
                            </span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='h-[200px] w-[200px] rounded-[50%] bg-white shadow flex justify-center items-center'>
                                <img className='h-[130px] w-[120px]' src={Rasi} />
                            </div>
                            <span className='text-[#757575] text-[20px]'>
                                Rasi Finance
                            </span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='h-[200px] w-[200px] rounded-[50%] bg-white shadow flex justify-center items-center'>
                                <img className='h-[130px] w-[120px]' src={Snack} />

                            </div>
                            <span className='text-[#757575] text-[20px]'>
                                Snacko
                            </span>
                        </div>
                    </div>
                </div>



                <div className=' my-10 relative'>

                    <div className=' text-center '>

                        <div className='text-center'>
                            <span className='text-[#FBB90F] font-[700] text-[29px] leading-[42px]'>Our </span>
                            <span className='text-[#000000] font-[700] text-[29px] leading-[42px]'>Commitment</span>
                        </div>
                        <div className="w-[90%] ml-20">
                        <p className="text-[#6c6c6c] mt-5  text-[20px] font-bold leading-[44px] w-[100%] px-14  flex justify-center items-center">
                            At Designshood, our passion lies in sharing knowledge and delivering excellence. We are dedicated to transferring our
                            expertise to others through comprehensive training programs and ensuring that every project we undertake
                            is completed on time with the highest quality standards. Your success is our mission, and we
                            strive to exceed expectations with every design and development endeavor.
                        </p>
                        </div>

                        <div className=' z-[9000] absolute right-0 top-0'>
                            <img className='rotate-180 h-[500px] ' src={SemiCircl} alt="" />
                        </div>
                        <div className="flex justify-between">
                            <img src={x} alt="" />
                            <img className='rotate-[]' src={y} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About