// import React, { useContext } from "react";

// export default function World() {
// // define map obj
// const map = {
//   cols: 8,
//   rows: 8,
//   tsize: 32,
//   tiles: [
//     1, 1, 1, 1, 1, 1, 1, 1,
//     1, 2, 2, 2, 2, 2, 2, 1,
//     1, 2, 2, 2, 2, 2, 2, 1,
//     1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 0, 0, 1, 1, 1,
//   ],

//   getTile: function(col, row) {
//     return this.tiles[row * map.cols + col]
//   }
// };

// // context: A 2D canvas context
// // tileAtlas: image obj containing the tile atlas
// //  map: the tile map obj
// const tileAtlas = 'TestingAtlas.png'

// function drawMap() {
//   for (let c = 0; c < map.cols; c++) {
//     for (let r =0; r <map.rows; r++) {
//       const tile = map.getTile(c, r);
//       if (tile !== 0) {
//         context.drawImage(
//           tileAtlas, // image
//           (tile - 1) * map.tsize, // source x
//           0, // source y
//           map.tsize, // source width
//           map.tsize, // source height
//           c * map.tsize, //target x
//           r * map.tsize, // target y
//           map.tsize, // target width
//           map.tsize // target height
//         )
//       }
//     }
//   }
// }

//   return <canvas ref="canvas" width={256} height={256}> </canvas>

// }