import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faCameraRetro, faStar, faPlay, faTelevision, faUsers, faInfoCircle, faTrophy, faPlusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Search from '../search/Search';

function Navbar() {
  
  return (
    <>
      <div className='navbar'>
        <div className='imdb-logo'>
          <h3>IMDb</h3>
        </div>
        <div className="menu-wrap">

          <input type="checkbox" className="toggler" />

          <div className="hamburger"><div></div></div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li><FontAwesomeIcon className='icon' icon={faHome} /><Link to="/">Home</Link></li>
                  <li><FontAwesomeIcon className='icon' icon={faHeart} /><Link to="/">All</Link></li>
                  <li><FontAwesomeIcon className='icon' icon={faCameraRetro} /><Link to="/movies">Movies</Link></li>
                  <li><FontAwesomeIcon className='icon' icon={faTelevision} /><Link to="/shows">TV Shows</Link></li>
                  <li><FontAwesomeIcon className='icon' icon={faUsers} /><a href="#">Celebs</a></li>
                  <li><FontAwesomeIcon className='icon' icon={faTrophy} /><a href="#">Awards & Events</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
 {/* <Search /> */}
        <div className='sides'>
          <ul className='list'>
            <li>IMDb Pro</li>
            <li><FontAwesomeIcon style={{ paddingRight: '0.2rem' }} icon={faPlusSquare} />Watchlist</li>
            <li><Link to='/signIn'> Sign In </Link></li>
          </ul>
        </div>

      </div>
    
    </>
  )
}

export default Navbar;