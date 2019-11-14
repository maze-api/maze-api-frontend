import React from 'react';
import MazeContainer from './MazeContainer';

const Header = () => {
  const headerStyle = {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'marginBottom': '20px '
  };

  const textStyle = {
    'margin': '50px 0',
    'backgroundColor': 'white',
    'width': 'max-content',
    'padding': '15px',
    'border': '5px solid black'
  };


  return (
    <header style={headerStyle}>
      <MazeContainer />
      <div style={textStyle}>
        <h1> Maze API</h1>
      </div>
    </header >
  );

};

export default Header;
