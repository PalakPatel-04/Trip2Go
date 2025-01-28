import React from "react";
import DestinationSearch from "../components/DestinationSearch";
import WeatherInfo from "../components/WeatherInfo";
const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Plan Your Travel</h1>
      <DestinationSearch />
      <WeatherInfo />
    </div>
  );
};

export default Home;
