import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spin } from "antd";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        setNews(response.data.posts);
      } catch (error) {
        console.error("Lỗi khi lấy tin tức:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Tin tức mới nhất
        </h1>
        {loading ? (
          <div className="flex justify-center">
            <Spin size="large" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {news.map((article) => (
              <Card
                key={article.id}
                title={article.title}
                bordered={false}
                className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                style={{ borderRadius: "12px", backgroundColor: "#fff", overflow: "hidden" }}
              >
                <p className="text-sm text-gray-600 mb-4">
                  {article.body.length > 150 ? `${article.body.slice(0, 150)}...` : article.body}
                </p>
                <a
                  href={`/news/${article.id}`}
                  className="text-blue-500 hover:text-blue-700 text-sm font-semibold"
                >
                  Đọc thêm
                </a>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
