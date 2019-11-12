import React from 'react';
import Header from './Header';
import Content from './Content';

const App = () => {

  return (
    <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
      <Header />
      <Content />
    </div >
  );

};

export default App;
