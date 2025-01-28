import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h1>About Travel Planner</h1>
      <p className="lead">
        <h3>
          Welcome to Travel Planner Assistant – your ultimate companion for planning memorable journeys! Our app simplifies your travel planning process and makes it a breeze.
        </h3>
        <p>Why Choose Us?</p>
        Planning a trip can be overwhelming with so many details to consider. From finding the best destinations to checking weather forecasts, a lot to organize. Travel Planner Assistant is here to make that easy, allowing you to:
        <ul>
          <li>Discover Destinations: Search for exciting places to visit based on your preferences, budget, or travel style.</li>
          <li>Get Accurate Weather Information: Plan your trip with confidence by checking weather forecasts for your chosen destinations, ensuring you're prepared for any conditions.</li>
        </ul>
        <h5 className="font-weight-bold text-muted" style={{ fontSize: "1.1rem" }}>Our Mission</h5>
        <p>We believe travel should be an enjoyable and stress-free experience. Our mission is to make trip planning simple, enjoyable, and efficient, giving you more time to focus on making lasting memories.</p>

        <h5 className="font-weight-bold text-muted" style={{ fontSize: "1.1rem" }}>Our Vision</h5>
        <p>To be the go-to platform for travelers around the world, providing easy-to-use tools that help them plan, organize, and make the most of their adventures.</p>

        <h5 className="font-weight-bold text-muted" style={{ fontSize: "1.1rem" }}>Get Started</h5>
        <p>Ready to plan your next trip? Start by searching for destinations, checking the weather.</p>
      </p>
    </div>
  );
};

export default About;
