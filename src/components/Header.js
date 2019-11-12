import React from 'react';
import MazeContainer from './MazeContainer';

const Header = () => {
  const style = {
    'display': 'flex',
    'flexDirection': 'column',
    'textAlign': 'center',
  };


  return (
    <header style={style}>
      <MazeContainer />
      <h1> Maze API</h1>
    </header>
  );

};

export default Header;
