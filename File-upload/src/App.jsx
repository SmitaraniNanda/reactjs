import { useState, useEffect } from "react";
import Login from "./Login";
import Upload from "./Upload";
import "./App.css";


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <Upload onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLoginSuccess} />
      )}
    </div>
  );
}
