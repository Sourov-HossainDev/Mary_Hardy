import React from 'react'

const About = () => {
  return (
    <>
      <div className='mt-[130px] '>
        <div className=' max-w-container mx-auto bg-[#FFF8F3] py-[131px] px-[157px] font-openSans text-center '>
          <h1 className='font-bold text-[35px] text-[#181818]  '>About Me</h1>
          <p className='text-[18px] text-[#757575] w-[827px] m-auto my-[30px] '>I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p>
          <div className='flex justify-between '>
            <div>
              <p className='text-[20px] text-[#757575] '>Name:</p>
              <p className='text-[20px] text-[#474747] font-bold  '>Mary Hardy</p>
            </div>
            <div>
              <p className='text-[20px] text-[#757575] '>Email:</p>
              <p className='text-[20px] text-[#474747] font-bold  '>info@gmail.com</p>
            </div>
            <div>
              <p className='text-[20px] text-[#757575] '>Date of birth:</p>
              <p className='text-[20px] text-[#474747] font-bold  '>11 November 1987</p>
            </div>
            <div>
              <p className='text-[20px] text-[#757575] '>From:</p>
              <p className='text-[20px] text-[#474747] font-bold  '>Los Angeles, USA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About