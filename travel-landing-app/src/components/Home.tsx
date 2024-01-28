// Home.jsx

import React from "react";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="text-column">
          <h1> Discover Your Dream Destinations </h1>
          <p>
            Whether you seek the sun-soaked beaches of tropical paradises, the
            rich cultural tapestry of historic cities, or the breathtaking
            landscapes of nature's wonders, our team is here to curate the
            perfect itinerary for you.
          </p>
          <button className="button">Learn More</button>
        </div>
        <div className="image-column">
          <img
            src="https://i.pinimg.com/564x/86/d9/f6/86d9f622a81eefc02316ad98cef1e2c9.jpg"
            alt=""
            className="responsive-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
