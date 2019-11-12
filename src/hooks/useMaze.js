import { useState, useEffect } from 'react';
import { getMaze } from '../services/maze-api';

const useMaze = (options) => {
  const [maze, setMaze] = useState();
  
  useEffect(() => {
    getMaze(options)
      .then(maze => setMaze(maze));
  }, [options]);

  return maze;

};

export default useMaze;
