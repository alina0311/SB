import React, { useState } from "react";
import SignUp from "./pages/signup";
import { Container } from "react-bootstrap";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Login from "./pages/login";
import Collection from "./pages/collection";
import { BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./utils/privateRoute";
import ForgetPassword from "./pages/forgetpassword";
import Footer from "./components/footer";
import NavBar from "./components/header";
import NotFoundPage from "./pages/notFound";
import Favorites from "./pages/favorites";


function App() {
  return (
      <div className="page-cont">
        <div className="content">
          <Router>
          <NavBar />
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/home" element={<Home/>} />
              <Route path="/profile" element={<PrivateRoute component={Profile} />}></Route>
              <Route path="/collection" element={<PrivateRoute component={Collection} />}></Route>
              <Route exact path="/signup" element={<SignUp/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route path="/forget-password" element={<ForgetPassword/>} />
              <Route path="*" element={<NotFoundPage/>} />
            </Routes>
          </Router>
        </div>
        <Footer/>
      </div>
    );
}

export default App;
