import React from 'react';
import styles from './Cell.css';

const Cell = ({ id, exits, solutionPath }) => {

  let style = `${styles.Cell} `;

  let borders = Object.keys(exits).reduce((acc, val) => {
    switch(val) {
      case 'n':
        acc += `${styles.n} `;
        break;
      case 's':
        acc += `${styles.s} `;
        break;
      case 'e':
        acc += `${styles.e} `;
        break;
      case 'w':
        acc += `${styles.w} `;
        break;
    }
    return acc;
  }, style);

  if(solutionPath === true) {
    borders += `${styles.solutionPath} `;
  }
  if(solutionPath === 'start') {
    borders += `${styles.start} `;
  }
  if(solutionPath === 'end') {
    borders += `${styles.end} `;
  }


  return (
    <div key={id} className={borders} />
  );

};

export default Cell;
