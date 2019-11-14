import React from 'react';
import useMaze from '../hooks/useMaze';
import MazeVisualizer from './MazeVisualizer';
import styles from './MazeContainer.css';

let options = {
  height: 10,
  width: 60,
  cellShape: 'Square',
  number: 1,
};


const MazeContainer = () => {
  const maze = useMaze(options);


  return (
    <>
      <div className="">
        {maze && <MazeVisualizer maze={maze} />}
        {maze && <span className={styles.Span}>ID: {maze[0]._id} </span>}
      </div>
    </> 
  );


};

export default MazeContainer;
