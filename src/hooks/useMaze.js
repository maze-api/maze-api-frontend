import { useState, useEffect } from 'react';
import fetchMaze from '../../services/maze-api.js';

const useMaze = (options) => {
  const [maze, setMaze] = useState();
  useEffect(() => {
    fetchMaze(options)
      .then(maze => {
        setMaze(maze);
      });
  }, [options]);

  return maze;

};

export default useMaze;
