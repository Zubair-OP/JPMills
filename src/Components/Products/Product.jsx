import React from 'react'

function Product() {
  const data = [{
    img1:'https://kohinoormills.com/wp-content/uploads/2024/12/cover.webp',
    img2:'https://kohinoormills.com/wp-content/uploads/2024/11/Upholstery-Final-kml.jpg',
    img3:'https://kohinoormills.com/wp-content/uploads/2024/12/workwearcover.webp',
    img4:'https://kohinoormills.com/wp-content/uploads/2025/01/technical-cover.jpg',
    img5:'https://kohinoormills.com/wp-content/uploads/2024/12/cover.webp'
  }]
  const imageUrls = Object.values(data[0])

  const png = [{
    image1:'images/icons8-jeans-100-1.png',
    image2:'images/icons8-sofa-with-buttons-100.png',
    image3:'images/icons8-fireman-coat-80.png',
    image4:'https://kohinoormills.com/wp-content/uploads/2024/09/KML-technical-icon-01.svg',
    image5:'images/icons8-paisley-100.png'
  }]
  const iconUrls = Object.values(png[0])

  return (
    
      <div className='w-full lg:h-[77vh] bg-[#748E81] relative pb-5'>
        <div>
          <h2 className='text-center text-white font-[four] pt-5 lg:text-[2.4vw] text-[7vw] uppercase'>Products</h2>
        </div>
        <div className='flex flex-col lg:flex-row justify-evenly items-center'>
          {imageUrls.map((src, index) => (
            <div 
              key={index} 
              className='lg:w-[18vw] w-[90vw] lg:h-[55vh] mt-7 relative group overflow-hidden lg:rounded-lg rounded-2xl shadow-lg'
            >
              <img 
                className='h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110' 
                src={src} 
                alt={`product-${index + 1}`} 
              />
              {/* Animated Icon */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <img 
                  src={iconUrls[index]} 
                  alt={`icon-${index + 1}`} 
                  className='w-20 h-20 opacity-0 translate-y-10 
                             group-hover:opacity-100 group-hover:translate-y-0 
                             transition-all duration-700 ease-out'
                />
                
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Product
