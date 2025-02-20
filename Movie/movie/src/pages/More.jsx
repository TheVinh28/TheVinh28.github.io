import React from 'react';

const More = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#032541] mb-6">About Movie Booking</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Welcome to <span className="font-semibold">Movie Booking</span>, your ultimate destination for booking movie tickets and exploring the world of entertainment. 
          Discover the latest movies, TV shows, and exclusive content all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#032541] mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At <span className="font-semibold">Movie Booking</span>, our mission is to provide a seamless and enjoyable experience for movie enthusiasts. Whether you’re looking for top-rated movies, 
            on-air TV shows, or upcoming releases, we aim to bring them all to your fingertips.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#032541] mb-4">Why Choose Us?</h2>
          <p className="text-gray-700">
            Our platform offers an intuitive interface, real-time updates, and an extensive library of content to ensure you never miss out on your favorite shows or movies. 
            Experience entertainment like never before with easy ticket booking and personalized recommendations.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#032541] mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Discover popular movies and TV shows</li>
            <li>Get updates on upcoming releases</li>
            <li>Book tickets effortlessly</li>
            <li>Explore detailed movie information</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#032541] mb-4">Stay Connected</h2>
          <p className="text-gray-700">
            Follow us on social media to stay updated with the latest in the entertainment world. Be the first to know about exclusive deals, trending movies, and special offers.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-700">
          Thank you for choosing <span className="font-semibold">Movie Booking</span>. We look forward to being a part of your entertainment journey. 
        </p>
      </div>
    </div>
  );
};

export default More;
