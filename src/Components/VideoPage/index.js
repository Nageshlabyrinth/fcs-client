import React from 'react'
import videoFcs from '../images/videoforfcs.mp4'
import './index.css'
const video = () => {
  return (
    <><div className="video-background">
    {/* Container with autoplaying video background */}
    <div className="video-container">
      <video autoPlay muted loop className="video-bg">
        {/* Add your video source */}
        <source src={videoFcs} type="video/mp4" />
        {/* Add other video formats if needed */}
      </video>

      {/* Customized content */}
      <div className="custom-content">
        <h1>Your Heading</h1>
        <p>Your paragraphs here...</p>
        <button>Button</button>
      </div>
    </div>
    </div>
  </>
  )
}

export default video