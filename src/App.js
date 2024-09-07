import React, { useState, useRef } from 'react';
import './App.css';  // Impor file CSS untuk styling

function VideoPost({ videoSrc, accountName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-post">
      <h3>{accountName}</h3>
      <video ref={videoRef} width="600" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Video Posting</h1>
      <VideoPost 
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" 
        accountName="Leodionis"
      />
      <h1>Video Posting</h1>
      <VideoPost 
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" 
        accountName="Leodionis"
      />
    </div>
  );
}

export default App;
