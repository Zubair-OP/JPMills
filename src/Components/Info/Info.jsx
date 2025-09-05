import React from 'react'

function Info() {
  return (
    <div>
      <div className='w-full lg:h-[80vh] h-[50vh] lg:px-1 px-5 bg-[#E9E5E3] flex justify-between items-center'>
        <div className='lg:w-[63vw] w-[50vw]'>
            <h2 className='lg:text-[2.7vw] text-[5vw] lg:font-[four] font-[one] lg:px-[15%] px-[5%] uppercase'>Get comfortable with TracK </h2>
            <p className='lg:pl-[15%] pl-[5%] lg-text-sm text-xs font-[two] lg:mt-1 mt-4'>Our cutting-edge traceability system ensures transparency from yarn to garment. By tracking every stage of production, we make each fabric's journey clear and verifiable, reinforcing our commitment to quality and trust.</p>
        </div>
        <div className='w-[50vw] h-full flex justify-center items-center' >
            <img className='w-1/2 h-1/2 object-cover lg:scale[0.5]' src="https://www.kohinoormills.com/wp-content/uploads/2024/09/trsck-and-trace-v2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Info
