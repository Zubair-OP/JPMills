import React from 'react'

function About() {
    return (
        <div className='relative w-full bg-[#E9E5E3] min-h-screen'>
            <div className='container mx-auto lg:px-6 py-14 flex flex-col lg:flex-row'>
                <div className='lg:w-1/2 w-full h-[50vh]'>
                    <img src="/images/KML-about-us-picture-V2.webp" className='h-full w-full object-cover px-5' alt="KML About Us" />
                </div>
                <div className='lg:w-1/2 w-full h-full px-5'>
                    <h2 className='lg:text-[3vw] pt-5 lg:pt-0 text-[5vw] font-[two] text-[#404040] mb-5 uppercase text-center lg:text-left'>About</h2>
                    <p className='lg:text-sm text-xs font-[three] text-[#404040]'>
                        At JP Mills Limited, sustainability and innovation are at the core of everything we do. Since 1948, we have been a pioneer in Pakistan's textile industry, producing premium fabrics from our state-of-the-art facility in Lahore for leading global brands.
                        <p className='lg:text-sm text-xs font-[three] text-[#404040] lg:mt-10'>
                            With decades of expertise, we are dedicated to responsible production, ensuring that every fabric meets the highest standards of quality and ethics. Driven by a rich heritage and a forward-thinking approach, we continue to shape the future of textiles.
                        </p>
                    </p>
                    <p className='underline lg:text-xl text-md uppercase font-[three]  lg:mt-10 mt-5 text-[#161915] text-center lg:text-left'> Read More</p>
                </div>
            </div>
            <div className='w-full flex flex-col lg:flex-row justify-evenly items-center'>
            <div className='flex flex-col items-center mb-6'>
                    <img src="images/icons8-america-100-1.png" alt="Graph Icon" className="h-16 w-16 object-contain mb-2" />
                    <p className='text-[#748E81] text-3xl font-[one]'>20</p>
                    <p className='font-[four] text-sm'>Countries</p>
                </div>
                <div className='flex flex-col items-center  mb-6'>
                    <img src="images/icons8-sales-100-1.png" alt="Graph Icon" className="h-16 w-16 object-contain mb-2" />
                    <p className='text-[#748E81] text-3xl font-[one]'>$  124  M</p>
                    <p className='font-[four] text-sm'>Annual Sales</p>
                </div>
                <div className='flex flex-col items-center  mb-6'>
                    <img src="images/icons8-graph-100-1.png" alt="Graph Icon" className="h-16 w-16 object-contain mb-2" />
                    <p className='text-[#748E81] text-3xl font-[one]'>124 M</p>
                    <p className='font-[four] text-sm'>Meters Yearly Capacity</p>
                </div>
                <div className='flex flex-col items-center pb-3'>
                    <img src="images/icons8-workers-100-1.png" alt="Graph Icon" className="h-16 w-16 object-contain mb-2" />
                    <p className='text-[#748E81] text-3xl font-[one]'>2100</p>
                    <p className='font-[four] text-sm'>Employees</p>
                </div>

            </div>
        </div>
    )
}

export default About
