import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import Circle from './Circle';
const dataArray = [
    {
        id: 1,
        svg: <svg className="text-white" // Default SVG color
            width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0823 24.0752H21.1834C21.5607 24.0752 21.8769 23.9476 22.1321 23.6924C22.3873 23.4372 22.5148 23.121 22.5148 22.7437V19.637H19.852V21.4123H15.4137V13.4235H19.852V15.1987H22.5148V12.0915C22.5148 11.714 22.3873 11.3979 22.1321 11.143C21.8769 10.8881 21.5607 10.7606 21.1834 10.7606H14.0823C13.705 10.7606 13.3888 10.8882 13.1337 11.1434C12.8785 11.3986 12.7509 11.7148 12.7509 12.092V22.7437C12.7509 23.121 12.8785 23.4372 13.1337 23.6924C13.3888 23.9476 13.705 24.0752 14.0823 24.0752ZM17.6358 34.283C15.3032 34.283 13.1107 33.8404 11.0582 32.9551C9.00573 32.0698 7.22035 30.8684 5.7021 29.3509C4.18382 27.8333 2.98185 26.0487 2.09619 23.9971C1.21053 21.9455 0.7677 19.7535 0.7677 17.4209C0.7677 15.0883 1.21034 12.8957 2.09561 10.8433C2.98089 8.79076 4.18231 7.00539 5.69988 5.48714C7.21748 3.96886 9.00207 2.76688 11.0536 1.88123C13.1052 0.995566 15.2973 0.552734 17.6299 0.552734C19.9625 0.552734 22.155 0.995374 24.2075 1.88065C26.26 2.76592 28.0453 3.96734 29.5636 5.48492C31.0819 7.00252 32.2838 8.78711 33.1695 10.8387C34.0552 12.8902 34.498 15.0823 34.498 17.4149C34.498 19.7475 34.0554 21.94 33.1701 23.9925C32.2848 26.045 31.0834 27.8304 29.5658 29.3486C28.0482 30.8669 26.2636 32.0689 24.2121 32.9545C22.1605 33.8402 19.9684 34.283 17.6358 34.283ZM17.6328 31.6202C21.5976 31.6202 24.9559 30.2443 27.7076 27.4926C30.4593 24.7409 31.8351 21.3827 31.8351 17.4179C31.8351 13.4531 30.4593 10.0948 27.7076 7.34315C24.9559 4.59146 21.5976 3.21562 17.6328 3.21562C13.668 3.21562 10.3098 4.59146 7.55812 7.34315C4.80643 10.0948 3.43058 13.4531 3.43058 17.4179C3.43058 21.3827 4.80643 24.7409 7.55812 27.4926C10.3098 30.2443 13.668 31.6202 17.6328 31.6202Z" fill="currentColor" />
        </svg>,
        tittle: 'About',
        description: 'Designshood'

    },
    {
        id: 2,
        svg: <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.451 15.984L15.3395 12.0685L12.3109 9.01295L10.3313 10.9926L8.48316 9.14453L10.4359 7.16485L7.73779 4.46676L3.82227 8.38227L11.451 15.984ZM25.511 30.071L29.4265 26.1555L26.7284 23.4574L24.7488 25.4101L22.9006 23.562L24.8534 21.5823L21.8147 18.5706L17.9262 22.4592L25.511 30.071ZM8.37859 32.0236H1.88653V25.5316L9.57589 17.8422L0.132812 8.38227L7.73779 0.777344L17.2415 10.2642L24.4689 3.00991C24.741 2.73785 25.04 2.53662 25.366 2.40624C25.692 2.27582 26.0326 2.21061 26.3879 2.21061C26.7431 2.21061 27.0837 2.27582 27.4097 2.40624C27.7357 2.53662 28.0347 2.73785 28.3068 3.00991L30.9002 5.68094C31.1723 5.953 31.3707 6.25203 31.4955 6.57801C31.6203 6.90403 31.6827 7.24466 31.6827 7.5999C31.6827 7.95511 31.6203 8.28842 31.4955 8.59982C31.3707 8.91119 31.1723 9.20291 30.9002 9.47497L23.7066 16.7125L33.1328 26.1724L25.5279 33.7773L16.0679 24.3343L8.37859 32.0236ZM4.51705 29.3931H7.25893L24.4622 12.2169L21.6933 9.44796L4.51705 26.6512V29.3931ZM23.0996 10.8375L21.6933 9.44796L24.4622 12.2169L23.0996 10.8375Z" fill="currentColor" />
        </svg>,
        tittle: 'Services',
        description: 'Creativity'

    },
    {
        id: 3,
        svg: <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.27202 30.8243C2.39468 30.8243 1.65206 30.5204 1.04417 29.9125C0.436272 29.3046 0.132324 28.562 0.132324 27.6846V9.64826C0.132324 8.77092 0.436272 8.0283 1.04417 7.42041C1.65206 6.81251 2.39468 6.50856 3.27202 6.50856H10.5534V3.56934C10.5534 2.69203 10.8574 1.94943 11.4652 1.34153C12.0731 0.733636 12.8158 0.429688 13.6931 0.429688H19.5715C20.4489 0.429688 21.1915 0.733636 21.7994 1.34153C22.4073 1.94943 22.7112 2.69203 22.7112 3.56934V6.50856H29.9926C30.87 6.50856 31.6126 6.81251 32.2205 7.42041C32.8284 8.0283 33.1323 8.77092 33.1323 9.64826V27.6846C33.1323 28.562 32.8284 29.3046 32.2205 29.9125C31.6126 30.5204 30.87 30.8243 29.9926 30.8243H3.27202ZM3.27202 28.2191H29.9926C30.1262 28.2191 30.2487 28.1634 30.3601 28.0521C30.4714 27.9407 30.5271 27.8183 30.5271 27.6846V9.64826C30.5271 9.51464 30.4714 9.39215 30.3601 9.28079C30.2487 9.16946 30.1262 9.11379 29.9926 9.11379H3.27202C3.1384 9.11379 3.01591 9.16946 2.90455 9.28079C2.79322 9.39215 2.73755 9.51464 2.73755 9.64826V27.6846C2.73755 27.8183 2.79322 27.9407 2.90455 28.0521C3.01591 28.1634 3.1384 28.2191 3.27202 28.2191ZM13.1586 6.50856H20.106V3.56934C20.106 3.43572 20.0504 3.31324 19.939 3.20191C19.8277 3.09055 19.7052 3.03487 19.5715 3.03487H13.6931C13.5595 3.03487 13.437 3.09055 13.3256 3.20191C13.2143 3.31324 13.1586 3.43572 13.1586 3.56934V6.50856Z" fill="currentColor" />
        </svg>,
        tittle: 'Portfolio',
        description: 'Work'

    },
    {
        id: 4,
        svg: <svg width="46" height="22" viewBox="0 0 46 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5074 13.4804L11.6763 9.31154L7.5074 5.14267L3.33853 9.31154L7.5074 13.4804ZM33.6195 12.679L37.7958 5.98168L41.991 12.679H33.6195ZM22.6395 11.0611C21.2304 11.0611 20.0304 10.5672 19.0396 9.57958C18.0488 8.59193 17.5534 7.39263 17.5534 5.98168C17.5534 4.54252 18.0473 3.33618 19.0349 2.36264C20.0226 1.38911 21.2219 0.902344 22.6328 0.902344C24.072 0.902344 25.2783 1.38847 26.2519 2.36074C27.2254 3.333 27.7122 4.53778 27.7122 5.97508C27.7122 7.38417 27.2261 8.5841 26.2538 9.57489C25.2815 10.5657 24.0767 11.0611 22.6395 11.0611ZM22.6328 3.83703C22.0408 3.83703 21.5354 4.04257 21.1165 4.45363C20.6976 4.8647 20.4882 5.37405 20.4882 5.98168C20.4882 6.57366 20.6976 7.07911 21.1165 7.49803C21.5354 7.91693 22.044 8.12637 22.6422 8.12637C23.2405 8.12637 23.7459 7.91693 24.1586 7.49803C24.5712 7.07911 24.7775 6.57053 24.7775 5.97229C24.7775 5.37405 24.5719 4.86861 24.1609 4.45598C23.7498 4.04335 23.2405 3.83703 22.6328 3.83703ZM0.132861 21.408V19.0226C0.132861 17.7007 0.814841 16.6265 2.1788 15.8C3.54279 14.9735 5.31289 14.5602 7.4891 14.5602C7.88758 14.5602 8.26994 14.5715 8.63617 14.5941C9.0024 14.6167 9.35231 14.6606 9.68589 14.7258C9.31719 15.3027 9.03752 15.9167 8.84688 16.5677C8.65625 17.2187 8.56094 17.9122 8.56094 18.6482V21.408H0.132812H0.132861ZM11.872 21.408V18.7178C11.872 16.8491 12.8663 15.3503 14.8551 14.2216C16.8438 13.0928 19.4381 12.5285 22.638 12.5285C25.8678 12.5285 28.4679 13.0928 30.4382 14.2216C32.4085 15.3503 33.3937 16.8491 33.3937 18.7178V21.408H11.872ZM37.7958 14.5602C39.9969 14.5602 41.77 14.9735 43.1151 15.8C44.4603 16.6265 45.1328 17.7007 45.1328 19.0226V21.408H36.7047V18.6482C36.7047 17.9122 36.6175 17.2187 36.4432 16.5677C36.2689 15.9167 36.0074 15.3027 35.6587 14.7258C35.9923 14.6606 36.3384 14.6167 36.6969 14.5941C37.0554 14.5715 37.4218 14.5602 37.7958 14.5602ZM22.6305 15.4632C20.5977 15.4632 18.8508 15.7329 17.3897 16.2722C15.9286 16.8115 15.1177 17.4762 14.9572 18.2663V18.4733H30.3385V18.2663C30.1579 17.4762 29.3452 16.8115 27.9004 16.2722C26.4556 15.7329 24.699 15.4632 22.6305 15.4632Z" fill="currentColor" />
        </svg>,
        tittle: 'Teams',
        description: 'Masters'

    },
    {
        id: 5,
        svg: <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.7634 30.5293C25.4376 30.5293 22.0965 29.7561 18.7402 28.2097C15.3839 26.6633 12.3002 24.4818 9.48911 21.665C6.67801 18.8483 4.49927 15.7646 2.95288 12.4139C1.40649 9.06323 0.633301 5.725 0.633301 2.39923C0.633301 1.86496 0.809772 1.41974 1.16271 1.06357C1.51566 0.707388 1.95683 0.529297 2.48625 0.529297H8.24185C8.68756 0.529297 9.08066 0.674665 9.42116 0.965402C9.76166 1.25614 9.97828 1.6153 10.071 2.04289L11.0823 7.23516C11.1525 7.71707 11.1378 8.1311 11.0382 8.47725C10.9387 8.82339 10.7599 9.11412 10.502 9.34941L6.42623 13.3166C7.08235 14.518 7.83179 15.6543 8.67456 16.7255C9.51733 17.7968 10.4297 18.8201 11.4115 19.7952C12.3799 20.7635 13.4093 21.6628 14.4998 22.4932C15.5903 23.3235 16.7679 24.0961 18.0326 24.811L21.9931 20.8167C22.2691 20.5294 22.6034 20.328 22.9959 20.2126C23.3884 20.0972 23.7962 20.069 24.2193 20.1278L29.1197 21.1255C29.5654 21.2432 29.9291 21.4705 30.2108 21.8076C30.4925 22.1447 30.6333 22.5271 30.6333 22.9547V28.6764C30.6333 29.2058 30.4552 29.6469 30.099 29.9999C29.7429 30.3528 29.2976 30.5293 28.7634 30.5293ZM5.17399 10.8121L8.32334 7.79854C8.3799 7.75328 8.41666 7.69105 8.43363 7.61188C8.4506 7.53267 8.44778 7.45914 8.42516 7.39129L7.65817 3.44782C7.63556 3.35732 7.59597 3.28945 7.53941 3.24422C7.48285 3.19895 7.40932 3.17632 7.31882 3.17632H3.54503C3.47718 3.17632 3.42062 3.19895 3.37535 3.24422C3.33009 3.28945 3.30746 3.34601 3.30746 3.41389C3.39796 4.61978 3.59535 5.8449 3.89965 7.08926C4.20397 8.33361 4.62875 9.57457 5.17399 10.8121ZM20.5269 26.0633C21.6966 26.6085 22.9167 27.0254 24.187 27.3139C25.4574 27.6023 26.6446 27.7737 27.7487 27.828C27.8166 27.828 27.8731 27.8053 27.9184 27.7601C27.9636 27.7148 27.9863 27.6583 27.9863 27.5904V23.8777C27.9863 23.7872 27.9636 23.7137 27.9184 23.6571C27.8731 23.6006 27.8053 23.561 27.7148 23.5383L24.0089 22.785C23.941 22.7623 23.8816 22.7595 23.8307 22.7765C23.7798 22.7935 23.7261 22.8302 23.6695 22.8868L20.5269 26.0633Z" fill="currentColor" />
        </svg>,
        tittle: 'Contact',
        description: 'way to connect'

    },

]


function Home() {

    return (
        <div className='bg-black w-full h-[100vh] space-y-[40px] relative overflow-hidden'>
            <div className='w-full h-[8%]  flex gap-2 justify-end pt-[20px] pr-[20px] '>
                <div className='w-[20px] h-[20px] bg-white' />
                <div className='w-[20px] h-[20px] bg-white' />
                <div className='w-[20px] h-[20px] bg-white' />
                <div className='w-[20px] h-[20px] border-white border' />
                <div className='w-[20px] h-[20px] border-white border' />
            </div>

            <div className='w-full h-[30%] flex items-center '>
                <div className='w-[30%]'>
                    <div className='h-[181px] w-[181px] pl-[55px]'>
                        <svg width="182" height="182" viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="90.6328" cy="90.6758" r="90.6328" fill="white" />
                            <path d="M144.833 85.6516C144.186 79.0053 142.121 72.5805 138.781 66.8209C135.294 60.9901 130.823 55.8247 125.57 51.5604C125.57 51.9804 125.57 52.1204 125.57 52.2604C125.57 58.4206 125.57 64.6158 125.57 70.7761C125.635 71.3266 125.799 71.8603 126.054 72.3511C127.368 75.4662 128.682 78.5464 129.962 81.6615C130.148 82.353 130.299 83.054 130.412 83.7615H129.927H112.325C111.529 83.7615 111.425 83.3765 111.425 82.7465C111.425 80.2614 111.425 77.7763 111.425 75.2912C111.425 63.0758 111.425 50.7903 111.425 38.6799C111.388 38.0882 111.143 37.5295 110.734 37.1048C106.549 33.0447 102.365 29.0545 98.1454 25.0294C97.9359 24.8746 97.7164 24.7343 97.4883 24.6094V156.669C101.915 152.469 106.307 148.257 110.665 144.034C111.158 143.518 111.432 142.827 111.425 142.109C111.425 127.781 111.425 113.454 111.425 99.1271V97.412H130.1C130.1 97.412 130.1 97.6221 130.1 97.6921C130.1 97.7621 130.1 98.3571 130.1 98.6721C129.302 102.271 127.973 105.729 126.158 108.927C125.813 109.521 125.634 110.199 125.639 110.888C125.639 116.768 125.639 122.648 125.639 128.388C125.639 128.773 125.639 129.158 125.639 129.613C132.3 124.571 137.565 117.878 140.927 110.178C144.289 102.478 145.634 94.0308 144.833 85.6516Z" fill="#0E0E0E" />
                            <path d="M92.4046 24.7852V154.605C92.4046 156.74 92.4046 156.74 90.2258 156.74H38.3508C36.2758 156.74 36.2412 156.74 36.2412 154.71C36.2412 136.999 36.2412 119.289 36.2412 101.578C36.1313 100.9 36.2918 100.206 36.6874 99.6484C37.083 99.0905 37.6813 98.7144 38.3508 98.6028C48.5183 95.2777 58.6512 91.7776 68.7841 88.3825L70.9629 87.6825C70.9629 88.3475 70.9629 88.8025 70.9629 89.2925C70.9629 93.2477 70.9629 97.2028 70.9629 101.158C70.9629 102.348 70.4787 102.768 69.4412 103.118C63.562 105.043 57.752 107.073 51.9074 109.033C51.0083 109.313 50.4895 109.663 50.5241 110.748C50.5241 120.899 50.5241 131.049 50.5241 141.199C50.5241 141.549 50.5241 141.899 50.5241 142.354H77.7412C77.7412 141.654 77.7412 140.954 77.7412 140.254V58.1064C77.7412 51.3161 77.7412 44.5609 77.7412 37.7706C77.7155 37.2638 77.8199 36.759 78.0441 36.3051C78.2683 35.8512 78.6048 35.4638 79.0208 35.1805C82.8942 32.1704 86.6983 29.0903 90.5025 26.0802L92.4046 24.7852Z" fill="#0E0E0E" />
                        </svg>
                    </div>
                </div>
                <div className=' w-full flex justify-evenly items-center gap-[20px]'>
                    {
                        dataArray.map(({ tittle, svg, description }) => {
                            return <>
                                <div className='h-[181px] w-[181px] bg-[#272727] rounded-full flex gap-1 flex-col justify-center items-center hover:bg-[#FBB90F]  transition-all duration-200 ease-in-out group p-4 cursor-pointer'>
                                    <div className='transform transition-transform duration-200 ease-in-out group-hover:scale-150 group-hover:text-black'>
                                        {/* {svg} */}
                                        {React.cloneElement(svg, {
                                            className: 'text-white group-hover:text-black', // Apply text color changes on hover
                                        })}
                                    </div>
                                    <div className='flex flex-col justify-center items-center transform transition-transform duration-200 ease-in-out group-hover:translate-y-2'>
                                        <div>
                                            <span className='text-white font-[700] text-[25px] group-hover:text-black'>
                                                {tittle}
                                            </span>
                                        </div>
                                        <div>
                                            <span className='text-white font-[400] text-[16px] group-hover:text-black'>
                                                {description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>


            <div className='w-full h-[49.7%]  flex'>
                <div className='w-[100%] h-full  p-[25px]'>
                    <div className=''>
                        <span className='text-[#D9D9D9] font-[700] text-[60px] designHoodFont'>
                            DesignsHood
                        </span>
                    </div>
                    <div>
                        <p className='text-[#D9D9D9] font-[400] text-[30px]'>
                            Crafting Experiences, Empowering Talent. Elevate<br />
                            your brand with our stellar designs and gain expertise<br />
                            through our specialized training. Let's shape the future<br />
                            of design together.
                        </p>
                    </div>

                </div>


            </div>
            <Circle/>
            
        </div>
    )


}

export default Home
