import React from 'react'

function Updates() {
  return (
    <div>
      <div className='lg:min-h-screen w-full bg-[#E9E5E3] flex justify-between'>
        <div className='left w-1/2 h-full flex items-center justify-center'>
            <img className='w-1/2 h-full object-cover lg:scale-[0.7] scale-[0.8]' src="https://kohinoormills.com/wp-content/uploads/2024/01/Final-KML-1.gif" alt="" />
        </div>
        <div className='w-1/2 flex flex-col lg:px-10 justify-center'>
            <h3 className='font-[one] lg:text-xl text-md'>FabriK</h3>
            <h2 className='font-[four] lg:text-[2.9vw] text-xl whitespace-nowrap'>Brand New App</h2>
            <p className='font-[three] lg:text-sm text-xs lg:mb-10'>FabriK, KML's digital library providing design & sourcing teams direct access to our products, and a companion to our 'Showroom in a Box'.</p>
            <p className='font-[four] lg:text-[2.4vw]'>Coming Soon!</p>
        </div>
      </div>
    </div>
  )
}

export default Updates
