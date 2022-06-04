import React from 'react';
import './playArea.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faExpand, faEllipsisV, faPlay, faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import Watch from '../watch/Watch';
import Navbar from '../navbar/Navbar';

function PlayArea() {
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
    <h3 style={{ fontSize:'2.3rem',paddingTop:'35px',marginLeft:'60rem', color:'rgb(221, 195, 63)'}}>Up Next</h3>
    <div className='play-area'>
    
        <div className='screen'>
            <div className='play'>
            <img src='./src/components/image/pexels-pixabay-60597.jpg' style={{height:'100%',width:'100%'}} alt=''></img>
            </div>
            <div className='tab' style={{backgroundColor:'black',whiteSpace:'nowrap',fontSize:'16px'}}>
            <FontAwesomeIcon className='icon1' style={{display: 'inline-block',color:'grey',marginLeft:'10px',marginTop:'10px'}} icon={faPlay} />
            <h3 style={{display: 'inline-block', color:'white', marginLeft:'9px'}}>0:00</h3>
            <div className='icons' style={{display: 'inline-block',color:'grey', float:'right',marginTop:'10px',marginRight:'10px'}}>
            <FontAwesomeIcon style={{paddingLeft:'20px'}} icon={faVolumeUp} />
          <FontAwesomeIcon style={{paddingLeft:'20px'}} icon={faExpand} />
          <FontAwesomeIcon style={{paddingLeft:'20px'}}  icon={faEllipsisV} />
            </div>
           
            
            </div>


        </div>
        <div className='up-next' >
        {movies.slice(0, 3).map(data => (
            <>
            {/* <div className='movie-1'> */}
          <div className='movie-1' key={data.id}>
         <img src={data.image} className='img' alt=''></img>
          <FontAwesomeIcon className='up-icon'  icon={faPlayCircle} />
          <h5 className='title-h5'>{data.title}</h5>
          </div>
          {/* <div className='movie-2' key={data.id}>
          <img src={data.image} className='img' alt=''></img>
          <FontAwesomeIcon className='up-icon'  icon={faPlayCircle} />
          <h5 className='title-h5'>{data.title}</h5>
          </div>
          <div className='movie-3' key={data.id} >
          <img src={data.image} className='img' alt=''></img>
          <FontAwesomeIcon className='up-icon'  icon={faPlayCircle} />
          <h5 className='title-h5'>{data.title}</h5>
          </div> */}
          </>
        ))} 
        </div>
    
 </div>
    <Watch />
    </>
  )
}

export default PlayArea;