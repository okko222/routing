// ComputerList.js
import React from 'react';
import ComputerCard from './ComputerCard';

const ComputerList = ({ computers }) => {
  return (
    <div>
      
      <div className="card-container">
        {computers.map((computer) => (
          <ComputerCard key={computer.id} {...computer} />
        ))}
      </div>
    </div>
  );
};

export default ComputerList;
