import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Skeleton, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const OnTVShows = () => {
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/on_the_air?api_key=3126672c16d21f8a4e4bd93c162f803e&language=en-US&page=${page}`
        );
        if (response.data.results.length > 0) {
          setTVShows((prevTVShows) => [...prevTVShows, ...response.data.results]);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTVShows();
  }, [page]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const loadMoreTVShows = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const filteredTVShows = tvShows.filter((tvShow) =>
    tvShow.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#032541]">On TV Shows</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <Input
          placeholder="Search for a TV show"
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
          : filteredTVShows.map((tvShow) => (
              <Card
                key={tvShow.id}
                hoverable
                cover={
                  <img
                    alt={tvShow.name}
                    src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                    className="h-72 object-cover"
                  />
                }
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => navigate(`/tv/${tvShow.id}`)}
              >
                <Meta
                  title={tvShow.name}
                  description={
                    <div className="mt-2">
                      <p>First Air Date: {tvShow.first_air_date}</p>
                      <p>Rating: {tvShow.vote_average}</p>
                    </div>
                  }
                />
              </Card>
            ))}
      </div>

      {hasMore && !loading && (
        <div className="flex justify-center mt-6">
          <Button onClick={loadMoreTVShows} type="primary" className="bg-[#032541] hover:bg-[#064663] text-white">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default OnTVShows;