import React from 'react';
import '../../styles/FilmmakerPage.scss';
function FilmmakersPage() {
  return (
    <div>
      <h1 className='text-center'> Filmmakers</h1>
      <div className='grid-2'>
        <section>
          <div className='card'>
            <img src='#' alt='Jordan Tate' />
            <h3>Bio</h3>
            <p className='profile-bio'>
              Jordan Tate is a productive screenwriter with a strong interest in
              thrillers, science fiction and fantasy stories; she also focuses
              her attention on tormented characters and stories based on actual
              events. Alfred Hitchcock, James Cameron, Steven Spielberg, Tim
              Burton, Christopher Nolan and Stanley Kubrick have influenced her
              work. She loves to put her audience and readers on the wrong track
              with characters that are never what they seem to be.
            </p>
            <p className='profile-bio'>
              She often quotes the legendary movie "KING KONG"as being behind
              her vocation.
            </p>
            <p className='profile-info'>
              Her recent accomplishments include various assignments for several
              worldwide production companies especially in Europe and USA. She
              has had several screenplays optioned, and has penned numerous
              books adaptations and original screenplays.
            </p>
            <h3 className='filmmaker-header'>Specialities</h3>
            <ul>
              <li>
                <p>
                  <strong> Screenwriting </strong>
                </p>{' '}
              </li>

              <li>
                <p>- Fantasy</p>
              </li>
              <li>
                <p>- Thriller</p>
              </li>

              <li>
                <p>- Science-Fiction</p>
              </li>

              <li>
                <p>- Adventure</p>
              </li>
            </ul>
            <h3 className='filmmaker-header'>Works</h3>
            <div className='grid-3'></div>
            <h3 className='filmmaker-header'>Get in Touch</h3>
            <div className='text-center'>
              <ul className='social-icons'>
                <li>
                  <a className='facebook' href='#'>
                    <i className='fab fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a
                    className='twitter'
                    href='https://twitter.com/realmymovies'
                    target='_blank'
                  >
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a className='slack' href='#'>
                    <i className='fab fa-slack'></i>
                  </a>
                </li>
                <li>
                  <a className='linkedin' href='#'>
                    <i className='fab fa-linkedin'></i>
                  </a>
                  <li>
                    <a className='imdb' href='#'>
                      <i className='fab fa-imdb'></i>
                    </a>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className='card'>
            <img src='#' alt='Ted Rivera' />
            <h3 className='filmmaker-header'>Bio</h3>
            <p className='profile-bio'>---</p>
            <p className='profile-bio'>---</p>
            <p className='profile-info'>---</p>
            <h3 className='filmmaker-header'>Specialities</h3>
            <ul>
              <li>
                <p>
                  <strong> Screenwriting </strong>
                </p>{' '}
              </li>

              <li>
                <p> ---</p>
              </li>
              <li>
                <p> ---</p>
              </li>

              <li>
                <p>---</p>
              </li>

              <li>
                <p>---</p>
              </li>
            </ul>
            <h3 className='filmmaker-header'>Works</h3>
            <div className='grid-3'></div>
            <h3 className='filmmaker-header'>Get in Touch</h3>

            <div className='text-center'>
              <ul className='social-icons'>
                <li>
                  <a className='facebook' href='#'>
                    <i className='fab fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a
                    className='twitter'
                    href='https://twitter.com/realmymovies'
                    target='_blank'
                  >
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a className='slack' href='#'>
                    <i className='fab fa-slack'></i>
                  </a>
                </li>
                <li>
                  <a className='linkedin' href='#'>
                    <i className='fab fa-linkedin'></i>
                  </a>
                  <li>
                    <a className='imdb' href='#'>
                      <i className='fab fa-imdb'></i>
                    </a>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FilmmakersPage;
