import './App.css';
import PlayArea from './components/playArea/playArea';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import MovieDesc from './pages/movieDesc/movieDesc';
import Watchlist from './pages/watchlist/Watchlist';
import Movies from './components/movies/movies';
import Shows from './components/shows/shows';
import Registration from './components/SignUp/Registration';
import './style.css'
import Navbar from './components/navbar/Navbar';
import { GlobalProvider } from "./pages/watchlist/GlobalState";

function App() {

  return (
    <>
    <GlobalProvider>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signIn" element={
              <div >
                <Navbar />
                <Registration />
              </div>

            } />
            <Route path="/play" element={<PlayArea />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/movie/:imdbID" element={<MovieDesc />} />
            <Route path="/watchList" element={<Watchlist />} />
          </Routes>
        </div>
      </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
