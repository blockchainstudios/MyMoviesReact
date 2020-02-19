import React from 'react';
import '../../styles/VideoContainer.scss';

function VideoContainer(props) {
  return (
    <div className='video-container'>
      <video width={props.width} height={props.height} controls>
        <source src={props.mp4Clip} type='video/mp4' />
        <source src={props.oggClip} type='video/ogg' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoContainer;
