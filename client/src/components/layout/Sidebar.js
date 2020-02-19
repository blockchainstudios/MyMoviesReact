import React from 'react';
import ActorThumbnail from '../layout/ActorThumbnail';

function Sidebar() {
  return (
    <div className='hide-sm'>
      <h2 className='sidebar-header'>Cast</h2>
      <div className='baemail-contacts'>
        <ActorThumbnail
          actorHref='https://baemail.me/?to=eryn@moneybutton.com'
          imgSrc={require('../../assets/actors/eryn.jpg')}
          actorName='Eryn'
        />

        <ActorThumbnail
          actorHref='https://baemail.me/?to=josh@moneybutton.com'
          imgSrc={require('../../assets/actors/josh.jpeg')}
          actorName='Josh'
        />

        <ActorThumbnail
          actorHref='https://baemail.me/?to=judy@moneybutton.com'
          imgSrc={require('../../assets/actors/judy.jpg')}
          actorName='Judy'
        />

        <ActorThumbnail
          actorHref='https://baemail.me/?to=mikeplacencia@moneybutton.com'
          imgSrc={require('../../assets/actors/mike.png')}
          actorName='Mike Placencia'
        />

        <ActorThumbnail
          actorHref='https://baemail.me/?to=ezekelcruz@moneybutton.com'
          imgSrc={require('../../assets/actors/zeke2.jpg')}
          actorName='Ezekel Cruz'
        />
      </div>
      <h2 className='baemail-header'>Baemail</h2>
      <h4 className='contact-cast'>CONTACT CAST MEMBERS</h4>
    </div>
  );
}

export default Sidebar;
