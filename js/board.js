
var board = $('#board');
var boardRows = 10;
var boardColumns = 10;

// -1 = bomb
// 0 through 8 = clear tile

function makeTileIdStr(row, col){ // max board size 100x
  function makeAxisStr(num){
    if(num < 10){
      return ( '0' + num )
    }else{
      return ( '' + num )
    }
  } // makeAxisStr
  return makeAxisStr(row) + makeAxisStr(col)
} // makeTileIdStr

function makeBoardDOM(){
for(var row = 0; row < boardRows; row++){ // ROW
  $('<div>', { id: ('row' + row), class: 'row' }).appendTo('#board');
  for(var col = 0; col < boardColumns; col++){ // COLUMN
    var $divTile = $('<div>', { class: 'tile', id: makeTileIdStr(row, col), text: 0 } );
    $divTile.click(function(){
      // MAKE BOMB
      $(this).css('background-color', 'orange')
      $(this).html('-1')
      var tileId = $(this).attr('id');
      console.log(tileId)
      makeIntoBomb( parseInt($(this).attr('id').slice(0, 2)), parseInt($(this).attr('id').slice(2)) )
      function makeIntoBomb(row, col){

      // store location of bomb blaced for updating surrounding tiles ()
      // var bombRowNum = parseInt( $(this).attr('id').slice(0, 2) )
      // var bombColNum = parseInt( $(this).attr('id').slice(2) )
      var bombRowNum = row
      var bombColNum = col

      // UPDATE SURROUNDING TILES
      // define path
      var shiftSelection = {
        up: [-1, 0],
        down: [1, 0],
        left: [0, -1],
        right: [0, 1]
      }
      var pathToAllTargets = ['up', 'left', 'down', 'down', 'right', 'right', 'up', 'up']
      // start path at the bomb
        var targetColNum = bombColNum;
        var targetRowNum = bombRowNum;
        // walk the path
        for(var t = 0; t < pathToAllTargets.length; t++){
          var direction = pathToAllTargets[t]
              targetRowNum += shiftSelection[direction][0]
              targetColNum += shiftSelection[direction][1]
          var targetId = makeTileIdStr(targetRowNum, targetColNum)
          var $targetTile = $('#' + targetId);

          if($targetTile.html() == '-1'){
            console.log(targetId)
          }else{
            $targetTile.css('background-color', 'purple')
            $targetTile.html(parseInt($targetTile.html()) + 1)
          }
        } // for( pathToAllTargets )
      }

      // var bombRowNum = parseInt( $(this).attr('id').slice(0, 2) )
      // var bombColNum = parseInt( $(this).attr('id').slice(2) )
      // makeIntoBomb(parseInt( $(this).attr('id').slice(0, 2)), parseInt( $(this).attr('id').slice(2)){)


    }) // click()
    $divTile.appendTo('#row' + row);
  } // COLUMN
} // ROW
}makeBoardDOM()
