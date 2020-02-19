import React from 'react';
// Layout Components
import Sidebar from '../layout/Sidebar';
import Balance from '../layout/BalanceCard';
import BurgerMenu from '../layout/BurgerMenu';
import FilmNavbar from '../layout/FilmNavbar';
import Footer from '../layout/Footer';
import VideoContainer from '../layout/VideoContainer';
// Page Components
import ActorThumbnail from '../layout/ActorThumbnail';
import ActorPanel from '../layout/ActorPanel';
import MoneyButton from '@moneybutton/react-money-button';

// Styles
import '../../styles/Homepage.scss';
function Homepage() {
  return (
    <div>
      <FilmNavbar className='hide-sm' />
      <div className='sidebar hide-sm'>
        <a href='/lordTimmy' target='_blank'>
          <img
            src={require('../../assets/films/LordTimmy.png')}
            alt='Lord Timmy'
            className='lt-sidebar hide-sm'
          />
        </a>
        <h5 className='hide-sm'>LORD TIMMY & THE MYSTERY OF THE LAST MASTER</h5>
        <h6 className='hide-sm'>WRITER/DIRECTOR/PRODUCER</h6>
        <h6>TEODORO RIVERA, III</h6>
        <Sidebar />
      </div>
      <div className='homepage'>
        <div className='home-main'>
          <div className='grid-3'>
            <VideoContainer
              mp4Clip='https://d1d6cqvpuot10w.cloudfront.net/clips/08jul19busted.mp4'
              width='320'
              height='240'
            />
            <VideoContainer
              mp4Clip='https://d1d6cqvpuot10w.cloudfront.net/clips/09jul19end_bridge.mp4'
              width='320'
              height='240'
            />
            <VideoContainer
              mp4Clip='https://d1d6cqvpuot10w.cloudfront.net/clips/08jul19lab.mp4'
              width='320'
              height='240'
            />

            <VideoContainer
              mp4Clip='https://d1d6cqvpuot10w.cloudfront.net/clips/08jul19stairs.mp4'
              width='320'
              height='240'
            />
            <VideoContainer
              mp4Clip='https://d1d6cqvpuot10w.cloudfront.net/clips/08jul19sunrise.mp4'
              width='320'
              height='240'
            />
            <VideoContainer
              mp4Clip='https://d1d6cqvpuot10w.cloudfront.net/clips/08jul19villarun.mp4'
              width='320'
              height='240'
            />

            <VideoContainer
              mp4Clip='https://d1d6cqvpuot10w.cloudfront.net/clips/09jul19end_bridge.mp4'
              width='320'
              height='240'
            />
            <VideoContainer
              mp4Clip='https://d1d6cqvpuot10w.cloudfront.net/clips/09jul19henry_under_bridge.mp4'
              width='320'
              height='240'
            />
            <VideoContainer
              mp4Clip='https://d1d6cqvpuot10w.cloudfront.net/clips/16jul19henry_drew_bs720.mp4'
              width='320'
              height='240'
            />
          </div>
          <div className='grid-1'>
            <VideoContainer
              mp4Clip='https://d1d6cqvpuot10w.cloudfront.net/clips/1080.mp4'
              width='320'
              height='240'
            />
          </div>
          {/* <MoneyButton
              to='<your-bitcoin-address-here>'
              amount='1'
              currency='USD'
            /> */}
          {/* <Balance /> */}
          {/* Navbar 2 */}
          {/* Sidebar - Contact Cast members */}
          {/*  5 item rows of video thumbnails */}
          {/* User Burger Menu */}
          {/* HandCash Account Balance */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*Add Actor Panel for responsive Setting  */}
          <br />
          <hr />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
