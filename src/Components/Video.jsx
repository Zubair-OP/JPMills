import React from 'react'

function Video() {
  return (
    <div className="absolute w-full h-screen top-0 left-0">
      <video 
        loop 
        muted 
        autoPlay 
        playsInline 
        className="w-full h-full object-cover" 
        src="/Madia/Website-Background-Loop-Video-Final-HD.mp4"
      />
    </div>
  )
}

export default Video
