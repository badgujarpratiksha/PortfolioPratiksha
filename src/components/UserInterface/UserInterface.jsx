import React from 'react';
import { useMediaQuery } from 'react-responsive';
import heroImage from "../../assets/images/Ai-Pratiksha-removebg-preview-modified.png";

const UserInterface = () => {
  // Define media queries
  const isMobileDevice = useMediaQuery({ query: "(min-device-width: 480px)" });
  const isTabletDevice = useMediaQuery({ query: "(min-device-width: 768px)" });
  const isLaptop = useMediaQuery({ query: "(min-device-width: 1024px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 1200px)" });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1201px)" });

  return (
    <section className='pt-0' id="about">
      <div className='container pt-14'>
        {/* Hero left */}
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          <div className="w-full md:basis-1/2">
            <h5 className='text-smallTextColor font-[500] text-[16px]'>
              Hello, Welcome
            </h5>
            <h1 className='text-smallTextColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[45px] mt-5'>
              I am Pratiksha Badgujar <br />
              <p className='text-2xl'>Software Developer</p>
            </h1>
            <div className='flex items-center mt-7 gap-6'>
              <a href="#contact">
                <button className='bg-primaryColor text-white font-[500] flex item-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                  <i className="ri-mail-fill"></i> Hire me
                </button>
              </a>
              <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>
                See Portfolio
              </a>
            </div>
            <p className='flex text-headingColor items-center mt-12 gap-2 font-[500] leading-5 hover:leading-6 capitalize text-justify sm:pl-14 sm:pr-10'>
              {/* Your additional content here */}
            </p>
          </div>
          {/* Hero right (you can add more content here) */}
          <div className="w-full md:basis-1/2">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInterface;
