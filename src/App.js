import React from "react";
import SignUp from "./pages/signup";
import { Container } from "react-bootstrap";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import PrivateRoute from "./utils/privateRoute";
import PublicRoute from "./utils/privateRoute";
import ForgetPassword from "./pages/forgetpassword";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/signup" element={<SignUp/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/forget-password" element={<ForgetPassword/>} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
}

export default App;
