import React from 'react';
import { useExampleContent } from './use-example-content';
import Options from '../components/Options';
import MazeDisplay from '../components/MazeDisplay';
import styles from './ExampleContent.css';

export default function ExampleContent() {
  const { 
    data, 
    apiKey, 
    maze, 
    size, 
    cellShape, 
    algorithm, 
    handleChange, 
    handleSubmit, 
    handleToggleSolution,
    displayString,
  } = useExampleContent();
  
  return (
    <div className={styles.ExampleContent}>
      <Options
        apiKey={apiKey}
        size={size}
        cellShape={cellShape}
        algorithm={algorithm}
        handleSubmit={handleSubmit}
        handleChange={handleChange} 
      />
      {data &&
        <MazeDisplay  
          maze={maze}
          handleToggleSolution={handleToggleSolution}
          displayString={displayString}
        />
      }
    </div>
  );
}
