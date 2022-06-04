import React, { useState, useEffect } from 'react';
import { Card, Input } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../navbar/Navbar';


function Shows() {
  const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
       fetch('https://imdb-api.com/en/API/Top250TVs/k_rv6soupk')
            .then(response =>
                response.json()). then(data => setAPIData(data.items));
          
    }, [])
  
 
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
      <>
      <Navbar />
     
        <div style={{ padding: 40 }}>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <Card.Group itemsPerRow={6} style={{ marginTop: 20,display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: 'auto'}}>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                             <div className='card' key={item.id}>   

           {/* <div className='card'>  */}
           <div className='image' >
             <img src={item.image} alt='' style={{width:'11rem', height:'14rem'}}></img>
             {/* <img src='./src/pexels-pixabay-60597.jpg' alt='' style={{ width: '11rem', height: '10rem' }}></img> */}
           </div>
           <div className='detail' style={{ backgroundColor: 'rgb(36, 38, 42)', width:'11rem', height:'12rem'}}>
             <div className='rating' style={{ whiteSpace: 'nowrap' }}>
               <FontAwesomeIcon className='icon1' style={{ display: 'inline-block', float: 'left', marginLeft: '10px', marginTop: '10px' }} icon={faStar} />
               <h5 style={{display:'inline-block'}}>{item.imDbRating}</h5>
               {/* <h5 style={{ display: 'inline-block' }}>IMDBRATING</h5> */}
               <FontAwesomeIcon className='icon2' style={{ display: 'inline-block', float: 'right', marginRight: '30px', marginTop: '10px' }} icon={faStar} />
             </div>
             <div className='title' style={{ marginLeft: '10px', float: 'left', lineHeight: '1.3rem' }} >
               <h3>{item.title}</h3>
               {/* <h3>Title of the movie is the name</h3> */}
             </div>
             <button className='watch-btn' style={{ marginLeft: '40px', marginTop: '10px' }}>Watch Option</button>
             <div className='trailer' style={{ color: 'white', whiteSpace: 'nowrap', marginTop: '20px' }}>
               <FontAwesomeIcon className='icon3' style={{ display: 'inline-block', float: 'left', marginLeft: '10px', marginTop: '10px' }} icon={faPlay} />
               <h5 style={{ display: 'inline-block', marginLeft: '15px', fontSize: '17px' }}>Trailer</h5>
               <FontAwesomeIcon className='icon4' style={{ display: 'inline-block', float: 'right', marginRight: '30px', marginTop: '12px' }} icon={faInfoCircle} />
             </div>
           </div>

           {/* </div> */}



         </div>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <div className='card' key={item.id}>   

                            {/* <div className='card'>  */}
                            <div className='image' >
                              <img src={item.image} alt='' style={{width:'11rem', height:'14rem'}}></img>
                              {/* <img src='./src/pexels-pixabay-60597.jpg' alt='' style={{ width: '11rem', height: '10rem' }}></img> */}
                            </div>
                            <div className='detail' style={{ backgroundColor: 'rgb(36, 38, 42)', width:'11rem', height:'12rem' }}>
                              <div className='rating' style={{ whiteSpace: 'nowrap' }}>
                                <FontAwesomeIcon className='icon1' style={{ display: 'inline-block', float: 'left', marginLeft: '10px', marginTop: '10px' }} icon={faStar} />
                                <h5 style={{display:'inline-block'}}>{item.imDbRating}</h5>
                                {/* <h5 style={{ display: 'inline-block' }}>IMDBRATING</h5> */}
                                <FontAwesomeIcon className='icon2' style={{ display: 'inline-block', float: 'right', marginRight: '30px', marginTop: '10px' }} icon={faStar} />
                              </div>
                              <div className='title' style={{ marginLeft: '10px', float: 'left', lineHeight: '1.3rem' }} >
                                <h3>{item.title}</h3>
                                {/* <h3>Title of the movie is the name</h3> */}
                              </div>
                              <button className='watch-btn' style={{ marginLeft: '40px', marginTop: '10px' }}>Watch Option</button>
                              <div className='trailer' style={{ color: 'white', whiteSpace: 'nowrap', marginTop: '20px' }}>
                                <FontAwesomeIcon className='icon3' style={{ display: 'inline-block', float: 'left', marginLeft: '10px', marginTop: '10px' }} icon={faPlay} />
                                <h5 style={{ display: 'inline-block', marginLeft: '15px', fontSize: '17px' }}>Trailer</h5>
                                <FontAwesomeIcon className='icon4' style={{ display: 'inline-block', float: 'right', marginRight: '30px', marginTop: '12px' }} icon={faInfoCircle} />
                              </div>
                            </div>
                 
                            {/* </div> */}
                 
                 
                 
                          </div>
                        )
                    })
                )}
            </Card.Group>
        </div>
        </>
    )
}

export default Shows;