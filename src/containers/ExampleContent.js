import React from 'react';
import { useExampleContent } from './use-example-content';
import Options from '../components/Options';
import MazeDisplay from '../components/MazeDisplay';
import styles from './ExampleContent.css';
import tableStyles from '../components/Content.css';

export default function ExampleContent() {
  const { 
    data, 
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
    <table className={tableStyles.Content}>
      <tbody>
        <tr>
          <th>GET MAZE EXAMPLE</th>
        </tr>
        <tr>
          <td>
            <div className={styles.ExampleContent}>
              <Options
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
          </td>
        </tr>
      </tbody>
    </table>  
  );
}
