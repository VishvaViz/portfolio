import React from "react";
import Logo from "../../assets/Logo.svg";
import content from "../../assets/contacts-content.svg";
import img1 from "../../assets/contact-img1.svg";
import logo1 from "../../assets/contact-mob.svg";
import logo2 from "../../assets/contact-mail.svg";
import logo3 from "../../assets/contact-location.svg";
import footer from '../../assets/contact-footer.svg'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      <div className="">
        <nav className="w-full h-[10%] p-1 md-p-[10px] flex items-center justify-between md:flex-wrap    ">
          <div className="flex items-center gap-2 ml-3">
            <img className="md:w-[50px] md:h-[50px] h-[30px] w-[30px]" src={Logo} alt="" />
            <span className="md:text-[22px] text-[16px] font-[500] poppins">Contacts</span>
          </div>
          <div className="flex justify-between  w-[130px] md:w-[250px] items-center mr-1 md:mr-[20px]">
            <Link to='/contact' className="md:w-[113px] md:h-[30px] font-[500] w-[80px] text-[12px] md:text-[20px] poppins cursor-pointer ">
              Contact Us
            </Link>
            <Link to='/' className="md:w-[100px] w-[50px] flex font-[500] justify-center cursor-pointer md:text-[20px] items-center md:h-[34px] h-[20px] md:rounded-[30px] rounded-[20px] md:border-[1.23px] border-[1px] text-[12px] border-black p-[2px] md:p-[5px] poppins">
              Home
            </Link>
          </div>
        </nav>

        <section className="mt-2 md:mt-[10px]">
          <div className="">
            <div className="flex flex-col justify-center items-center">
              <img src={content} alt="" />
            </div>
            <div className="flex items-center justify-center h-[300px] md:h-[550px] w-full ">
              <img className="md:h-[550px] md:w-[550px] h-[300px] w-[300px]" src={img1} alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex justify-center ">
              <p className="w-[80%] text-[#6c6c6c] text-[22px] leading-10 text-center">
                Let's connect! Whether you're looking to collaborate, need a
                quote, or simply want more information about our services, we're
                here to help.
              </p>
            </div>
            <div className="flex h-[300px] justify-around mt-2 md:mt-10 w-[100%]  ">
              <div className=" border-[1px] md:h-[100%] h-auto  rounded-[10px] border-[#000000]  w-[280px] flex flex-col items-center p-[10px] justify-around">
                <img className="h-80%" src={logo1} alt="" />
                <span className=" text-[18px] md:text-[30px] font-bold ">888 983 8267</span>
              </div>
              <div className=" border-[1px] rounded-[10px] border-black md:h-[100%] h-auto w-[280px] flex items-start pt-[20px] justify-center">
                <img className="h-80%" src={logo2} alt="" />
              </div>
              <div className=" border-[1px] rounded-[10px] border-black md:h-[100%] h-auto w-[280px] flex items-start pt-[20px] justify-center">
                <img className="h-80%" src={logo3} alt="" />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-2 md:mt-10">
            <img className="w-[70%] h-[200px]" src={footer} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
