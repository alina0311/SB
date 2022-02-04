import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import "../components/boardgame";
import CollectionList from "../components/collectionList";
import '../style/all.css';


const boardgames = [
  {
    id: '1',
    image_title: 'Alias Party',
    no_players: '> 4-6',
    year: '2017',
    duration: '< 60 mins',
    theme: 'Humor',
    mechanics: 'Storytelling, Movement',
    rating: '7'
  },
  {
    id: '2',
    image_title: 'Azul',
    no_players: '2-4',
    year: '2017',
    duration: '30-45 mins',
    theme: 'Puzzle',
    mechanics: 'Tile Placement, Set Collection',
    rating: '8'
  },
  {
    id: '3',
    image_title: 'Azul Mozaicul de Cristal',
    no_players: '2-4',
    year: '2020',
    duration: '30-45 mins',
    theme: 'Puzzle',
    mechanics: 'Tile Placement, Set Collection',
    rating: '8'
  },
  {
    id: '4',
    image_title: 'Carcassonne',
    no_players: '2-6',
    year: '2015',
    duration: '40 mins',
    theme: 'City Building',
    mechanics: 'Tile Placement, Area Majority',
    rating: '9'
  },
  {
    id: '5',
    image_title: 'Catan'
  },
  {
    id: '6',
    image_title: 'Dixit Odyssey'
  },
  {
    id: '7',
    image_title: 'Exploding Kittens'
  },
  {
    id: '8',
    image_title: 'Monopoly Deal'
  },
  {
    id: '9',
    image_title: 'Nume de Cod'
  },
  {
    id: '10',
    image_title: 'Roata Norocului'
  },
  {
    id: '11',
    image_title: 'Saboteur'
  },
  {
    id: '12',
    image_title: 'Saboteur2'
  },
  {
    id: '13',
    image_title: 'Solo'
  },
  {
    id: '14',
    image_title: 'Splendor'
  },
  {
    id: '15',
    image_title: 'Sushi Go'
  },
  {
    id: '16',
    image_title: 'Ticket to Ride Europa'
  },
  {
    id: '17',
    image_title: 'Travelin'
  },
  {
    id: '18',
    image_title: 'Uno'
  },
  {
    id: '19',
    image_title: 'Wingspan'
  },
  {
    id: '20',
    image_title: 'Youtube Masters'
  },
  

];

function Collection() {
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
    <div className="div-collection">
      <Card>
        <Card.Body>
          <div className="alldiv"> 
            <h2 className="text-center mb-4">Collection</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <div >
              <CollectionList boardgames={boardgames}/>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Collection;