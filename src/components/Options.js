import React from 'react';
import PropTypes from 'prop-types';
import styles from './Options.css';

export default function Options({ size, cellShape, algorithm, handleSubmit, handleChange }) {
  return (
    <form className={styles.Options} onSubmit={handleSubmit}>
      <div>
        <label>Size: </label>
        <select name="size" value={size} onChange={handleChange}>
          <option name="size" value="any">Any Size</option>
          <option name="size" value="5">5x5</option>
          <option name="size" value="10">10x10</option>
          <option name="size" value="15">15x15</option>
          <option name="size" value="20">20x20</option>
          <option name="size" value="25">25x25</option>
        </select> 
      </div>
      <div>
        <label>Cell Shape: </label>
        <select name="cellShape" value={cellShape} onChange={handleChange}>
          <option name="cellShape" value="any">Any Shape</option>
          <option name="cellShape" value="Square">Square Cells</option>
          <option name="cellShape" value="Hexagonal">Hexagonal Cells</option>
        </select> 
      </div>
      <div>
        <label>Algorithm: </label>
        <select name="algorithm" value={algorithm} onChange={handleChange}>
          <option name="algorithm" value="any">Any Algorithm</option>
          <option name="algorithm" value="Growing Tree">Growing Tree</option>
          <option name="algorithm" value="Prims">Prims</option>
          <option name="algorithm" value="Recursive Backtracker">Recursive Backtracker</option>
          <option name="algorithm" value="Woven">Woven (cells must be &apos;Square&apos;)</option>
        </select> 
      </div>
      <div>
        <button onClick={handleSubmit}>GET A Maze!</button>
      </div>
    </form>
  );
}

Options.propTypes = {
  size: PropTypes.string.isRequired,
  cellShape: PropTypes.string.isRequired,
  algorithm: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
