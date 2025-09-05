import React from 'react'

function Sustainable() {
    return (
        <div>
            <div className='w-full lg:h-[80vh] bg-[#748E81] py-8 lg:py-6'>
                <h2 className='text-center lg:font-[four] font-[two] uppercase lg:text-[2.5rem] text-[1.5rem] pb-8 lg:pb-0 text-white'>Sustainability</h2>
                <div className='flex flex-col lg:flex-row justify-between w-full h-full gap-8 lg:gap-16 px-5 lg:px-16'>
                    <div className='w-full lg:w-1/2 h-[200px] lg:h-full flex items-center justify-center'>
                        <img className='w-full h-full object-contain lg:object-cover' src="https://www.kohinoormills.com/wp-content/uploads/2024/09/KML-sustainability-logo.svg" alt="Sustainability Logo" />
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col justify-center lg:pl-8'>
                        <p className='text-white font-[three] leading-relaxed lg:text-lg text-sm lg:mb-2 mb-6'>As a leading textile manufacturer, we advance sustainability by reducing carbon emissions, conserving water, and upholding ethical practices.</p>
                        <div className='space-y-6 lg:space-y-0'>
                            <div>
                                <p className='text-white font-[three] lg:text-lg text-sm flex items-center'>
                                    <span className='font-[two] lg:text-[3rem] text-[2rem] mr-4'>80%</span>
                                    thermal energy generated via agricultural biomass.
                                </p>
                            </div>
                            <div>
                                <p className='text-white font-[three] lg:text-lg text-sm flex items-center'>
                                    <span className='font-[two] lg:text-[3rem] text-[2rem] mr-4'>30%</span>
                                    wastewater is reused in our processes.
                                </p>
                            </div>
                            <div>
                                <p className='text-white font-[three] lg:text-lg text-sm flex items-center'>
                                    <span className='font-[two] lg:text-[3rem] text-[2rem] mr-4'>100%</span>
                                    waste diverted from landfills.
                                </p>
                            </div>
                        </div>
                        <p className='underline text-white lg:text-xl text-lg mt-8 lg:mt-0 cursor-pointer hover:text-gray-200 transition-colors'>Read More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sustainable
