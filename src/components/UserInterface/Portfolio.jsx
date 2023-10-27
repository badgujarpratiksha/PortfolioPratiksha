import React,{useState,useEffect} from 'react'
import data  from "../../assets/dada/portfolioData"
import Modal from './Modal'

const Portfolio = () => {
    const[nextItems, setNextItems]=useState(6)
    const[portfolios, setportfolios]=useState(data)
    const[selectTab,setselectTab]=useState('all')
    const[showModel,setShowModal]=useState(false)
    const [activeID, setActiveID] = useState(null);

    const loadMoreHandler =()=>{
        setNextItems(prev=>prev)
    }
    const showModalHandler = id =>{
        setShowModal(true)
        setActiveID(id)
    }
    useEffect(() => {
        if (selectTab === 'ALL') {
            setportfolios(data);
        }
        if (selectTab ==='Web Design') {
            const filteredData = data.filter(item => item.category === 'Web Design');
            setportfolios(filteredData);
        }
        if (selectTab ==='Ux Design') {
            const filteredData = data.filter(item => item.category === 'Ux');
            setportfolios(filteredData);
        }
    }, [selectTab]);
    

  return (
    <div id="Portfolio">
        <div className="container">
            <div className="flex items-center justify-between fle-wrap">
                <div className="m-7 sm:mb-0">
                    <h3 className='text-headingColor font-[700] text-[2rem]'>Certification</h3>
                </div>
                <div className="flex gap-3">
                       <button onClick={() => setselectTab('ALL')} className='text-smallTetColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>ALL</button>
                       <button onClick={() => setselectTab('Web Design')} className='text-smallTetColor border border-solid border-smallTextColor py-2 px-4  rounded-[8px]'><i class="ri-arrow-left-circle-fill"></i></button>
                       <button onClick={() => setselectTab('Ux Design')} className='text-smallTetColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'><i class="ri-arrow-right-circle-fill"></i></button>
                </div>
                

            </div>
            <div className='flex items-center gap-4 flex-wrap mt-12 '>
                    {
                        portfolios?.slice(0,nextItems)?.map((portfolio,index) =>
                        (
                            <div 
                            key={index}
                            data-aos='fade-zoom-in'
                            data-aos-delay='50'
                            data-aos-duration='1000'
                            className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                                <figure>
                                    <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
                                </figure>
                                <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <button onClick={() => showModalHandler(portfolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] easy-in duration-200'>
                                          See details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }

                </div>
                <div className='text-center mt-6'>
                <button onClick={loadMoreHandler} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] easy-in duration-200'>
                Load More
                </button>  
                </div>
        </div> 
        {
            showModel && <Modal setShowModal={setShowModal} activeID={activeID}/>
        }
    </div>
  )
}

export default Portfolio