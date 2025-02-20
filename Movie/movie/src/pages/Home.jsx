import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spin } from "antd";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularMovies, topRatedMovies, nowPlayingMovies] = await Promise.all([
          axios.get("https://api.themoviedb.org/3/movie/popular?api_key=3126672c16d21f8a4e4bd93c162f803e&language=en-US&page=1"),
          axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=3126672c16d21f8a4e4bd93c162f803e&language=en-US&page=1"),
          axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=3126672c16d21f8a4e4bd93c162f803e&language=en-US&page=1"),
        ]);

        setMovies(popularMovies.data.results);
        setTopRated(topRatedMovies.data.results);
        setNowPlaying(nowPlayingMovies.data.results);
        fetchTrailers(popularMovies.data.results.slice(0, 5));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  const fetchTrailers = async (movies) => {
    try {
      const trailersData = await Promise.all(
        movies.map(async (movie) => {
          const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=3126672c16d21f8a4e4bd93c162f803e`);
          const trailer = res.data.results.find((vid) => vid.type === "Trailer");
          return { ...movie, trailerKey: trailer ? trailer.key : null };
        })
      );
      setTrailers(trailersData);
    } catch (error) {
      console.error("Error fetching trailers:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Slider className="w-full h-[500px]" autoplay infinite>
        {movies.slice(0, 5).map((movie) => {
          const backdrop = movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : "https://via.placeholder.com/1280x720?text=No+Image";

          return (
            <div key={movie.id} className="relative w-full h-[500px]">
              <img src={backdrop} alt={movie.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute bottom-20 left-10 text-white max-w-md">
                <h1 className="text-3xl font-bold">{movie.title}</h1>
                <p className="mt-2 text-sm">{movie.overview ? movie.overview.substring(0, 120) : "No description available"}...</p>
                <Link to={`/movie/${movie.id}`} className="mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Watch Now</Link>
              </div>
            </div>
          );
        })}
      </Slider>

      <MovieSection title="🔥 Popular Movies" movies={movies} />
      <MovieSection title="🏆 Top Rated Movies" movies={topRated} />
      <MovieSection title="🎬 Now Playing" movies={nowPlaying} />

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🎥 Movie Trailers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trailers.map((movie) => (
            movie.trailerKey && (
              <div key={movie.id} className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-white mb-2">{movie.title}</h3>
                <iframe className="w-full h-56" src={`https://www.youtube.com/embed/${movie.trailerKey}`} allowFullScreen></iframe>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

const MovieSection = ({ title, movies }) => (
  <div className="mt-12">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.slice(0, 6).map((movie) => (
        <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-72 object-cover" />
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p className="text-sm text-gray-400">⭐ {movie.vote_average}</p>
            <Link to={`/movie/${movie.id}`} className="mt-2 inline-block text-blue-400 hover:underline">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
