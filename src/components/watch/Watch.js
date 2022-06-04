import React from 'react';
import './Watch.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-elastic-carousel';      

function Watch() {
  const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('  https://imdb-api.com/en/API/Top250Movies/k_rv6soupk'
        )
            .then(response =>
                response.json())
            .then(data => setMovies(data.items));
    }, [])
 console.log(movies);
  if(movies.length===0){
      return <h1>Loading...</h1>
  } 
  var breakpoints=[
      {
          width:1000,
          itemsToShow:6,
          itemsToScroll:3
      },
      {
          width:1500,
          itemsToScroll:3,
          itemsToShow:6
      }
  ]
console.log(movies);
    return (
   <>
            <div className='watch-section' style={{height:'100%'}}>
                <h3>What to watch</h3>
                <p>TV shows and movies just for you</p>
                <button style={{ border: 'none',
    background: 'none',
    color: 'aqua',
    cursor: 'pointer'}}>Sign in</button>
    
                <div className='movie-list'>
                    <Carousel breakPoints={breakpoints}>
                  {movies.map(data => ( 
             
                  <div className='card' key={data.id}>  
                     
                      {/* <div className='card'>  */}
                            <div className='image' >
                                <img src={data.image} alt='' style={{width:'11rem', height:'14rem'}}></img>
                                {/* <img src='./src/pexels-pixabay-60597.jpg' alt='' style={{width:'11rem', height:'10rem'}}></img> */}
                            </div>
                            <div className='detail' style={{backgroundColor:'rgb(36, 38, 42)', width:'11rem', height:'12rem'}}>
                            <div className='rating' style={{whiteSpace:'nowrap'}}>
                            <FontAwesomeIcon className='icon1' style={{display:'inline-block',float:'left',marginLeft:'10px',marginTop:'10px'}} icon={faStar} />
                            <h5 style={{display:'inline-block'}}>{data.imDbRating}</h5>
                            {/* <h5 style={{display:'inline-block'}}>IMDBRATING</h5> */}
                            <FontAwesomeIcon className='icon2' style={{display:'inline-block',float:'right',marginRight:'30px',marginTop:'10px'}} icon={faStar} />
                            </div>
                            <div className='title' style={{marginLeft: '10px',float:'left',lineHeight:'1.3rem'}} >
                                <h3>{data.title}</h3>
                                {/* <h3>Title of the movie is the name</h3> */}
                            </div>
                            <button className='watch-btn' style={{marginLeft:'40px',marginTop:'10px'}}>Watch Option</button>
                            <div className='trailer' style={{color:'white', whiteSpace:'nowrap',marginTop:'20px'}}>
                            <FontAwesomeIcon className='icon3' style={{display:'inline-block', float:'left',marginLeft:'10px',marginTop:'10px'}} icon={faPlay} />
                            <h5 style={{display:'inline-block', marginLeft:'15px',fontSize:'17px'}}>Trailer</h5>
                            <FontAwesomeIcon className='icon4' style={{display:'inline-block',float:'right',marginRight:'30px', marginTop:'12px'}} icon={faInfoCircle} />
                            </div>
                            </div>
                    
                        {/* </div> */}
                       

                     
                 </div>
             
                  ))}   
                   </Carousel> 
                   </div>
                  
        
        
        
         </div> 
               
</>
            
  )
}

export default Watch;