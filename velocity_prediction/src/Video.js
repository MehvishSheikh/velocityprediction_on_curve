import React, { useRef } from 'react';
import './Video.css'; // Import CSS file for styling
import driveVideo from './project_video.mp4'; // Import video file

function Video() {
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
      <h1>Original Video</h1>
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

export default Video;
