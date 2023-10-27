import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='p-16xl '>
     <div className="container">
        <h2 className='text-headingColor font-[700] text-[2.5rem] mb-4'>Get In Touch</h2>
        <div className="md:flex justify-between intems-center">
            <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe title='google-maps' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8596674029704!2d73.05167127480041!3d19.025904453544168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7
            c24cce39457b%3A0x8bd69eab297890b0!2z4KS44KWH4KSC4KSf4KSwIOCkq-ClieCksCDgpKHgpYfgpLXgpY3gpLngpLLgpKrgpK7gpYfgpILgpJ8g4KSR4KSrIOClsuCkoeCkteCljeCkueCkvuCkqOCljeCkuOCljeCkoSDgpJXgpK7
            gpY3gpKrgpY3gpK_gpYHgpJ_gpL_gpILgpJcgKOCkuOClgOCkoeClheCklSk!5e0!3m2!1smr!2sin!4v1696499452809!5m2!1smr!2sin" 
            className='border-2  w-full h-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
            <form className='w-full'action="">
                <div className='mb-5'>
                    <input type="text" placeholder='Enter Your Name' className='w-full p-3 focus:outline-none rounded-[5px ]' />
                </div>
                <div className='mb-5'>
                    <input type="email" placeholder='Enter Your Email' className='w-full p-3 focus:outline-none rounded-[5px ]' />
                </div>
                <div className='mb-5'>
                    <input type="text" placeholder='subject' className='w-full p-3 focus:outline-none rounded-[5px ]' />
                </div>
                <div className='mb-5'>
                    <input type="text" rows={3} placeholder='Write your Message' className='w-full p-3 focus:outline-none rounded-[5px ]' />
                </div>
                <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>Send Message</button>
            </form>
          </div>
        </div>
     </div>
    </section>
  )
}

export default Contact