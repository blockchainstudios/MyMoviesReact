import React from 'react';
import '../../styles/AboutPage.scss';
import Footer from '../layout/Footer';
function AboutPage() {
  return (
    <div>
      <div className='grid-2'>
        <section>
          <br />
          <h2>
            About{' '}
            <strong>
              <em>
                <span className='my-color'>My</span>
                <span className='movies-color'>Movies</span>
              </em>
            </strong>
          </h2>
          <br />
          <p className='about-text'>
            MyMovies is a platform in which independent filmmakers, actors and
            supporting staff in the film industry can monetise and promote their
            content to fans and investors. Users of the platform can choose to
            invest in independent film projects and take a joint ownership stake
            of the finished product and any future sales of the product on the
            platform.{' '}
          </p>
          <p className='about-text'>
            Launched as a response to the unfavourable economic incentives
            offered to independent filmmakers, MyMovies provides users with a
            means to independently fund the entertainment they want to see.
          </p>
          <div className='about-image-container'>
            <img
              src={require('../../assets/partner-logos/logo-default.png')}
              alt='MyMovies Logo'
              className='mm-logo'
            />
          </div>
        </section>
        <section>
          <h2>Founder</h2>
          <h3>
            <em>Teodoro Rivera III</em>
          </h3>
          <br />
          <div className='about-image-container'>
            <img
              src={require('../../assets/actors/ted.jpeg')}
              alt='Ted Rivera'
            />
          </div>
          <p className='about-text'>
            Ted Rivera is an award winning filmmaker with over twenty-five years
            of production and development experience. His student film, the
            feature length The Night of the Chupacabra, received first prize
            awards at the North American Science Fiction Film Festival, The Palm
            Springs International Film Festival, and the Berkeley Latino Film
            Festival.
          </p>
          <p className='about-text'>
            {' '}
            Rivera, a Roger Corman trained producer, has been developing
            screenplays for the last fifteen years and his current slate of
            films at different budgets and genres, are now available now only at
            MyMovies.us. His first Producing assignment was Dinocroc, the Sci-Fi
            Channel breakout smash hit. As Co-Producer and assistant to Roger
            Corman's Head of Production, Rivera was responsible for the
            breakdown, schedule, and budget of the $1,000,000 film. Prior to
            making low budget films, Rivera was a development assistant to
            Academy Award Nominee Alexandra Rose and Academy Award Winner, Jana
            Sue Memel.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
