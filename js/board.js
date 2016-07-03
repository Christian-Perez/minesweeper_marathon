
var board = $('#board');
var boardRows = 10;
var boardColumns = 10;
// ** FIX STYLES TO DISPLAY BOARDS APPRORIATELY BASED ON ROWS/COLUMNS **
// -1 = bomb
// 0 through 8 = clear tile


function makeTileId(row, col){ // max board size 100x
  function makeAxisStr(num){
    if(num < 10){
      return ( '0' + num )
    }else{
      return ( '' + num )
    }
  } // makeAxisStr(10)
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
      $(this).html('-1')
      var $idStr = $(this).attr('id')
      var $idNum = parseInt( $idStr )
      var bombRowNum = parseInt( $idStr.slice(0, 2) )
      var bombColNum = parseInt( $idStr.slice(2) )
      // console.log('row: ' + bombRowNum + ', col: ' + bombColNum)
      // console.log('tileId: ' + makeTileId(bombRowNum, bombColNum))
      var tileCoordinates = {
        up: [-1, 0],
        down: [1, 0],
        left: [0, -1],
        right: [0, 1]
      }
      var getTilePath = ['up', 'left', 'down', 'down', 'right', 'right', 'up', 'up']
      function getTiles(row, col){
            // var nextTile = bombRowNum += adjacentTile.up
            // console.log('row: ' + row + ' col: ' + col)
            // console.log(adjacentTile.up[0])
        // var nextTileCoordinates = makeTileId( (bombRowNum + tileCoordinates.up[0]), (bombColNum + tileCoordinates.up[1]) )
        // console.log(nextTileCoordinates)
        // for(){

        // ** IN FOR LOOP ** <<
        // get vertical
        // get horozontal
        // combine with maketileId()
        // use id to target
        // ** ** ** ** ** **
        var direction = 'down'
          // ** not targeting right number **
          var targetsCol = (bombColNum + tileCoordinates[direction][1])
          var targetsRow = (bombRowNum + tileCoordinates[direction][0])
          // var targetsRow = (bombRowNum + tileCoordinates[ direction[1] ])
          // console.log('bombRow: ' + bombRowNum)
          // console.log(tileCoordinates[direction][0])
          console.log(direction + '! > rowNum: ' + targetsRow + ', ' + '! > colNum: ' + targetsCol)
            // makeTileId(tileCoordinates.up[0], tileCoordinates.up[1])
            // console.log( 'row: ' + targetsRow + ' col: ' + targetsCol)

        // }//for
        // document.getElementById(nextTileCoordinates).style.backgroundColor = '#fff';
        // $(('#'+ (bombRowNum + tileCoordinates.up[0]) + (bombColNum + tileCoordinates.up[1]) )).css('background-color', 'green')
        function updateTiles(){ // in a spiral pattern
          // console.log('updateTils() returns: ' + $idStr)
        } updateTiles()
      } getTiles(bombRowNum, bombColNum)
      // .. .. .. .. ..

      // var $idStr = $(this).attr('id')

    })//click()
    $divTile.appendTo('#row' + row);
  }//COLUMN
}//ROW
}makeBoard()
