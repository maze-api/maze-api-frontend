import React from 'react';
import MazeContainer from './MazeContainer';
import styles from './Header.css';

const Header = () => {

  return (
    <header className={styles.Header}>
      <MazeContainer />
      <div className={styles.textStyle}>
        <h1> Maze API</h1>
      </div>
    </header >
  );

};

export default Header;
