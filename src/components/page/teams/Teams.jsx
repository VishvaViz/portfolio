import React from 'react'
import Logo from "../../assets/Logo.svg";
import hood from '../../assets/hoodians.svg'
import object from '../../assets/objects.svg'
import img7 from "../../assets/service-footer1.svg";
import img8 from "../../assets/service-footer2.svg";
import { Link } from 'react-router-dom'
import Axios from 'axios'

function Teams() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        Axios.get('https://portfolio-backend-7262.onrender.com/api/getpost/teams')
            .then((resp) => setData(resp.data))
            .catch((err) => console.log(err))
    }, [])
    console.log('data', data)
    return (
        <div>
            <nav className="w-full h-[10%] p-1 md-p-[10px] flex items-center justify-between md:flex-wrap    ">
                <div className="flex items-center gap-2 ml-3">
                    <img className="md:w-[50px] md:h-[50px] h-[30px] w-[30px]" src={Logo} alt="" />
                    <span className="md:text-[22px] text-[16px] font-[500] poppins">Teams</span>
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
            <section className='flex flex-col justify-center items-center gap-10'>
                <div className='flex justify-center items-center'>
                    <img src={hood} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={object} alt="" />
                </div>
                <div className='w-[90%] flex flex-col gap-5'>

                    <div className='flex justify-center items-center  '>
                        <p className='text-center text-[20px] text-[#6C6C6C] leading-[43px] '>
                            At Designshood, our team is the heart and soul of our success. We are a collective of passionate, talented, and dedicated professionals, each bringing unique skills and perspectives to the table. Together, we drive innovation, creativity, and excellence in everything we do.
                        </p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        {
                            data.length > 0 ?
                                <>
                                    {
                                        data.map(({ _id, postfile }) => (
                                            <div className='w-full h-[600px] border border-black  rounded-[50px] flex justify-center items-center'>
                                                <img
                                                    key={_id}
                                                    src={`data:image/png;base64,${postfile}`}
                                                    alt="Portfolio Item"
                                                    className='w-full h-full rounded-[50px] '
                                                />
                                            </div>
                                        ))
                                    }
                                </>
                                :
                                <>
                                </>
                        }
                    </div>
                    <div className=" mt-[100px] flex w-full h-[200px]">
                        <div className="w-[70%] ">
                            <img src={img7} alt="" />
                        </div>
                        <div className="w-[30%] ">
                            <img src={img8} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Teams