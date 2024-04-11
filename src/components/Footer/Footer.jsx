import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#12141e] pt-12'>
      {/* footer top */}
      <div className="container h-19">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
            <h4 className='text-2xl sm:text-3xl lg:text-4xl leading-10 text-white font-medium mb-5 md:text-[2rem]'>
              "The best way to predict the future is to invent it." - Alan Kay
            </h4>
            <a href="#contact">
              <button className='bg-primaryColor text-white font-medium flex item-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                <i className="ri-mail-fill"></i>Hire me
              </button>
            </a>
          </div>
          <div className='w-full md:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'> Address-Shivajinagar Pune <br />Pincode-411003</p>

            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-medium text-sm sm:text-base'>
                Follow Me:
              </span>
              <span className='w-9 h-9 sm:w-10 sm:h-10 bg-[#2b2d33] p-1 rounded-full cursor-pointer text-center'>
                <a href="https://www.linkedin.com/in/pratiksha-badgujar-742843216/" className='text-gray-300 font-medium text-base'>
                  <i className="ri-linkedin-fill"></i>
                </a>
              </span>

              <span className='w-9 h-9 sm:w-10 sm:h-10 bg-[#2b2d33] p-1 rounded-full cursor-pointer text-center'>
                <a href="https://github.com/badgujarpratiksha" className='text-gray-300 font-medium text-base'>
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span className='w-9 h-9 sm:w-10 sm:h-10 bg-[#2b2d33] p-1 rounded-full cursor-pointer text-center'>
                <a href="#insta" className='text-gray-300 font-medium text-base'>
                  <i className="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className='flex items-center gap-5 sm:gap-20 mt-10'>
            <li><a href="#about" className='text-gray-400 font-medium text-sm sm:text-base'>About</a></li>
            <li><a href="#services" className='text-gray-400 font-medium text-sm sm:text-base'>Services</a></li>
            <li><a href="#portfolio" className='text-gray-400 font-medium text-sm sm:text-base'>Portfolio</a></li>
            <li><a href="#contact" className='text-gray-400 font-medium text-sm sm:text-base'>Contact</a></li>
          </ul>
        </div>
      </div>
      {/* end footer top */}
      {/* footer bottom */}
      <div className='bg-[#1b1e29] py-5 mt-14'>
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 bg-gray-950 text-white text-[18px] font-medium rounded-full flex items-center justify-center">
                  P
                </span>
                <div className='leading-[20px]'>
                  <h2 className='text-lg sm:text-xl text-gray-300 font-bold'>Pratiksha</h2>
                  <p className='text-gray-300  text-[16px] font-medium'>
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
  );
};

export default Footer;
