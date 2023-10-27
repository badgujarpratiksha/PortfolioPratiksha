import React from 'react'
import frontendImg from "../../assets/images/front-end.png"

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">

          <h2 className="text-smallTextColor font-[800] text-[2.4rem] mb-5 ">
              Education
          </h2>
         
        </div>
        <div className='flex flex-col justify-center sm:py-12'>
        <div className='w-full py-3 px-3 sm-mx-auto sm:px-0'>
        <div className='relative text-gray-700 antialiased text-sm font-semibold '>
        {/*====vertical line======= */}
         <div className=' absolute w-1 sm-block bg-indigo-600 h-full left-1/2 trasform-translate-x-1/2'>
         </div>
        {/*====vertical line======= */}
      
        {/* ======left card======== */}
        <div className=" flex justify-center items-center mt-6 sm:mt-0 sm:mb-12">
            <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-start w-full mx-auto items-center ">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                        data-aos='fade-right'
                        data-aos-duration="1200"
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                        >
                        <h3 className='text-indigo-600 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'> <i class="ri-robot-2-fill"></i> Internship</h3>
                            <p className='text-[15px]  group-hover:text-white group-hover:font-[600]  leading'>
                            Software Development Intern | Centre for
                            Development of Advanced Computing (CDAC) <br />
                            Kharghar <br />
                            Jun 2023 – present <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='rounded-full bg-indigo-600 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2
                -translate-y-4 sm:translate-y-0 flex items-center justify-center '>
                    <figure>
                        <img src={frontendImg} alt="" />
                    </figure>
                </div>
            </div>
        
        </div>
         {/* end left card */}
         {/* right card */}
         <div className=" flex justify-center items-center mt-6 sm:mt-0 sm:mb-12">
            <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-end w-full mx-auto items-center ">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                        data-aos='fade-left'
                        data-aos-duration="1200"
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                        >
                        <h3 className='text-indigo-600 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'><i class="ri-graduation-cap-fill"></i> B.TECH</h3>
                            <p className='text-[15px]  group-hover:text-white group-hover:font-[600]  leading'>
                            Computer Engineering <br />
                            Government College of Engineering Jalgaon, India <br />
                            2020 – 2023 <br />
                            8.93 CGPA <br /> 
                           </p>
                        </div>
                    </div>
                </div>
                <div className='rounded-full bg-indigo-600 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2
                -translate-y-4 sm:translate-y-0 flex items-center justify-center '>
                    <figure>
                        <img src={frontendImg} alt="" />
                    </figure>
                </div>
            </div>
        </div>
        {/* end right card */}
        {/*2nd left card */}
        <div className=" flex justify-center items-center mt-6 sm:mt-0 sm:mb-12">
            <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-start w-full mx-auto items-center ">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                        data-aos='fade-right'
                        data-aos-duration="1200"
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                        >
                        <h3 className='text-indigo-600 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>Diploma  </h3>
                            <p className='text-[15px]  group-hover:text-white group-hover:font-[600]  leading'>
                            Government Polytechnic Jalgaon <br />
                            2017 – 2020 <br />
                            91.43%</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-full bg-indigo-600 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2
                -translate-y-4 sm:translate-y-0 flex items-center justify-center '>
                    <figure>
                        <img src={frontendImg} alt="" />
                    </figure>
                </div>
            </div>
        </div>
         {/* 2nd end left card */}
         {/*2nd right card */}
         <div className=" flex justify-center items-center mt-6 sm:mt-0 sm:mb-12">
            <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-end w-full mx-auto items-center ">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                        data-aos='fade-left'
                        data-aos-duration="1200"
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                        >
                        <h3 className='text-indigo-600 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'><i class="ri-school-fill"></i> SSC</h3>
                            <p className='text-[15px]  group-hover:text-white group-hover:font-[600]  leading'>
                            APKP Madhyamik Vidyalaya, Pimparkhed, Tal-Bhadgaon, Dist-Jalgaon<br /> 
                            2017<br /> 
                            88.40% <br /> 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='rounded-full bg-indigo-600 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2
                -translate-y-4 sm:translate-y-0 flex items-center justify-center '>
                    <figure>
                        <img src={frontendImg} alt="" />
                    </figure>
                </div>
            </div>
        {/* end 2nd right card */}
        </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Services
