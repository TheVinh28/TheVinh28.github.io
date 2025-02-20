import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Skeleton, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const PopularPeople = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/popular?api_key=3126672c16d21f8a4e4bd93c162f803e&language=en-US&page=${page}`
        );
        if (response.data.results.length > 0) {
          setPeople((prevPeople) => [...prevPeople, ...response.data.results]);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching popular people:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, [page]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const loadMorePeople = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#032541]">Popular People</h1>

      <div className="flex justify-center mb-6">
        <Input
          placeholder="Search for a person"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full md:w-1/3"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading && page === 1
          ? Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} active avatar paragraph={{ rows: 2 }} />
            ))
          : filteredPeople.map((person) => (
              <Card
                key={person.id}
                hoverable
                cover={
                  <img
                    alt={person.name}
                    src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                    className="h-72 object-cover"
                  />
                }
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => navigate(`/person/${person.id}`)}
              >
                <Meta
                  title={person.name}
                  description={`Known for: ${person.known_for
                    .map((work) => work.title || work.name)
                    .join(', ')}`}
                />
              </Card>
            ))}
      </div>

      {hasMore && !loading && (
        <div className="flex justify-center mt-6">
          <Button onClick={loadMorePeople} type="primary" className="bg-[#032541] hover:bg-[#064663] text-white">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default PopularPeople;