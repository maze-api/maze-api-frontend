import React from 'react';
import Cell from './Cell.js';


const Column = ({ r, cells }) => {
  let style = {
    'display': 'flex',
    'flexDirection': 'column-reverse',
  };

  const mappedCells = cells.map(cell => {
    return (
      <Cell key={cell._id} exits={cell.exits} solutionPath={cell.solutionPath} />
    );
  });


  return (
    <div key={r} style={style}>
      {mappedCells}
    </div>
  );

};

export default Column;
