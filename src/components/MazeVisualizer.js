import React from 'react';
import Column from './Column';


const findCellByCoords = (arr, x, y) => {
  return arr.find(cell => {
    return cell.x === x && cell.y === y;
  });
};

const MazeVisualizer = ({ maze }) => {
  const mazeWidth = maze[0].dimensions.width;
  const mazeHeight = maze[0].dimensions.height;

  let columns = [];
  for(let r = 0; r < mazeWidth; r++) {
    let cells = [];
    columns.push([]);

    for(let c = 0; c < mazeHeight; c++) {
      let cell = maze[0].cellMap[c + (r * mazeHeight)];

      let foundCell = findCellByCoords(maze[0].solutionPath, cell.coordinates.x, cell.coordinates.y);
      let newCell = null;
      if(foundCell) {
        newCell = cell;
        newCell.solutionPath = true;

        if(maze[0].solutionPath.indexOf(foundCell) === 0) {
          console.log('START');
          newCell.solutionPath = 'start';
        }

        if(maze[0].solutionPath.indexOf(foundCell) === maze[0].solutionPath.length - 1) {
          console.log('END');
          newCell.solutionPath = 'end';
        }

      }
      if(newCell) {
        cells.push(newCell);
      } else {
        cells.push(cell);
      }
    }


    columns[r].push(
      <Column key={r} cells={cells} />
    );
  }

  let style = {
    'display': 'flex',
    'flexDirection': 'row',
  };

  return (
    <>
      {maze && <div style={style} >
        {columns}
      </div>}
    </>
  );


};

export default MazeVisualizer;
