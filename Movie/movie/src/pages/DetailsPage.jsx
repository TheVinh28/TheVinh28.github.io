import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Spin, Typography, Card } from "antd";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [cast, setCast] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMovie = window.location.pathname.includes("/movie/"); 
  const apiType = isMovie ? "movie" : "tv"; 

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const detailsResponse = await axios.get(
          `https://api.themoviedb.org/3/${apiType}/${id}?api_key=3126672c16d21f8a4e4bd93c162f803e&language=en-US`
        );
        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/${apiType}/${id}/credits?api_key=3126672c16d21f8a4e4bd93c162f803e&language=en-US`
        );
        const recommendationsResponse = await axios.get(
          `https://api.themoviedb.org/3/${apiType}/${id}/recommendations?api_key=3126672c16d21f8a4e4bd93c162f803e&language=en-US`
        );

        setData(detailsResponse.data);
        setCast(creditsResponse.data.cast.slice(0, 20)); 
        setRecommendations(recommendationsResponse.data.results.slice(0, 10)); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchDetails();
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }, [id, apiType]);

  const handleRecommendationClick = (recId) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/${apiType === "movie" ? "movie" : "tv-show"}/${recId}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Spin size="large" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Title level={3} className="text-gray-700">
          {isMovie ? "Movie" : "TV Show"} not found
        </Title>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-2xl rounded-lg mt-8">
      <div
        className="flex flex-col md:flex-row gap-8 overflow-hidden relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 0 0 200px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="flex-shrink-0 relative z-10">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title || data.name}
            className="w-full md:w-80 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-between text-white">
          <div>
            <Title level={2} className="text-white">
              {data.title || data.name}
            </Title>
            <Paragraph className="text-gray-300 mt-2 leading-6">
              {data.overview || "No description available."}
            </Paragraph>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-gray-300">
              <strong>Release Date:</strong> {data.release_date || data.first_air_date || "N/A"}
            </p>
            <p className="text-gray-300">
              <strong>Rating:</strong> {data.vote_average || "N/A"}
            </p>
          </div>
          <Link to={`/booking/${data.id}`}>
            <Button
              type="primary"
              size="large"
              className="mt-6 w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              Đặt vé ngay
            </Button>
          </Link>
        </div>
      </div>

      {/* Diễn viên */}
      <div className="mt-8">
        <Title level={3}>Diễn viên</Title>
        <div className="flex gap-4 overflow-x-auto mt-4 pb-4">
          {cast.map((actor) => (
            <Card
              key={actor.id}
              hoverable
              className="w-40 flex-shrink-0"
              cover={
                actor.profile_path ? (
                  <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                ) : (
                  <div className="h-48 bg-gray-200 flex items-center justify-center">No Image</div>
                )
              }
            >
              <Meta title={actor.name} description={actor.character} />
            </Card>
          ))}
        </div>
      </div>

      {/* Gợi ý phim / TV Show */}
      <div className="mt-8">
        <Title level={3}>Gợi ý {isMovie ? "phim" : "TV Show"}</Title>
        <div className="flex gap-4 overflow-x-auto mt-4 pb-4">
          {recommendations.map((rec) => (
            <Card
              key={rec.id}
              hoverable
              className="w-48 flex-shrink-0"
              cover={
                rec.poster_path ? (
                  <img src={`https://image.tmdb.org/t/p/w200${rec.poster_path}`} alt={rec.title || rec.name} />
                ) : (
                  <div className="h-48 bg-gray-200 flex items-center justify-center">No Image</div>
                )
              }
            >
              <Meta title={rec.title || rec.name} />
              <Button
                type="primary"
                className="mt-2 bg-gradient-to-r from-blue-500 to-purple-600 w-full"
                onClick={() => handleRecommendationClick(rec.id)}
              >
                Xem chi tiết
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
