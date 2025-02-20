import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Skeleton, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=3126672c16d21f8a4e4bd93c162f803e&language=en-US&page=${page}`
        );
        if (response.data.results.length > 0) {
          setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const loadMoreMovies = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#032541]">Upcoming Movies</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <Input
          placeholder="Search for a movie"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full md:w-1/3"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading && page === 1
          ? Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} active avatar paragraph={{ rows: 3 }} />
            ))
          : filteredMovies.map((movie) => (
              <Card
                key={movie.id}
                hoverable
                cover={
                  <img
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="h-72 object-cover"
                  />
                }
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <Meta
                  title={movie.title}
                  description={
                    <div className="mt-2">
                      <p>Release Date: {movie.release_date}</p>
                      <p>Rating: {movie.vote_average}</p>
                    </div>
                  }
                />
              </Card>
            ))}
      </div>

      {hasMore && !loading && (
        <div className="flex justify-center mt-6">
          <Button onClick={loadMoreMovies} type="primary" className="bg-[#032541] hover:bg-[#064663] text-white">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default UpcomingMovies;
