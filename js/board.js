// console.log('board.js');
var boardSize = [10, 10];
// -1 = bomb
// 0 through 8 = clear tile
var tileValuesArr = [[],[]];
var board = $('#board');
for(var i = 0; i < boardSize[0]; i++){ //x axis
  // appending same tile to board over and over, want to append a NEW tile for each boardSize

  $('<div>', {class: 'tile', id: i}).appendTo('#board');

}
