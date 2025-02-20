import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import 'antd/dist/reset.css'; 
import Home from './pages/Home';
import Booking from './pages/Booking';
import Header from './components/Header';
import Footer from './components/Footer';
import PopularMovies from './pages/PopularMovies';
import PopularTVShows from './pages/PopularTVShows';
import PopularPeople from './pages/PopularPeople';
import NowPlayingMovies from './pages/NowPlayingMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import TopRatedMovies from './pages/TopRatedMovies';
import AiringTodayTVShows from './pages/AiringTodayTVShows';
import TopRatedTVShows from './pages/TopRatedTVShows';
import OnTVShows from './pages/OnTVShows';
import More from './pages/More';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Router>
      <Header /> 
      <div className="min-h-screen"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<DetailsPage />} />
          <Route path='/tv-show/:id' element={<DetailsPage/>}/>
          <Route path="/movies/popular" element={<PopularMovies />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path='/tv-shows/popular' element={<PopularTVShows />} />
          <Route path="/people/popular" element={<PopularPeople />} />
          <Route path='/movies/now-playing' element={<NowPlayingMovies />} />
          <Route path='/movies/upcoming' element={<UpcomingMovies />} />
          <Route path='/movies/top-rated' element={<TopRatedMovies />} />
          <Route path='/tv-shows/airing-today' element={<AiringTodayTVShows />} />
          <Route path='/tv-shows/top-rated' element={<TopRatedTVShows />} />
          <Route path='/tv-shows/on-tv' element={<OnTVShows />} />
          <Route path='/more' element={<More />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
