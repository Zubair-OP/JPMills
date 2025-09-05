import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Footer() {
  return (
    <footer className='w-full lg:h-[35vh] bg-[#464646] font-[three] py-2'>
      <div className='flex justify-center py-5'>
        <img src="public\images\kml-logo-1.png" alt="" />
      </div>
      <hr className='text-white'/>
      <div className='w-full flex lg:mt-10 mt-2 px-3 gap-5 justify-between items-center'>
        <div className='text-white lg:text-sm text-[8px] lg:text-[1.3vw] tracking-tight'>
        <p>2025 Kohinoor Mills Limited. All rights reserved.</p>
        </div>
        <div className='flex gap-4 justify-center items-center'>
        <i className="ri-facebook-fill bg-[#A3A3A3] lg:p-1 rounded-full"></i>
        <i class="ri-instagram-line bg-[#A3A3A3] lg:p-1 rounded-full"></i>
        <i class="ri-linkedin-fill bg-[#A3A3A3] lg:p-1 rounded-full"></i>
        <i class="ri-youtube-fill bg-[#A3A3A3] lg:p-1 rounded-full"></i>
        </div>
        <div className='flex lg:gap-4 gap-2 whitespace-nowrap text-white text-[8px] lg:text-[1.3vw] tracking-tight items-center'>
            <h4 className=''>Site Map</h4>
            <h4 className=''>Terms of Use</h4>
            <h4 className=''>Privacy Policy</h4>
        </div>
       
      </div>
    </footer>
  )
}

export default Footer
