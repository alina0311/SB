import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import '../style/all.css';
import '../style/notFound.css';

function NotFoundPage() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useNavigate();

  return (
    <>
      <Card>
        <Card.Body>
          <div className="notfound-cont"> 
          <Card className="notfound-card">
            <Card.Header>
              Not Found
            </Card.Header>
            <Card.Body>
              
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Sorry! The page requested has not been found. </strong> 
              <Link to="/home" className="home-btn">
                <Button>Go to Home Page</Button>
              </Link>
            </Card.Body>
          </Card>
           
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default NotFoundPage;