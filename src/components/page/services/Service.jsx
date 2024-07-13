import React from "react";
import Logo from "../../assets/Logo.svg";
import img1 from "../../assets/service-img1.svg";
import content from "../../assets/sec-1-content.svg";
import Circle from "../about/Circle";
import img2 from "../../assets/service-img2.svg";
import img3 from "../../assets/service-img3.svg";
import img4 from "../../assets/service-img4.svg";
import img5 from "../../assets/service-img5.svg";
import img6 from "../../assets/service-img6.svg";
import img7 from "../../assets/service-footer1.svg";
import img8 from "../../assets/service-footer2.svg";


function Service() {
  return (
    <>
      <div className="">

        {/* ***************************************************SERVICES HEADER************************************** */}

        <div className="w-full h-[10%] p-[5px] flex items-center justify-between flex-wrap   ">
          <div className="flex items-center gap-2 ml-3">
            <img className="w-[50px] h-[50px]" src={Logo} alt="" />
            <span className="text-[20px] font-[500] poppins">Services</span>
          </div>
          <div className="flex justify-between items-center  mr-[20px]">
            <span className="w-[113px] h-[30px] poppins ">Contact Us</span>
            <span className="w-[100px] flex justify-center items-center h-[34px] rounded-[30px] border-[1.23px] border-black p-[5px] poppins">
              Home
            </span>
          </div>
        </div>
        <div className="section-1 h-[570px] flex w-full items-center px-24 ">
          <div className="w-[525px] h-[545px] ">
            <img src={img1} alt="" />
          </div>
          <div className="w-[575px] h-[240px] ">
            <img src={content} alt="" />
          </div>
        </div>

        {/* *********************************************SERVICES CIRCLE****************************************************** */}

        <div className=" space-y-[60px]">
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <span className="jost text-[25px] font-[600]">
                Hood{" "}
                <span className="jost text-[25px] font-[600] text-[#FBB90F]">
                  Services
                </span>
              </span>
            </div>
            <div className="w-[90%]">
              <p className="text-[20px] text-[#6C6C6C] font-[400] text-center leading-[40px]">
                At Designshood, our services encompass a comprehensive range of
                offerings tailored to meet the diverse needs of our clients.
                From design and development to branding and strategic
                consultation, each service is meticulously crafted to deliver
                specific outcomes that enhance our clients' businesses. Our
                commitment to excellence and innovation ensures that every
                project we undertake adds substantial value to our clients'
                objectives.
                <br />
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap items-center justify-evenly gap-10   w-[90%]">
              <Circle text={"UIUX Design"} deg={140} deg1={140} />
              <Circle text={"Development"} deg={180} deg1={150} />
              <Circle text={"Branding"} deg={150} deg1={140} />
              <Circle text={"Brand Strategy"} deg={180} deg1={180} />
              <Circle text={"Training"} deg={180} deg1={180} />
            </div>
          </div>
        </div>


        {/* ***************************************** SERVICES 1-5 ****************************************** */}

        <div className=" w-[90%] m-auto">

        <div className="sec-one flex h-[570px]  items-center">
          <div className="w-[660px] space-y-2 h-[415px] flex flex-col items-start justify-center ">
            <div className="">
               
              <span className="jost text-[33px] font-[600]">
              UIUX{" "}
                <span className="jost text-[33px] font-[600] text-[#FBB90F]">
                Design
                </span>
              </span>
            </div>
            <h3 className="text-[32px] text-[#252525]">Crafting Intuitive Experiences</h3>
            <div className="w-[100%]">
              <p className="text-[26px] text-[#6C6C6C] font-[400] text-start leading-[40px]">
              Our UI/UX design services focus on creating user interfaces that are not only visually appealing but also intuitive and engaging. We prioritize user experience to ensure that every interaction is seamless, enhancing user satisfaction and driving engagement with your brand.
                <br />
              </p>
            </div>
          </div>
          <div className=" ">
            <img src={img2} alt="" />
          </div>
        </div>


        {/* 4 diuv */}
        <div className="sec-2 flex flex-row-reverse h-[570px]  items-center gap-5">
          <div className="w-[660px] space-y-2 h-[415px] flex flex-col items-start justify-center ">
            <div className="">
               
              <span className="jost text-[33px] font-[600]">
              Develope
                <span className="jost text-[33px] font-[600] text-[#FBB90F]">
                ment
                </span>
              </span>
            </div>
            <h3 className="text-[32px] text-[#252525]">Building Seamless Digital Solutions</h3>
            <div className="w-[100%]">
              <p className="text-[26px] text-[#6C6C6C] font-[400] text-start leading-[40px]">
              We specialize in developing robust web and mobile applications that are tailored to meet your specific needs. Our development process is meticulous, ensuring that every solution we build is seamless, scalable, and high-performing, providing a flawless user experience.                <br />
              </p>
            </div>
          </div>
          <div className=" h-[450px] w-[450px]">
            <img src={img3} alt="" />
          </div>
        </div>

        <div className=" sec-3 flex h-[570px]  items-center">
          <div className="w-[660px] space-y-2 h-[415px] flex flex-col items-start justify-center ">
            <div className="">
               
              <span className="jost text-[33px] font-[600]">
              Bran
                <span className="jost text-[33px] font-[600] text-[#FBB90F]">
                ding
                </span>
              </span>
            </div>
            <h3 className="text-[32px] text-[#252525]">Creating Distinctive Brand Identities</h3>
            <div className="w-[100%]">
              <p className="text-[26px] text-[#6C6C6C] font-[400] text-start leading-[40px]">
              At Designshood, we help you establish a unique brand identity that stands out in the market. From logo design to comprehensive branding strategies, we craft memorable and impactful brand visuals and messaging that resonate with your audience.                <br />
              </p>
            </div>
          </div>
          <div className=" h-[500px] w-[500px]">
            <img src={img4} alt="" />
          </div>
        </div>

        <div className="sec-4 flex flex-row-reverse h-[570px] gap-5  items-center">
          <div className="w-[660px] space-y-2 h-[415px] flex flex-col items-start justify-center ">
            <div className="">
               
              <span className="jost text-[33px] font-[600]">
              Brand{" "}
                <span className="jost text-[33px] font-[600] text-[#FBB90F]">
                Strategy
                </span>
              </span>
            </div>
            <h3 className="text-[32px] text-[#252525]">Guiding Strategic Growth</h3>
            <div className="w-[100%]">
              <p className="text-[26px] text-[#6C6C6C] font-[400] text-start leading-[40px]">
              Guiding your brand’s growth with strategic insights and tailored planning. We conduct thorough market research and analysis to develop strategies that position your brand effectively, differentiate it from competitors, and drive long-term success                <br />
              </p>
            </div>
          </div>
          <div className=" h-[450px] w-[450px]">
            <img src={img5} alt="" />
          </div>
        </div>

        <div className="sec-5 flex h-[570px] items-center">
          <div className="w-[660px] space-y-2 h-[415px] flex flex-col items-start justify-center ">
            <div className="">
               
              <span className="jost text-[33px] font-[600]">
              Trai
                <span className="jost text-[33px] font-[600] text-[#FBB90F]">
                ning
                </span>
              </span>
            </div>
            <h3 className="text-[32px] text-[#252525]">Empowering Creative Minds</h3>
            <div className="w-[100%]">
              <p className="text-[26px] text-[#6C6C6C] font-[400] text-start leading-[40px]">
              Our training programs are designed to equip aspiring designers and developers with the skills they need to thrive. Led by industry experts, our courses cover UI/UX design, branding strategies, and development techniques, fostering creativity and professional growth                <br />
              </p>
            </div>
          </div>
          <div className=" h-[500px] w-[500px]">
            <img src={img6} alt="" />
          </div>
        </div>
        </div>

        {/* ***************************************************services footer****************************************** */}
        <div className=" mt-[100px] flex w-full h-[200px]">
            <div className="w-[70%] ">
                 <img src={img7} alt="" />
            </div>
            <div className="w-[30%] ">
                  <img src={img8} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Service;
