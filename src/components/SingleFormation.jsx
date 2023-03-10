import React from "react";
import Card from "react-bootstrap/Card";

const SingleFormation = (props) => {
  return (
    <div>
      <Card className="cardsLangue">
        <Card.Img variant="top" src={props.data.image} />
        <Card.Body>
          <Card.Title className="formationTitle" >{props.data.title}</Card.Title>

          <button className="checkOneFormation">Voir Plus</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleFormation;
