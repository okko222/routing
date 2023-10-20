// ComputerCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Card';

const ComputerCard = ({ id, name, description, imageSrc }) => {
  return (
    <Card style={{ width: '18rem' ,float:"left", margin:10}}>
      <Link to={`/computer/${id}`}><Card.Img variant="top" src={imageSrc} alt={name} /></Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
  );
};

export default ComputerCard;