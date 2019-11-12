import React from 'react';



const NavBar = ({ handleClick }) => {

  const style = {
    'width': '85vw',
    'margin': 'auto',
    'borderTop': '4px solid black',
    'borderLeft': '4px solid black',
    'borderRight': '4px solid black',
  };

  const buttonStyle = {
    'width': '25%',
    'height': 'auto',
    'fontFamily': 'Varela Round',
    'fontSize': '1.5em',
    'padding': '10px',
    'backgroundColor': 'white',
    'fontWeight': '600'
  };




  return (
    <div style={style}>
      <button style={buttonStyle} onClick={handleClick} id="get" name="get">GET</button>
      <button style={buttonStyle} onClick={handleClick} id="post" name="post">POST</button>
      <button style={buttonStyle} onClick={handleClick} id="auth" name="auth">AUTH</button>
      <button style={buttonStyle} onClick={handleClick} id="example" name="example">EXAMPLE</button>
    </div>
  );

};

export default NavBar;
