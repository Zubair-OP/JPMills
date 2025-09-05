import React from 'react'

function Customer() {
  return (
    <div>
      <div className='w-full lg:h-[40vh] bg-[#E9E5E3] relative pb-5'>
        <h2 className='lg:font-[four] lg:text-[2.5vw] text-[9vw] font-[one] uppercase text-center py-10'>Customers</h2>
        <div className='w-full flex flex-col lg:flex-row gap-10 items-center justify-evenly'>
          <img className='lg:w-25 w-[40vw] h-10' src="images/Banana-Republic.png" alt="" />
          <img className='lg:w-25 w-[40vw] h-10' src="images/next.png" alt="" />
          <img className='lg:w-25 w-[40vw] h-10' src="images/zara-1.png" alt="" />
          <img className='lg:w-25 w-[40vw] h-10' src="images/levi-logo-1.png" alt="" />
          <img className='lg:w-25 w-[40vw] h-10' src="images/lee.png" alt="" />
          <img className='lg:w-25 w-[40vw] h-10' src="images/Khaadi-logo.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Customer
