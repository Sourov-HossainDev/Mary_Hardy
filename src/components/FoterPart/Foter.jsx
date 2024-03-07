import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Foter = () => {
    return (
        <>
            <div className='bg-[#FFF8F3]  font-openSans py-[130px] mt-[113px]  '>
                <div className='flex max-w-container mx-auto'>
                    <div className='flex'>
                        <div className='w-1/2'>
                            <h3 className='font-bold text-[35px] text-[#181818]  '>Lets Connect</h3>
                            <p className='text-[16px] text-[#474747] mt-[20px] '>Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
                            <div className='flex text-2xl text-btnColor w-[130px] justify-between mt-[30px]  '>
                                <FaFacebook className='cursor-pointer'/>
                                <FaTwitter className='cursor-pointer'/>
                                <RiInstagramFill className='cursor-pointer'/>
                            </div>
                        </div>
                        <div className='w-1/2 pl-[116px] '>
                            <h3 className='font-bold text-[35px] text-[#181818] '>Let’s Message me</h3>
                            <input type="text" placeholder='Your Name' className='py-[18px] pl-[30px] w-[462px]  outline-none mt-[28px]  ' />
                            <input type="text" placeholder='Your Email' className='py-[18px] pl-[30px] w-[462px]  outline-none mt-[24px]  ' />
                            <textarea name="" id="" cols="53" rows="5" placeholder='Message' className='mt-[24px] outline-none py-[18px] px-[30px] w-[462px]  '></textarea>
                            <button className='py-[19px] px-[39px] bg-btnColor rounded-[5px] font-bold text-[20px] text-white mt-[24px]  '>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foter