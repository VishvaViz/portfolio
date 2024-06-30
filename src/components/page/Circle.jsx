import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const Circle = () => {
  const [size, setSize] = useState(710);
  const [transitionValue, setTransitionValue] = useState(355);

  const adjustCircle = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    //get 40% of width
    const width = screenWidth * 0.8
    const height = screenHeight * 0.8
    if (width > height) {
      setSize(height);
      setTransitionValue(height/2);
    } else {
      setSize(width);
      setTransitionValue(width / 2);
    }
  };

  useEffect(() => {
    adjustCircle();
    window.addEventListener('resize', adjustCircle);
    return () => window.removeEventListener('resize', adjustCircle);
  }, []);

  const move = keyframes`
  0% {
    transform: rotate(0deg) translate(-${transitionValue}px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(-${transitionValue}px) rotate(-360deg);
  }
}

  `;
  const Dot = styled.div`
    width: 20px;
    height: 20px;
    background: transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: ${move} 7s linear infinite;
    display:flex;
    justify-content:center;
    align-items:center;
    border:2px solid white;
    border-radius:100%;
  `
  const Dot1 = styled.div`
    width: 20px;
    height: 20px;
    background: transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: ${move} 5s linear infinite;
    display:flex;
    justify-content:center;
    align-items:center;
    border:2px solid white;
    border-radius:100%;
  `
  return <>
  <div className='' >

<div className={`circle border bg-[#272727] border-white rounded-full relative left-[100px] top-[10px] `}
style={{
    width: `${size}px`,
    height: `${size}px`
}}
>
    <Dot>

        <div className='bg-white   w-[13px] h-[13px] rounded-full' />
    </Dot>
    <Dot1>

        <div className='bg-white   w-[13px] h-[13px] rounded-full' />
    </Dot1>
    <div className='flex flex-col justify-center items-center mt-[100px]'>

        <div>

            <span className='text-[#FBB90F] font-[700] text-[125px]  '>
                15+
            </span>

        </div>
        <div>

            <span className='text-white text-[69px] font-[500]'>
                Clients
            </span>
        </div>

    </div>
</div>
</div>
  </>
};

export default Circle;
