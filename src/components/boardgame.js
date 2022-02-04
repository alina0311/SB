import React from "react";
import "../style/all.css";
import '../style/boardgame.css';
import { Card, Button, Alert, Container, Col} from "react-bootstrap";

import img1 from '../images/alias.jpg';
import img2 from '../images/azul-mozaicul.jpg';
import img3 from '../images/azul.jpg';
import img4 from '../images/carcassonne.jpg';
import img5 from '../images/catan.jpg';
import img6 from '../images/dixit.jpg';
import img7 from '../images/exploding-kittens.jpg';
import img8 from '../images/monopoly-deal.jpg';
import img9 from '../images/nume-de-cod.jpg';
import img10 from '../images/roata.jpg';
import img11 from '../images/saboteur.jpg';
import img12 from '../images/saboteur2.jpg';
import img13 from '../images/solo.jpg';
import img14 from '../images/splendor.jpg';
import img15 from '../images/sushi-go.jpg';
import img16 from '../images/ticket-to-ride.jpg';
import img17 from '../images/travelin.jpeg';
import img18 from '../images/uno.jpg';
import img19 from '../images/wingspan.jpeg';
import img20 from '../images/youtube-masters.jpg';


function Boardgame(props) {
  var img = '';

  return (
    <Col>
      <Card className="bg-card">
        <Card.Title>{props.image_title}</Card.Title>
        <Card.Img src=
          {(() => {
              if (props.image_title == 'Alias Party')
                  return img1
              if (props.image_title == 'Azul Mozaicul de Cristal')
                  return img2
              if (props.image_title == 'Azul')
                  return img3
              if (props.image_title == 'Carcassonne')
                  return img4
              if (props.image_title == 'Catan')
                  return img5
              if (props.image_title == 'Dixit Odyssey')
                  return img6
              if (props.image_title == 'Exploding Kittens')
                  return img7
              if (props.image_title == 'Monopoly Deal')
                  return img8
              if (props.image_title == 'Nume de Cod')
                  return img9
              if (props.image_title == 'Roata Norocului')
                  return img10
              if (props.image_title == 'Saboteur')
                  return img11
              if (props.image_title == 'Saboteur2')
                  return img12
              if (props.image_title == 'Solo')
                  return img13
              if (props.image_title == 'Splendor')
                  return img14
              if (props.image_title == 'Sushi Go')
                  return img15
              if (props.image_title == 'Ticket to Ride Europa')
                  return img16
              if (props.image_title == 'Travelin')
                  return img17
              if (props.image_title == 'Uno')
                  return img18
              if (props.image_title == 'Wingspan')
                  return img19
              if (props.image_title == 'Youtube Masters')
                  return img20
          })()}/>
        <Card.Body>
        
      
        <Card.Text>hii</Card.Text>
        </Card.Body>
        
      </Card>
    </Col>
  );
}

export default Boardgame;
