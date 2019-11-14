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
          <td>
            <pre>
              Body: &lt;No body provided&gt;
              <br />
              <br />
              Headers: &#123;
                Authorization: &lt;API_KEY&gt;
              &#125;
            </pre>
          </td>
          <td>Generates and posts a unique maze to Maze API database with the following default attributes:
            <ul>
              <li>
                Width: 10
              </li>
              <li>
                Height: 10
              </li>
              <li>
                Starting coordinates: 1,1
              </li>
              <li>
                cellShape: Square
              </li>
              <li>
                algorithm: Recursive Backtracker
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <pre>

              Body: &#123;
              <br />
              <br />  algorithm: Growing Tree,
              <br />  dimensions: &#123;
              <br />    width: 20,
              <br />    height: 10
              <br />  &#125;,
              <br />  cellShape: Square,
              <br />  startX: 1,
              <br />  startY: 5,
              <br />
              <br />&#125;
              <br />
              <br /> Headers: &#123;
                Authorization: &lt;API_KEY&gt;
              &#125;
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
                startX and startY are the x,y coordinates for the start of the maze. The end of the maze is the cell on the right wall with the longest path length from the starting cell.
            </li>
          </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );

};

export default PostContent;
