import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import '../style/forgetPassword.css';

function Login() {
  const emailRef = useRef(null);
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setLoading(true);
      setError("");
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox for futher instructions");
    } catch (error) {
      setError("failed to reset password");
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <div className="forget-cont"> 
            <Card className="forget-card">
              <Card.Header >
                RESET PASSWORD
              </Card.Header>
              <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Card>
                    <Card.Body>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" required ref={emailRef}></Form.Control>
                        </Form.Group>
                        <Button type="submit" className="w-100 forget" disabled={loading}>
                          Reset password
                        </Button>
                      </Form>
                    </Card.Body>
                </Card>
                <div className="text-center w-100 mt-3">
                  <Link to="/login">Log In</Link>
                </div>
             </Card.Body>
            </Card>
            <div className="text-center w-100 mt-2">
              Not registered yet? <Link to="/signup">Sign Up</Link>
            </div>
         </div>
      </Card.Body>
    </Card>
    </>
  );
}

export default Login;