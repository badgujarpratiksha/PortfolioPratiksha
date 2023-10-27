import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#12141e] pt-12'>
      {/* footer top */}
      <div className="container h-19">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h4 className='text-[26rem] leading-10 text-white font-[400] mb-5 md:text-[2rem]'>The best way to predict the future is to invent it." - Alan Kay


             </h4>
            <a href="#contact"><button className='bg-primaryColor text-white font-[500] flex item-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><i class="ri-mail-fill"></i>Hire me</button></a>
          </div>
          <div className='w-full md:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'> Address-Shivajinagar Pune <br />Pincode-411003</p>

            <div className='flex items-center gap-4 flax-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] texr-[15px]'>
               Follow Me:
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="https://www.linkedin.com/in/pratiksha-badgujar-742843216/" className='text-gray-300 font-[500] text-[18px]'>
                <i class="ri-linkedin-fill"></i>
                </a>
              </span>
              
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="https://github.com/badgujarpratiksha" className='text-gray-300 font-[500] text-[18px]'>
                <i class="ri-github-fill"></i>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="#insta" className='text-gray-300 font-[500] text-[18px]'>
                <i class="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
            <ul className='flex items-center gap-[20px] mt-10'>
                <li><a href="#about" className='text-gray-400 font-[600]'>About</a></li>
                <li><a href="#services" className='text-gray-400 font-[600]'>Services</a></li>
                <li><a href="#portfolio" className='text-gray-400 font-[600]'>Portfolio</a></li>
                <li><a href="#contact" className='text-gray-400 font-[600]'>Contact</a></li>
            </ul>
         </div>
      </div>
      {/* end footer top */}
      {/* footer bottom */}
      <div className='bg-[#1b1e29] py-5 mt-14'>
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                  <span className="w-[35px] h-[35px] bg-gray-950 text-white text[18px] font-[500] rounded-full flex items-center justify-center">
                     P
                   </span>
               <div className='leading-[20px]'>
                  <h2 className='text-xl text-gray-300 font-[700]'>Pratiksha</h2>
                  <p className='text-gray-300  text-[16px] font-[500]'>
                   Personal
                  </p>
              </div>
              
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* end footer bottom */}
    </footer>
  )
}

export default Footer