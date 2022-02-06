import React from "react";
import "../style/all.css";
import {Container, Row } from "react-bootstrap";
import Boardgame from "./boardgame";


function CollectionList({filteredBoardgames}) {
  return (
    <Container>
      <Row xs={1} md={3}>
      
        {filteredBoardgames.map((boardgame) => (
            <Boardgame
                key={boardgame.id}
                id={boardgame.id}
                image_title={boardgame.image_title}
                mechanics={boardgame.mechanics}
                duration={boardgame.duration}
                rating={boardgame.rating}
                no_players={boardgame.no_players}
                year={boardgame.year}
                theme={boardgame.theme}
            />
        )
        )}
      </Row>
    </Container>
  );
}

export default CollectionList;
