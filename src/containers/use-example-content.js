import { useState, useEffect } from 'react';
import { getMazes } from '../services/maze-api';

export function useExampleContent() {
  const [size, setSize] = useState('any');
  const [cellShape, setCellShape] = useState('any');
  const [algorithm, setAlgorithm] = useState('any');
  const [mazeOptions, setMazeOptions] = useState({});
  const [apiKey, setApiKey] = useState('');
  const [data, setData] = useState(false);
  const [maze, setMaze] = useState({});
  const [showSolution, setShowSolution] = useState(false);
  
  const setForm = {
    size: setSize,
    cellShape: setCellShape,
    algorithm: setAlgorithm,
    apiKey: setApiKey,
  };
  const handleChange = ({ target }) => {
    if(target.value === 'Hexagonal' && algorithm === 'Woven') return () => null;
    if(target.value === 'Woven' && cellShape === 'Hexagonal') return () => null;
    return setForm[target.name](target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const options = {};
    if(size !== 'any') options.width = Number(size);
    if(size !== 'any') options.height = Number(size);
    if(cellShape !== 'any') options.cellShape = cellShape;
    if(algorithm !== 'any') options.algorithm = algorithm;
    setMazeOptions(options);
  };

  const roundToTwoDecimals = num => 1 / 100 * Math.round(num * 100);

  useEffect(() => {
    if(apiKey) {
      getMazes(mazeOptions, apiKey)
        .then((mazes) => {
          mazes[0].displayStringNoSolutionPath = mazes[0].displayString.replace(/▁/g, '_').replace(/│/g, '|');
          mazes[0].displayStringWithSolutionPath = mazes[0].displayStringWithSolutionPath.replace(/▁/g, '_').replace(/│/g, '|');
          mazes[0].displayString = mazes[0].displayStringNoSolutionPath;
          mazes[0].connectivity = roundToTwoDecimals(mazes[0].connectivity);
          mazes[0].averagePathLength = roundToTwoDecimals(mazes[0].averagePathLength);
          setMaze(mazes[0]);
          setData(true);
          setShowSolution(false);
        });
    }
  }, [mazeOptions]);

  const handleToggleSolution = () => setShowSolution(!showSolution);

  useEffect(() => {
    if(showSolution) setMaze({ ...maze, displayString: maze.displayStringWithSolutionPath });
    if(!showSolution) setMaze({ ...maze, displayString: maze.displayStringNoSolutionPath });
  }, [showSolution]);

  return { data, maze, size, cellShape, algorithm, handleSubmit, handleChange, handleToggleSolution };
}
