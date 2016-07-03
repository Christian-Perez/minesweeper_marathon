
var board = $('#board');
var boardRows = 10;
var boardColumns = 10;
// ** FIX STYLES TO DISPLAY BOARDS APPRORIATELY BASED ON ROWS/COLUMNS **
// -1 = bomb
// 0 through 8 = clear tile
function makeAxisStr(num){
  if(num < 10){
    return ( '0' + num )
  }else{
    return ('' + num )
  }
} // makeAxisStr(10)

function makeTileId(row, col){ // max board size 100x
  // console.log( makeAxisStr(row) + makeAxisStr(col) )
  return makeAxisStr(row) + makeAxisStr(col)
}

function makeBoard(){
for(var row = 0; row < boardRows; row++){ // ROW
    $('<div>', { id: ('row' + row), class: 'row' }).appendTo('#board');
    for(var col = 0; col < boardColumns; col++){ // COLUMN
      var $divTile = $('<div>', { class: 'tile', id: makeTileId(row, col), text: 0 } );
      $divTile.click(function(){
        // MAKE BOMB
        $(this).css('background-color', 'orange')
        // if()
        $(this).html('-1')
        var $idStr = $(this).attr('id')
        var $idNum = parseInt( $idStr )
        // var bombsRowNum = parseInt( $idStr.slice(0, 1) )
        // var bombsColNum = parseInt( $idStr.slice(1) )

        // .. FINISH MAKING IDs FIRST ..
        function traverseBoard(col, row){
          //* gets tile by id specified in params

          function updateTiles(){ // in a spiral pattern
            console.log('updateTils() returns: ' + $idStr)
            //* update(++) each tile while going..
              // up 1 row
              // back 1 column
              // down 2 rows
              // forward 2 rows
          } updateTiles()
        } traverseBoard()
        // .. .. .. .. ..

        // OLD CODE..
        // var targets = [[-1, -1], [1, 1]]
        // var startIndex =
        // for(var row = 0; row < targets.length; row++){
        //   for(var column = 0; column < targets[row].length; column++){
        //     var test = targets[row][column];
        //   // colStart = bombsColNum += targets[row][1]
        //   // colEnd = bombsColNum += targets[row][2]
        //   }
        // }

        // var $idStr = $(this).attr('id')

      })//click()
      $divTile.appendTo('#row' + row);
    }//COLUMN
}//ROW
}makeBoard()
