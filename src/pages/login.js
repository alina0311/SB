import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import '../style/login.css';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate(); // hook for redirecting to routes

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      history("/"); // redirecting to dashboard
    } catch (error) {
      setError("failed to Log in");
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
        <div className="login-cont"> 
          <Card className="login-card">
              <Card.Header >
                LOG IN
              </Card.Header>
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Card>
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
                  <Button type="submit" className="text-center login" disabled={loading}>
                    Log In
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            
            <div className="text-center w-100 mt-3">
              <Link to="/forget-password">Forget password?</Link>
            </div>
            <div className="text-center w-100 mt-2">
              Not registered yet? <Link to="/signup">Sign Up</Link>
            </div>
          </Card.Body>
         </Card>
        </div>
      </Card.Body>
    </Card>
      
    </>
  );
}

export default Login;