import React from 'react';
import styles from './Content.css';

const PostContent = () => {
  return (
    <table className={styles.Content}>
      <tbody>
        <tr>
          <th>POST Queries</th>
          <th>Explanation</th>
        </tr>
        <tr>
          <td>&lt;No body provided&gt;</td>
          <td>Generates and posts a unique maze to Maze API database with the following default attributes:
            <br />
            <br />Width: 10
            <br />Height: 10
            <br />Starting coordinates: 1,1
            <br />cellShape: Square
            <br />algorithm: Recursive Backtracker
          </td>
        </tr>
        <tr>
          <td>
            <pre>

              &#123;
              <br />  algorithm: Growing Tree,
              <br />  dimensions: &#123;
              <br />    width: 20,
              <br />    height: 10
              <br />  &#125;,
              <br />  cellShape: Square,
              <br />  startX: 1,
              <br />  startY: 5,
              <br />&#125;
            </pre>
          </td>
          <td>Generates and posts a unique maze to Maze API database with the provided attributes.
            These attributes are the only ones that can be specified in POST /api/mazes.
          <br />
          <br /> Notes:
          <ul>
            <li>
                dimensions is an object containing height and width properties.
            </li>
            <li>
                startX and startY are the x,y coordinates for the start of the maze. The end of the maze is chosen randomly from the cells on the right wall.
            </li>
          </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );

};

export default PostContent;
