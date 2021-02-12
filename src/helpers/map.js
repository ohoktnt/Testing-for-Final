const map = {
  cols: 8,
  rows: 8,
  tsize: 32,
  tiles: [
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 2, 2, 2, 2, 2, 2, 1,
    1, 2, 2, 2, 2, 2, 2, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 0, 1, 1, 1,
  ],

  getTile: function(col, row) {
    return this.tiles[row * map.cols + col]
  }
};

module.exports = {
  map
}

