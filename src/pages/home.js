import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Home() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useNavigate();

  const handleLogOut = async () => {
    setError("");
    try {
      await logout();
      history("/login");
    } catch (error) {
      setError("cannot logout");
    }
  };

  return (
    <>
      <div className="text-center w-100 mt-2">
        <p>Welcome!</p>
      </div>
    
    </>
  );
}

export default Home;