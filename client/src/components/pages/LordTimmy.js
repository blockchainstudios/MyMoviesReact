import React from 'react';
import VideoContainer from '../layout/VideoContainer';
import Footer from '../layout/Footer';
function LordTimmy() {
  return (
    <div className='lt-main-background '>
      <div className='lt-video-container'>
        <VideoContainer
          width='1042'
          height='568'
          mp4Clip='https://d1d6cqvpuot10w.cloudfront.net/clips/1080.mp4'
        />
      </div>
      <Footer />
    </div>
  );
}

export default LordTimmy;
