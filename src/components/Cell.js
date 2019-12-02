import React from 'react';
import styles from './Cell.css';

const Cell = ({ id, exits, solutionPath }) => {

  const mapToStyle = {
    'n': `${styles.n} `,
    's': `${styles.s} `,
    'e': `${styles.e} `,
    'w': `${styles.w} `,
  };  
  const exitStyles = Object.keys(exits).map(direction => mapToStyle[direction]);

  const solutionStyles = [];
  if(solutionPath === true) solutionStyles.push(styles.solutionPath);
  if(solutionPath === 'start') solutionStyles.push(styles.start);
  if(solutionPath === 'end') solutionStyles.push(styles.end);

  const stylesString = [
    styles.Cell, 
    ...exitStyles, 
    ...solutionStyles
  ].join(' ');

  return (
    <div key={id} className={stylesString} />
  );

};

export default Cell;
