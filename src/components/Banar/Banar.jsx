import React from 'react'
import man from '../../assets/Images/man.png'
import elips from '../../assets/Images/elips.png'
import { FiDownload } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";

const Banar = () => {
    return (
        <>
            <div className='bg-[#FFF8F3] pt-[51px] font-openSans  '>
                <div className='flex max-w-container mx-auto'>
                    <div className='1/2'>
                        <h3 className='font-semibold text-[45px] text-[#474747] mt-[185px] '>Hi, I  am</h3>
                        <h1 className='font-bold text-[85px] text-[#181818] '>Mary Hardy</h1>
                        <p className='text-[18px] text-[#757575] w-[585px] mt-[20px]  '>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
                        <div className='mt-[30px] flex '>
                        <button className='bg-btnColor py-[19px] px-[17px] rounded-[5px] flex items-center text-white font-bold text-[20px]  '><span className='text-2xl mr-[10px] '><FiDownload/> </span>Download CV</button>
                        <button className='border border-btnColor py-[19px] px-[17px] ml-[30px] rounded-[5px] flex items-center text-btnColor font-bold text-[20px]  '><span className='text-2xl mr-[10px] '><IoCallOutline/> </span>Contact</button>
                        </div>
                    </div>
                    <div className='1/2'>
                        <div className='relative'>
                            <img src={man} alt=""  />
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Banar