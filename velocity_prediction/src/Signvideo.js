
import './Video.css'; // Import CSS file for styling
import driveVideo from './Output_Video1.mp4'; 
import challengeVideo from './Challenge_Out_Video.mp4';
import SignDvideo from'./demo.mp4'// Import video file
import Mvi from './MVI.mp4';
import React, { useRef, useState } from 'react';


function Signvideo() {

    const videoRef = useRef(null);
    const [playbackSpeed, setPlaybackSpeed] = useState(1); // Initial playback speed
    const [selectedVideo, setSelectedVideo] = useState(SignDvideo); // Default video
  
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
        <h1>Sign Detection Using YOLO V2</h1>
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
            <option value={SignDvideo}>Detected Video</option>
            <option value={Mvi}>Original Video</option>
          </select>
        </div>
      </div>
    );
  }
  

export default Signvideo;
