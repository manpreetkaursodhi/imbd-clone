import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './movieDesc.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Movies from '../../components/movies/movies';
import { useState, useEffect } from 'react';

function MovieDesc() {
      const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('https://imdb-api.com/en/API/Top250Movies/k_rv6soupk'
        )
            .then(response =>
                response.json())
            .then(data => setMovies(data.items));
    }, [])
  return (
    <>
    <Navbar />
    <div className='movie-detail' style={{width:'100%', height:'100vw',  background: 'rgb(79,78,84)',
  background: 'linear-gradient(90deg, rgba(79,78,84,1) 0%, rgba(35,35,38,1) 35%, rgba(104,105,105,1) 100%)'}}>
    {movies.slice(0,1).map(data=> (
  <div className='movie-card'  key={data.id}>
  <h3>{data.title}</h3>
  <ul className='info' style={{whiteSpace:'nowrap'}}>
    <li style={{display:'inline-block', padding:'10px'}}>{data.year}</li>.
    <li style={{display:'inline-block', padding:'10px'}}>{data.rank}</li>
  </ul>
  <img src={data.image} alt='' style={{height:'18rem', width:'12rem'}}></img>
  <div className='detail'>
    <h3>Director</h3>
    <h3>Writers</h3>
    <h3>Stars</h3>
  </div>
  <button className='add'> <FontAwesomeIcon icon={faPlus} />    Add To Watchlist</button>
</div>
    ))}
    
    </div>
    </>
  )
}

export default MovieDesc;