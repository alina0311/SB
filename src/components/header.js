import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import { useAuth } from "../context/authContext";
import '../style/navbar.css'

const NavBar = () => {
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

    return(
        <div className="nav-container">
            <ReactBootStrap.Navbar collapseOnSelect expand="xl" variant="light" className='colorednav'>
                <ReactBootStrap.Navbar.Brand className='toLeft'>THE BOARD GAMES SHELF</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto"> 
                        <Link to="/profile">
                        <ReactBootStrap.Nav.Link href="#profile">Profile</ReactBootStrap.Nav.Link>
                        </Link>
                        <ReactBootStrap.NavDropdown title="Our boardgames" id="collasible-nav-dropdown">
                            <ReactBootStrap.NavDropdown.Item href="#action/3.1">Collection</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Reviews</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Divider />
                            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Find more</ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                       
                    </ReactBootStrap.Nav>

                    
                    
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
            <Button variant="link" onClick={handleLogOut}>
                Log Out
            </Button>
        </div>
    )
}

export default NavBar;