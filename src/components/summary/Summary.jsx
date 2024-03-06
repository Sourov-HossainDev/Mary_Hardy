import React from 'react'
import { FiDownload } from 'react-icons/fi'

const Summary = () => {
    return (
        <>
            <div className='mt-[130px]'>
                <div className=' max-w-container mx-auto font-openSans   '>
                    <h1 className='font-bold text-[35px] text-[#181818] text-center '>A summary of My Resume</h1>
                    <div className='flex mt-[113px]  '>
                        <div className='w-1/2'>
                            <div className='border-b  pb-[30px] '>
                                <h1 className='font-bold text-[30px] text-[#474747] '>My Education</h1>
                                <h2 className='font-bold text-[25px] text-[#474747] mt-[30px] '>Master in Computer Engineering</h2>
                                <h3 className='font-semibold text-[20px] text-[#757575] mt-[10px]  '>Harvard University / 2015 - 2017</h3>
                                <p className='w-[501px] text-[16px] text-[#757575] mt-[20px] '>List skill/technologies here. You can change the icon above
                                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </div>
                            <div className='border-b  mt-[30px] pb-[30px] '>
                                <h2 className='font-bold text-[25px] text-[#474747] mt-[30px] '>Master in Computer Engineering</h2>
                                <h3 className='font-semibold text-[20px] text-[#757575] mt-[10px]  '>Harvard University / 2015 - 2017</h3>
                                <p className='w-[501px] text-[16px] text-[#757575] mt-[20px] '>List skill/technologies here. You can change the icon above
                                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </div>
                            <div className=' mt-[30px] '>
                                <h2 className='font-bold text-[25px] text-[#474747] mt-[30px] '>Master in Computer Engineering</h2>
                                <h3 className='font-semibold text-[20px] text-[#757575] mt-[10px]  '>Harvard University / 2015 - 2017</h3>
                                <p className='w-[501px] text-[16px] text-[#757575] mt-[20px] '>List skill/technologies here. You can change the icon above
                                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </div>

                        </div>
                        <div className='w-1/2 ml-[50px] '>
                            <div className='border-b  pb-[30px] '>
                                <h1 className='font-bold text-[30px] text-[#474747] '>My Experience</h1>
                                <h2 className='font-bold text-[25px] text-[#474747] mt-[30px] '>Sr. Font End Developer</h2>
                                <h3 className='font-semibold text-[20px] text-[#757575] mt-[10px]  '>Apple Inc / 2020 - Current</h3>
                                <p className='w-[501px] text-[16px] text-[#757575] mt-[20px] '>List skill/technologies here. You can change the icon above
                                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </div>
                            <div className='border-b  mt-[30px] pb-[30px] '>
                                <h2 className='font-bold text-[25px] text-[#474747] mt-[30px] '>Jr. Font End Developer</h2>
                                <h3 className='font-semibold text-[20px] text-[#757575] mt-[10px]  '>Dribbble Inc / 2018 - 2022</h3>
                                <p className='w-[501px] text-[16px] text-[#757575] mt-[20px] '>List skill/technologies here. You can change the icon above
                                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </div>
                            <div className=' mt-[30px] '>
                                <h2 className='font-bold text-[25px] text-[#474747] mt-[30px] '>HTML Developer</h2>
                                <h3 className='font-semibold text-[20px] text-[#757575] mt-[10px]  '>Adobe Inc / 2017 - 2018</h3>
                                <p className='w-[501px] text-[16px] text-[#757575] mt-[20px] '>List skill/technologies here. You can change the icon above
                                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-btnColor py-[19px] px-[17px] rounded-[5px] flex items-center text-white font-bold text-[20px] mt-[70px]  '><span className='text-2xl mr-[10px]  '><FiDownload /> </span>Download CV</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Summary