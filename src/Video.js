
import './Video.css'; // Import CSS file for styling
import driveVideo from './project_video.mp4'; 
import challengeVideo from './challenge_video.mp4';// Import video file

import React, { useRef, useState } from 'react';


function Video() {
  const videoRef = useRef(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(1); // Initial playback speed
  const [selectedVideo, setSelectedVideo] = useState(driveVideo); // Default video

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const changeSpeed = (speed) => {
    setPlaybackSpeed(speed);
    videoRef.current.playbackRate = speed;
  };

  const handleVideoChange = (e) => {
    setSelectedVideo(e.target.value);
    videoRef.current.load(); // Reload the video when changing
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
        <source src={selectedVideo} type="video/mp4" />
        {/* Add additional <source> elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="speed-selector">
        <label htmlFor="speed">Playback Speed:</label>
        <select
          id="speed"
          value={playbackSpeed}
          onChange={(e) => changeSpeed(parseFloat(e.target.value))}
        >
          <option value="0.5">0.5x</option>
          <option value="0.75">0.75x</option>
          <option value="1">1x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>
      <div className="video-selector">
        <label htmlFor="video">Select Video:</label>
        <select id="video" value={selectedVideo} onChange={handleVideoChange}>
          <option value={driveVideo}>Project Video</option>
          <option value={challengeVideo}>Another Video</option>
        </select>
      </div>
    </div>
  );
}

export default Video;
