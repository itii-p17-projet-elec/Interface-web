import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import solar from "../img/solar-1.jpg"

const JumbotronTop = () => {
  return (
    <div>
    <Jumbotron fluid className = "text-center" style={{ backgroundImage: `url(${solar})`, backgroundSize: 'cover'}}>
 
        <Container fluid>
          <h1 className="display-3">Projet Electronique ITII</h1>
          <p className="lead">Projet collaboratif de la promotion P17 ayant pour thème la conception d'un chargeur solaire</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronTop;
