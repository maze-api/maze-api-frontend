import React from 'react';
import styles from './ContentHeader.css';

const NavBar = ({ handleClick }) => {

  return (
    <div className={styles.Bar}>
      <button className={`${styles.Button} ${styles.selected}`} onClick={handleClick} id="example" name="example">EXAMPLE</button>
      <button className={styles.Button} onClick={handleClick} id="get" name="get">GET</button>
      <button className={styles.Button} onClick={handleClick} id="post" name="post">POST</button>
      <button className={styles.Button} onClick={handleClick} id="auth" name="auth">AUTH</button>
    </div >
  );

};

export default NavBar;
