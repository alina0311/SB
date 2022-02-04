import React from "react";
import "../style/all.css";
import { Card, Button, Alert, Container, Row, Col } from "react-bootstrap";
import Boardgame from "./boardgame";


function CollectionList(props) {
  return (
    <Container>
      <Row xs={1} md={3}>
      
        {props.boardgames.map((boardgame) => (
            <Boardgame
                key={boardgame.id}
                id={boardgame.id}
                image_title={boardgame.image_title}
            />
        )
        )}
      </Row>
    </Container>
  );
}

export default CollectionList;
