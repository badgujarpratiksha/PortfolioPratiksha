import React from 'react';
import heroImage from "../../assets/images/Ai-Pratiksha-removebg-preview-modified.png";
// import CountUp from 'react-countup';


export const UserInterface = () => {
  return (
    <section className='pt-0' id="about">
        <div className='container pt-14'>
          {/*=====================hero left======================= */}
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                <div className="w-full md:basis-1/2"> 
                  <h5 
                  data-aos='fade-right' 
                  data-aos-duration="1500"
                  className='text-smallTextColor font-[500] text-[16px]'>
                    Hello Welcome
                  </h5>
                  <h1
                  data-aos='fade-up' 
                  data-aos-duration="1500"
                  className='text-smallTextColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[45px] mt-5'
                  > I'am Pratiksha Badgujar <br/><p className='text-2xl'>Software Developer</p></h1>
                  <div
                  data-aos='fade-up' 
                  data-aos-duration="1800"
                  data-aos-delay="200"
                  className='flex items-center mt-7 gap-6'
                  >
                  <a href="#contact"><button className='bg-primaryColor text-white font-[500] flex item-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><i class="ri-mail-fill"></i>Hire me</button></a>
                  <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>see Portfolio</a>
                  </div>
                  <p
                   data-aos='fade-left' 
                   data-aos-duration="1500"
                   className='flex text-headingColor items-center mt-12 gap-2 font-[500] leading-5 hover:leading-6 capitalize text-justify sm:pl-14 sm:pr-10'
                  >
                    <span className='mr-2 mb-16'><i class="ri-command-fill"></i></span>
                   <span>
                   
                    I design and code beautifully simple things, 
                    and I love what I do!!Enthusiastic Software
                    Engineering student with a fervor for coding 
                    and a solid foundation in machine learning. 
                    Distinguished graduate known for hard work, 
                    complemented by excellent communication skills
                    </span>
                  </p>
                  <div className='  gap-4 mt-14'>
                    <span className='text-smallTextColor text-[18px] font-[600] gap-4'>
                      Contact:
                    </span>
                    <span>
                      <a href="#Email" className='text-smallTextColor text-[18px] font-[600] gap-6 ml-2'>
                      <i class="ri-mail-line">  pratikshasbadgujar@gmail.com</i>
                      </a>
                    </span>
                    <br />
                    <span>
                      <a href="https://www.linkedin.com/in/pratiksha-badgujar-742843216/" className='text-smallTextColor text-[18px] font-[600] ml-16'>
                      <i class="ri-linkedin-box-fill">https://www.linkedin.com/in/pratiksha-badgujar-742843216/</i> 
                      </a>
                    </span>
                    <br />
                    <span>
                      <a href="#Phone no" className='text-smallTextColor text-[18px] font-[600] ml-16'>
                      <i class="ri-phone-line">7499689888</i>
                      </a>
                    </span>
                  </div>
                </div>
                {/*=====================end hero left======================= */}
                {/*=====================hero image======================= */}
                <div className='basis-1/3 mt-10 sm:mt-0'>
                  <figure className='flex item-center justify-center'>
                    <img src={heroImage} alt="" />
                  </figure>
                </div>
                {/*=====================end hero image======================= */}
                {/*=====================hero contend right======================= */}
                {/* <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                  <div className='mb-10'>
                    <h2 className='text-smallTextColor font-[700] text-[32px]'>
                      <CountUp start={0} end={6} duration={2} suffix='months' />
                    </h2>
                    <h4 className='text-smallTextColor font-[600] text-[18px]'>
                     Professional Experience
                    </h4>
                  </div>
                  <div className='mb-10'>
                    <h2 className='text-smallTextColor font-[700] text-[32px]'>
                      <CountUp start={0} end={100} duration={2} suffix='%' />
                    </h2>
                    <h4 className='text-smallTextColor font-[600] text-[18px]'>
                      Success Rate
                    </h4>
                  </div>
                  <div className='mb-10'>
                    <h2 className='text-smallTextColor font-[700] text-[32px]'>
                      <CountUp start={0} end={6} duration={2} suffix='+' />
                    </h2>
                    <h4 className='text-smallTextColor font-[600] text-[18px]'>
                     Project
                    </h4>
                  </div>
                  
                </div> */}
                {/*=====================end hero contend right======================= */}
            </div>
        </div>
    </section>
  )
}
export default UserInterface
