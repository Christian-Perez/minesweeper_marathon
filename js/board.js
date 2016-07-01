// console.log('board.js');
var boardRows = 10;
var boardColumns = 10;
// -1 = bomb
// 0 through 8 = clear tile
var tileValuesArr = [[],[]];
var board = $('#board');

// for every boardRows[x][], create a row
//   in every for create

for(var i = 0; i < boardRows; i++){ //X axis
    $('<div>', { class: ('row' + i) }).appendTo('#board');
    for(var j = 0; j < boardColumns; j++){
      //asign id that is a string of i + j
      $('<div>', { class: 'tile', id: ("" + i + j) } ).appendTo('.row' + i);
    }

}
