import React from 'react';
import PropTypes from 'prop-types';
import styles from './MazeDisplay.css';

export default function MazeDisplay({ maze, handleToggleSolution }) {
  return (
    <section className={styles.MazeDisplay}>
      <h2>Maze ID: {maze._id}</h2>
      <dl>
        <dd>Size (width x height): {maze.dimensions.width} x {maze.dimensions.height}</dd>
        <dd>Cell Shape: {maze.cellShape}</dd>
        <dd>Algorithm: {maze.algorithm}</dd>
        <dd>Connectivity: {maze.connectivity}</dd>
        <dd>Average Path Length: {maze.averagePathLength}</dd>
        <dd>Solution Length: {maze.solutionLength}</dd>
      </dl>
      <h3>Maze Visualizer (ASCII pre-formatted string)</h3>
      <button onClick={handleToggleSolution}>Toggle Solution Path On/Off</button>
      <pre>{maze.displayString}</pre>
      <h3>Maze object structure (JSON data)</h3>
      <pre name="json">{JSON.stringify(maze, undefined, 2)}</pre>
    </section>
  );
}

MazeDisplay.propTypes = {
  maze: PropTypes.object.isRequired,
  handleToggleSolution: PropTypes.func.isRequired,
};
