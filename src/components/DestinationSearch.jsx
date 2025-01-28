import React, { useState } from "react";

const DestinationSearch = () => {
  const [maxPrice, setMaxPrice] = useState(""); 
  const [destinations, setDestinations] = useState([]); 
  const [error, setError] = useState(null); 

  // Function to fetch destination details (using mock data with price)
  const fetchDestinations = async (maxPrice) => {
    try {
      const mockDestinations = [
        { destination: "Paris", price: { total: 450 }, details: "Airfare, accommodation, and meals included." },
        { destination: "London", price: { total: 600 }, details: "Airfare and city tour included." },
        { destination: "Tokyo", price: { total: 750 }, details: "Airfare, accommodation, and sightseeing included." },
        { destination: "Rome", price: { total: 300 }, details: "Airfare and guided city tours included." },
        { destination: "New York", price: { total: 800 }, details: "Airfare and accommodation in Manhattan included." },
      ];

      // Filter destinations based on the maxPrice
      const filteredDestinations = mockDestinations.filter(
        (dest) => dest.price.total <= maxPrice
      );
      return filteredDestinations; 
    } catch (error) {
      console.error("Error fetching destinations:", error);
      throw error;
    }
  };

  const handleSearch = async () => {
    if (!maxPrice) {
      setError("Please provide a maximum budget.");
      return;
    }

    try {
      const results = await fetchDestinations(maxPrice);
      setDestinations(results); 
      setError(null); 
    } catch (err) {
      setError("Failed to fetch destinations. Please try again.");
      setDestinations([]); 
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Search Travel Destinations</h2>

      <div className="mb-3">
        <label className="form-label">Max Budget (USD)</label>
        <input
          type="number"
          className="form-control"
          placeholder="e.g., 500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>

      {error && <p className="text-danger mt-3">{error}</p>}

      <div className="mt-4">
        {destinations.length > 0 && (
          <div>
            <h4>Available Destinations:</h4>
            <ul className="list-group">
              {destinations.map((dest, index) => (
                <li key={index} className="list-group-item">
                  <strong>Destination:</strong> {dest.destination} |{" "}
                  <strong>Price:</strong> ${dest.price.total} |{" "}
                  <strong>Details:</strong> {dest.details}
                </li>
              ))}
            </ul>
          </div>
        )}

        {destinations.length === 0 && maxPrice && (
          <p className="text-danger mt-3">
            No destinations available within the specified budget.
          </p>
        )}
      </div>
    </div>
  );
};

export default DestinationSearch;
