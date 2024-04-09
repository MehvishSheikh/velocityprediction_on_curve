import React, { useState, useEffect } from 'react';

function MaskedVideo() {
  const [frames, setFrames] = useState([]);

  useEffect(() => {
    // Fetch processed frames from the backend when the component mounts
    fetch('/processed_frames')
      .then(response => response.json())
      .then(data => setFrames(data))
      .catch(error => console.error('Error fetching processed frames:', error));
  }, []);

  return (
    <div>
      <h1>Processed Video</h1>
      <div className="video-container">
        {frames.map((frame, index) => (
          <img key={index} src={`data:image/jpeg;base64,${frame}`} alt={`Frame ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default MaskedVideo;
