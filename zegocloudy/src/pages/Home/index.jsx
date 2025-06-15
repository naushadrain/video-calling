import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './HomePage.css'
function HomePage() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (value.trim()) {
      navigate(`/room/${value}`);
    }
  }, [navigate, value]);

  return (
    <div className="homepage-container">
      <div className="homepage-card">
        <h2 className="homepage-title">Join a Video Room</h2>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
          className="homepage-input"
        />
        <button onClick={handleJoinRoom} className="homepage-button">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default HomePage;
