// ComputerDetails.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ComputerDetails = ({ computers }) => {
  const { id } = useParams();
  const computer = computers.find((c) => c.id === id);

  if (!computer) {
    return <div>Computer not found.</div>;
  }

  return (
    <div>
      
      <p>{computer.description}</p>
      <img src={computer.imageSrc}/>
      <p>{computer.prix}</p>
      <Link to="../../">Aller vers la page d'accueil</Link>

    </div>
  );
};

export default ComputerDetails;
