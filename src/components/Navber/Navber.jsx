import React from 'react'
import mary from '../../assets/Images/Mary.png'


const Navber = () => {
    return (
        <>
            <div className='bg-[#FFF8F3] pt-[51px] font-openSans '>
                <div className='max-w-container mx-auto'>
                    <nav className='flex items-center  '>
                        <div className='w-1/2  '>
                            <img src={mary} alt="" className='mt-[20px] ' />
                        </div>
                        <div className='w-1/2 flex justify-end items-center '>
                            <ul className='flex text-[20px] text-[#474747] mr-[51px] '>
                                <li className='mr-[50px] cursor-pointer '>Portfolio</li>
                                <li className='cursor-pointer'>Blog</li>
                            </ul>
                            <button className='py-[19px] px-[36px] bg-btnColor font-bold text-[20px] text-white  '>Hire Me</button>
                        </div>
                    </nav>
                   
                </div>
            </div>
        </>
    )
}

export default Navber