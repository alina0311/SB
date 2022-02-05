import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import { useAuth } from "../context/authContext";
import '../style/navbar.css';
import '../style/all.css';

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

    // useEffect(() => {
    //     if (currentUser) {
    //     setLoading(false);
    //     return;
    //     }
    //     navigate("/login");
    // }, []);

    return(
        <div className="nav-container">
            { 
                currentUser 
                ? 
                <ReactBootStrap.Navbar collapseOnSelect expand="xl" variant="light" className='colorednav'>
                    <ReactBootStrap.Navbar.Brand className='toLeft'>THE BOARD GAMES SHELF</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                    <ReactBootStrap.Button className="logout-button" variant="link" onClick={handleLogOut}>
                                Log Out
                    </ReactBootStrap.Button>
                    
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto"> 
                            <Link to="/home" className="links">
                                <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                            </Link>
                            <Link to="/profile" className="links">
                                <ReactBootStrap.Nav.Link href="#profile">Profile</ReactBootStrap.Nav.Link>
                            </Link>
                            <ReactBootStrap.NavDropdown title="Boardgames" id="collasible-nav-dropdown">
                                <ReactBootStrap.NavDropdown.Item href="#collection">
                                    <Link to="/collection" className="links">
                                        <ReactBootStrap.Nav.Link href="#collection">Collection
                                        </ReactBootStrap.Nav.Link>
                                    </Link>
                                </ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item href="https://boardgamegeek.com/">Find more</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                            
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                    <ReactBootStrap.Navbar.Text className="hi-text">Hi, {currentUser.email}</ReactBootStrap.Navbar.Text>
                </ReactBootStrap.Navbar>
                :
                <ReactBootStrap.Navbar collapseOnSelect expand="xl" variant="light" className='colorednav'>
                    <ReactBootStrap.Navbar.Brand className='toLeft'>THE BOARD GAMES SHELF</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto"> 
                            <Link to="/home" className="links">
                                <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                            </Link>
                            <ReactBootStrap.NavDropdown title="Boardgames" id="collasible-nav-dropdown">
                                <ReactBootStrap.NavDropdown.Item href="https://boardgamegeek.com/">Find more</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                        </ReactBootStrap.Nav>
                        
                    </ReactBootStrap.Navbar.Collapse>
                   
                </ReactBootStrap.Navbar>
            
            }
            
           
        </div>
    )
}

export default NavBar;