import React, { useRef } from 'react';
import './Video.css'; // Import CSS file for styling
import driveVideo from './Output_Video1.mp4'; // Import video file

function MaskedVideo() {
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="video-container">
      <h1>Masked Video</h1>
      <video
        ref={videoRef}
        className="video-player"
        controls
        onClick={togglePlay}
      >
        <source src={driveVideo} type="video/mp4" />
        {/* Add additional <source> elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default MaskedVideo;
