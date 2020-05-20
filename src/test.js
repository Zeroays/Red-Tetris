// import { func } from "prop-types";

// const initTetrisGrid = ({row, column, color}) => {
//     let grid = [];
//     for (let i = 0; i < +row; i++) {
//       const singleRow = Array(+row).fill(color);
//       grid.push(singleRow);
//     }
//     return grid;
//   }

// console.log(initTetrisGrid({row: "4", column: "3", color: "black"}));

// const test = () => {
//     let arr = [1,2 ,3];
//     arr.map((...args) => fun(args));
// }

// const fun = args => {
//     console.log(args);
// }
// fun();

const initTetrisGrid = ( row, column, color ) => {
    // let newArr = [];
    const singleRow = Array(+column).fill(color);
    return Array.from({ length: row }, () => [...singleRow]);
    // for (let i = 0 ; i < row; i++) {
    //     newArr.push([...singleRow]);
    // }
    // return newArr;
  }

let test = initTetrisGrid(20, 10, "green");
test[0][0] = "blue";
console.log(test);