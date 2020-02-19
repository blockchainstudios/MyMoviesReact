import React from 'react';
import '../../styles/ActorThumbnail.scss';

function ActorThumbnail(props) {
  return (
    <div>
      <a target='_blank' href={props.actorHref}>
        <img className='actor-thumbnail' src={props.imgSrc} alt='actor' />
      </a>
      <h6 className='actor-name'>{props.actorName}</h6>
    </div>
  );
}

export default ActorThumbnail;
