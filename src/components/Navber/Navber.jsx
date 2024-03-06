import React from 'react'
import mary from '../../assets/Images/Mary.png'
import man from '../../assets/Images/man.png'
import elips from '../../assets/Images/elips.png'

const Navber = () => {
    return (
        <>
            <div className='bg-[#FFF8F3] pt-[51px] font-openSans '>
                <div className='max-w-container mx-auto'>
                    <nav className='flex items-center '>
                        <div className='w-1/2  '>
                            <img src={mary} alt="" />
                        </div>
                        <div className='w-1/2 flex justify-end items-center '>
                            <ul className='flex text-[20px] text-[#474747] mr-[51px] '>
                                <li className='mr-[50px] cursor-pointer '>Portfolio</li>
                                <li className='cursor-pointer'>Blog</li>
                            </ul>
                            <button className='py-[19px] px-[36px] bg-btnColor font-bold text-[20px] text-white  '>Hire Me</button>
                        </div>
                    </nav>
                    <div className='flex'>
                        <div className='1/2'>
                            <h3>Hi, I  am</h3>
                            <h1>Mary Hardy</h1>
                            <p>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
                        </div>
                        <div className='1/2'>
                            <div className='relative'>
                                <img src={man} alt="" className='z-50' />
                                <img src={elips} alt="" className='absolute top-[240px] right-0 z-40' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navber