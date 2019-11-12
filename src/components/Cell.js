import React from 'react';

const Cell = ({ coords, id, exits, solutionPath }) => {

  let style = {

    'minHeight': `${100 / 60}vw`,
    'minWidth': `${100 / 60}vw`,
    'backgroundColor': 'white',
    'border': '5px solid black',
    'boxSizing': 'border-box'
  };

  const borders = Object.keys(exits).reduce((acc, val) => {
    switch(val) {
      case 'n':
        acc['borderTop'] = 'none';
        break;
      case 's':
        acc['borderBottom'] = 'none';
        break;
      case 'e':
        acc['borderRight'] = 'none';
        break;
      case 'w':
        acc['borderLeft'] = 'none';
        break;
    }
    return acc;
  }, style);

  if(solutionPath === true) {
    borders['backgroundColor'] = 'green';
  }


  return (
    <div key={id} style={borders} />
  );
};

export default Cell;
