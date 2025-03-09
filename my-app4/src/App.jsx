import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // State to store user data
  const [user, setUser] = useState(null);

  // Function to fetch user data from the Random User API
  const fetchUser = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/"); // API call
      setUser(response.data.results[0]); // Store first user in state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch user when the component loads
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Random User API Integration</h2>

      {/* Display user details if available */}
      {user ? (
        <div 
          style={{
            border: "1px solid gray",
            padding: "20px",
            display: "inline-block",
            borderRadius: "10px"
          }}
        >
          {/* User Profile Image */}
          <img src={user.picture.large} alt="User" style={{ borderRadius: "50%" }} />
          
          {/* User Name */}
          <h3>{user.name.first} {user.name.last}</h3>
          
          {/* User Email */}
          <p>{user.email}</p>

          {/* User Location */}
          <p>{user.location.city}, {user.location.country}</p>

          {/* Button to fetch a new user */}
          <button 
            onClick={fetchUser} 
            style={{ padding: "10px", marginTop: "10px" }}
          >
            Get New User
          </button>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}

export default App;
