import React from "react";


const Circle = ({ text, deg, deg1 }) => {
    return (
        <div className='relative flex  items-center justify-around'>
            <span className={`rotate-[${deg}deg]`}>
                <svg width="200" height="200" viewBox="0 0 251 251" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M0.718883 125.439C0.71888 155.797 11.7668 185.118 31.8002 207.928C51.8336 230.737 79.4832 245.476 109.587 249.394C139.692 253.312 170.193 246.14 195.397 229.218C220.601 212.296 238.785 186.779 246.555 157.433C254.325 128.086 251.15 96.9142 237.622 69.737C224.094 42.5598 201.137 21.2345 173.039 9.74224C144.94 -1.75002 113.619 -2.62385 84.9234 7.28391C56.2277 17.1917 32.1182 37.2038 17.0959 63.5845L37.121 74.9877C49.3739 53.4704 69.0387 37.1476 92.4442 29.0664C115.85 20.9852 141.396 21.6979 164.315 31.0715C187.234 40.4452 205.958 57.839 216.992 80.0059C228.026 102.173 230.616 127.598 224.279 151.535C217.941 175.471 203.109 196.283 182.551 210.086C161.994 223.889 137.116 229.738 112.561 226.543C88.007 223.347 65.4547 211.325 49.1145 192.72C32.7744 174.116 23.7632 150.201 23.7632 125.439L0.718883 125.439Z" fill="#FBB90F" />
                </svg>
            </span>
            <span className={`absolute rotate-[${deg1}deg] top-0 bottom-0 right-0 left-0 flex items-center justify-center`}>
                <svg width="155" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="94.7189" cy="95.4397" r="94.0667" fill="white" stroke="url(#paint0_linear_620_2873)" />
                    <defs>
                        <linearGradient id="paint0_linear_620_2873" x1="94.7189" y1="0.873047" x2="94.7189" y2="190.006" gradientUnits="userSpaceOnUse">
                            <stop />
                            <stop offset="1" stopColor="#666666" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>
            <span className='absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-[500] text-[20px]'>
                <div className='text-center'>
                    {text?.split(' ')?.[0]}<br />
                    {text?.split(' ')?.[1]}
                </div>
            </span>
        </div>
    );
};

export default Circle;
