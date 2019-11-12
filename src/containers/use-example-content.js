import { useState, useEffect } from 'react';
import { getMaze } from '../services/maze-api';

export function useExampleContent() {
  const [size, setSize] = useState('any');
  const [cellShape, setCellShape] = useState('any');
  const [algorithm, setAlgorithm] = useState('any');
  const [submittedMazeOptions, setSubmittedMazeOptions] = useState({ freshPageLoad: true });
  const [apiKey, setApiKey] = useState('');
  const [data, setData] = useState(false);
  const [maze, setMaze] = useState({});
  const [showSolution, setShowSolution] = useState(false);
  const [noSolutionDisplayString, setNoSolutionDisplayString] = useState('');
  const [solutionDisplayString, setSolutionDisplayString] = useState('');
  const [displayString, setDisplayString] = useState('');
  
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
    setSubmittedMazeOptions(options);
  };

  const formatDisplayString = str => str.replace(/▁/g, '_').replace(/│/g, '|');

  useEffect(() => {
    if(submittedMazeOptions.freshPageLoad) return;

    getMaze(submittedMazeOptions, apiKey)
      .then((mazes) => {
        const noSolutionStr = formatDisplayString(mazes[0].displayString);
        setDisplayString(noSolutionStr);
        setNoSolutionDisplayString(noSolutionStr);
        setSolutionDisplayString(formatDisplayString(mazes[0].displayStringWithSolutionPath));
        setMaze(mazes[0]);
        setData(true);
        setShowSolution(false);
      });
  }, [submittedMazeOptions]);

  const handleToggleSolution = () => setShowSolution(!showSolution);

  useEffect(() => {
    if(showSolution) setDisplayString(solutionDisplayString);
    if(!showSolution) setDisplayString(noSolutionDisplayString);
  }, [showSolution]);

  return { 
    data, 
    maze, 
    size, 
    cellShape, 
    algorithm, 
    handleSubmit, 
    handleChange, 
    handleToggleSolution, 
    solutionDisplayString, 
    noSolutionDisplayString, 
    displayString 
  };
}
