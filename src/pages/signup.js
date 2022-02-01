import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import '../style/signup.css';


function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate(); // hook for redirecting to routes

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setLoading(true);
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch (error) {
      setError("failed to create an account");
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <div className="alldiv">
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Card className="login-card ">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required ref={emailRef}></Form.Control>
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      required
                      ref={passwordRef}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="password"
                      required
                      ref={passwordConfirmRef}
                    ></Form.Control>
                  </Form.Group>
                  <Button type="submit" className="w-100 signup-btn" disabled={loading}>
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="text-center w-100 mt-2">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
          </div>
        </Card.Body>
      </Card>
     
    </>
  );
}

export default Signup;