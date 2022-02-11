import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/style.css";

const Header = ({ user, setUser }) => {
  return (
    <div className="header">
      <h1 className="App">Hello</h1>
      {user ? (
        <button className="btn" onClick={() => setUser(false)}>
          logout
        </button>
      ) : (
        <Link to="/login" className="btn" onClick={() => setUser(true)}>
          login
        </Link>
      )}
    </div>
  );
};

export default Header;
