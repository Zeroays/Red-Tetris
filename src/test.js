const initTetrisGrid = ({row, column, color}) => {
    let grid = [];
    for (let i = 0; i < +row; i++) {
      const singleRow = Array(+row).fill(color);
      grid.push(singleRow);
    }
    return grid;
  }

console.log(initTetrisGrid({row: "4", column: "3", color: "black"}));