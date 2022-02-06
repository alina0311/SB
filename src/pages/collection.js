import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import "../components/boardgame";
import CollectionList from "../components/collectionList";
import Search from "../components/search";
import boardgames from "../components/data";


import '../style/all.css';


function Collection() {

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useNavigate();


  return (
    <div className="div-collection">
      <Card>
        <Card.Body>
          <div className="alldiv"> 
            <h2 className="text-center mb-4">Collection</h2>
            <div className="tc bg-green ma0 pa4 min-vh-100">
              <Search boardgames={boardgames}/>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            {/* <div >
              <CollectionList boardgames={boardgames}/>
            </div> */}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Collection;