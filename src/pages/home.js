import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Footer from "../components/footer";
import Header from "../components/header";
import '../style/all.css';
import '../style/home.css';

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
    <div className="alldiv home-cont"> 
      <div className="left">
        <p className="question">
              ARE YOU READY TO HAVE FUN?
        </p>
        <Button href="#"></Button> <Button type="submit">LET'S START</Button>{' '}
      </div>
      
    </div>
  );
}

export default Home;