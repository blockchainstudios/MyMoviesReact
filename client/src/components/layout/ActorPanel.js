import React from 'react';

function ActorPanel() {
  return (
    <div className='actor-panel'>
      <div className='grid-1'>
        <div className='actor'>
          <img src={require('../../assets/actors/judy.jpg')} alt='' />
        </div>

        <div className='actor'>
          <img src={require('../../assets/actors/eryn.jpg')} alt='' />
        </div>

        <div className='actor'>
          <img src={require('../../assets/actors/mike.png')} alt='' />
        </div>

        <div className='actor'>
          <img src={require('../../assets/actors/josh.jpeg')} alt='' />
        </div>

        <div className='actor'>
          <img src={require('../../assets/actors/zeke2.jpg')} alt='' />
        </div>
      </div>
    </div>
  );
}

export default ActorPanel;
