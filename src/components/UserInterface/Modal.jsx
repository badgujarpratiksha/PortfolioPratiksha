import React from 'react'
import portfolios from '../../assets/dada/portfolioData'

const Modal = ({ activeID, setShowModal }) => {
    const portfolio = portfolios.find(portfolio => portfolio.id === activeID)

    return (
        <div className='fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-headingColor bg-opacity-40'>
            <div className="w-11/12  md:max-w-[600px] md:w-full bg-white rounded-[8px] p-5 relative">
                <div>
                    <figure>
                        <img className='rounded-[8px]' src={portfolio.imgUrl} alt="" />
                    </figure>
                </div>
                <div>
                    <h2 className='text-2xl text-headingColor font-[700] my-5'>
                        {portfolio.title}
                    </h2>
                    <p className='text-[15px] leading-7 text-smallTextColor '>
                        {portfolio.description}
                    </p>
                </div>
                <div className='mt-5 flex item-center gap-3 flex-wrap'>
                    <h4 className='text-headingColor text-[18px] text-[700]'>
                        Technologies:
                    </h4>
                    {portfolio.technologies.map((item, index) => (
                        <span
                            key={index}
                            className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0'
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <button onClick={()=>setShowModal(false)} className='flex items-center justify-center w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] rounded-[5px] '>
                    &times;
                </button>
            </div>
        </div>
    )
}

export default Modal
