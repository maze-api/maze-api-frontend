import React from 'react';
import useMaze from '../hooks/useMaze';
import MazeVisualizer from './MazeVisualizer';

let options = {
  height: 10,
  width: 60,
  cellShape: 'Square',
  number: 1,
};


const MazeContainer = () => {
  const maze = useMaze(options);


  return (
    <div>
      {maze && <MazeVisualizer maze={maze} />}
    </div>
  );


};

export default MazeContainer;
