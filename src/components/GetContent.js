import React from 'react';
import styles from './Content.css';

const GetContent = () => {

  return (
    <table className={styles.Content}>
      <tbody>
        <tr>
          <th>GET Queries</th>
          <th>Explanation</th>
        </tr>
        <tr>
          <td>GET /api/mazes/</td>
          <td>Get 10 random mazes</td>
        </tr>
        <tr>
          <td>GET /api/mazes/?number=1</td>
          <td>Get 1 random maze</td>
        </tr>
        <tr>
          <td>GET /api/mazes/?width=20&height=20</td>
          <td>
            <p>
              Get random mazes that are 20x20 cells.
              <br />
              <br />Alternate queries:
              <ul>
                <li>
                  width_lt / height_lt (less than)
                </li>
                <li>
                  width_gt / height_gt (greater than)
                </li>
                <li>
                  width_lte / height_lte (less than or equal to)
                </li>
                <li>
                  width_gte / height_gte (greater than or equal to)
                </li>
              </ul>
              Default is 10x10.
            </p>
          </td>
        </tr>
        <tr>
          <td>GET /api/mazes/?algorithm=Prims</td>
          <td>
            <p>
              Get random mazes generated using the Prims algorithm.
              <br />
              <br />Available algorithms:
              <ul>
                <li>
                  Prims
                </li>
                <li>
                  Recursive Backtracker
                </li>
                <li>
                  Growing Tree
                </li>
                <li>
                  Woven
                </li>
              </ul>
              Default algorithm is Recursive Backtracker
            </p>
          </td>
        </tr>
        <tr>
          <td>GET /api/mazes/?cellShape=Square</td>
          <td>
            <p>
              Get random mazes with square shaped cells.
              <br />
              <br />Available cellShapes:
              <ul>
                <li>
                  Square
                </li>
                <li>
                  Hexagonal (note: Hexagonal cells are not compatible with the Woven maze algorithm)
                </li>
              </ul>
              Default cellShape is Square
            </p>
          </td>
        </tr>
        <tr>
          <td>GET /api/mazes/?connectivity=.5</td>
          <td>Get random mazes with a connectivity score of 0.5.
            <br />
            <br />Connectivity is measure of the ease of travelling between any two given cells, calculated as an inverse of the average path length, normalized to the number of cells in the maze.
            <br />
            <br />Alternate queries:
            <ul>
              <li>
                connectivity_gt (greater than)
              </li>
              <li>
                connectivity_lt (less than)
              </li>
              <li>
                connectivity_gte (greater than or equal to)
              </li>
              <li>
                connectivity_lte (less than or equal to)
              </li>
            </ul>
            Connectivity is mainly distributed between 0.1 and 0.5</td>
        </tr>
        <tr>
          <td>GET /api/mazes/?averagePathLength=20</td>
          <td>Get random mazes with average path lengths of 20.
            <br />
            <br />Alternate queries:
            <ul>
              <li>
                averagePathLength_gt (greater than)
              </li>
              <li>
                averagePathLength_lt (less than)
              </li>
              <li>
                averagePathLength_gte (greater than or equal to)
              </li>
              <li>
                averagePathLength_lte (less than or equal to)
              </li>
            </ul>
            Note that averagePathLength scores are often not whole numbers. Using the alternate queries are recommended.
          </td>
        </tr>
        <tr>
          <td>GET /api/mazes/?solutionLength=20</td>
          <td>Get random mazes with a solution path of 20 cells.
            <br />
            <br />Alternate queries:
            <ul>
              <li>
                solutionLength_gt (greater than)
              </li>
              <li>
                solutionLength_lt (less than)
              </li>
              <li>
                solutionLength_gte (greater than or equal to)
              </li>
              <li>
                solutionLength_lte (less than or equal to)
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>GET /api/mazes/id</td>
          <td>Get an already generated maze by its ID</td>
        </tr>
      </tbody>
    </table >
  );
};

export default GetContent;
