import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import '../style/all.css';
import '../style/profile.css';

function Profile() {
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
      <Card>
        <Card.Body>
          <div className="profile-cont"> 
          <Card className="profile-card">
            <Card.Header>
              Profile
            </Card.Header>
            <Card.Body>
              
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email: </strong> {currentUser.email}
              <Link to="/update-profile" className="update-profile">
                <Button>Update Profile</Button>
              </Link>
            </Card.Body>
          </Card>
           
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Profile;