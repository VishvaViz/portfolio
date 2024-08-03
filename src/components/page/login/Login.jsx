import React, { useState } from 'react';
import Logo from "../../assets/Logo.svg";
import Axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await Axios.post('https://portfolio-backend-7262.onrender.com/api/login', { email, password });
            if (response.data.success) {
                // Handle successful login (e.g., redirect to another page, save token, etc.)
                console.log('Login successful');
                navigate('/post')

            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.log('error',error)
            setError('An error occurred during login. Please try again.');
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
                <div className='w-full h-[500px] bg-[#FDDC87] flex justify-center items-center'>
                    <div className='w-[50%] h-full flex flex-col justify-center gap-5 items-center'>
                        <h1 className='font-bold text-[35px]'>
                            Login
                        </h1>
                        <div className='flex flex-col gap-8'>
                            <input
                                type="email"
                                className='w-[300px] h-[50px] pl-[15px] outline-none'
                                placeholder='Enter the email'
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <input
                                type="password"
                                className='w-[300px] h-[50px] pl-[15px] outline-none'
                                placeholder='Enter the password'
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <div className='flex flex-col justify-center items-center'>
                            {error && <div className='text-red-500 text-[14px]'>{error}</div>}
                                <button
                                    className='bg-[#002D49] text-white text-[16px] font-bold w-[250px] h-[60px]'
                                    onClick={handleLogin}
                                >
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
