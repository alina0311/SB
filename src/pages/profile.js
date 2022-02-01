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
          <div className="alldiv"> 
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong> {currentUser.email}
            <div className="update-profile">
              <Link to="/update-profile" className="btn btn-primary w-30 mt-3">
                Update Profile
              </Link>
            </div>
            
          </div>
        </Card.Body>
      </Card>
      {/* <div className="text-center w-100 mt-2">
        <Button variant="link" onClick={handleLogOut}>
          Log Out
        </Button>
      </div> */}
    </>
  );
}

export default Profile;