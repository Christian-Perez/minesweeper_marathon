
var board = $('#board');
var boardRows = 10;
var boardColumns = 10;
var numOfBombs = 10;

function randomTileAxisNum(){
  // * has to adapt to different board sizes
  var num = Math.floor( (Math.random() * 10 ) )
  return num
}//randomNum()

function makeTileIdStr(row, col){ // max board size 100x
  function makeAxisStr(num){
    if(num < 10){
      return ( '0' + num )
    }else{
      return ( '' + num )
    }
  } // makeAxisStr(num)
  return makeAxisStr(row) + makeAxisStr(col)
} // makeTileIdStr(row, col)

function makeIntoBomb(tileIdStr){
  // $('#' + tileIdStr).css('background-color', 'orange')
  $('#' + tileIdStr).html('-1')

  var bombRowNum = parseInt(tileIdStr.slice(0, 2))
  var bombColNum = parseInt(tileIdStr.slice(2))
  /// UPDATE SURROUNDING TILES
  // define path directions
  var shift = {
    // tested
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
    // not tested ..
    ul: [-1, -1],
    ur: [-1, 1],
    dl: [1, -1],
    dr: [1, 1]
  }
  // define path to targets
  var path = ['up', 'left', 'down', 'down', 'right', 'right', 'up', 'up']
  // start path at the bomb
  var targetColNum = bombColNum;
  var targetRowNum = bombRowNum;
  // walk the path
  for(var t = 0; t < path.length; t++){
    var direction = path[t]
        targetRowNum += shift[direction][0]
        targetColNum += shift[direction][1]
    var targetId = makeTileIdStr(targetRowNum, targetColNum)
    var $targetTile = $('#' + targetId);

      if($targetTile.html() == '-1'){
        console.log('target found bomb @ ' + targetId)
      }else{
        // $targetTile.css('background-color', 'purple')
        // looks like it breaks, but it's a visual hiccup
        $targetTile.html(parseInt($targetTile.html()) + 1)
      }
    } // for( pathThroughTargets )
  } // MAKE INTO BOMB ()

function isBomb(tileDOM){
  if( tileDOM.html() == -1 ){
    return true
  } else {
    return false
  }
}

// function makeBoardDOM(){
// MAKE BOARD
for(var row = 0; row < boardRows; row++){ // ROW
  $('<div>', { id: ('row' + row), class: 'row' }).appendTo('#board');

  for(var col = 0; col < boardColumns; col++){ // COLUMN
    var $divTile = $('<div>', { class: 'tile tile-hidden', id: makeTileIdStr(row, col), text: 0 } );
      $divTile.click(function(){
        console.log( 'clicked: ' + $(this).attr('id') + ', isBomb: ' + isBomb($(this)) )
        if( $(this).html() == '-1' ){ // is bomb
          $(this).addClass('tile-bomb')
        } else if( $(this).html() == '0' ){ // is zero
          $(this).removeClass('tile-hidden')
          $(this).addClass('tile-' + parseInt($(this).html()) )
        } else { // is num between 1 & 8
          console.log( 'cell value is ' + $(this).html() )
          $(this).removeClass('tile-hidden')
          $(this).addClass('tile-' + parseInt($(this).html()) )
        }


        // makeIntoBomb( $(this).attr('id') )
      }) // $divTile.click
      $divTile.appendTo('#row' + row);
  } // forEach( column )
} // forEach( row )

/// MAKE ARRAY OF UNIQUE BOMB IDs
var newBombId = makeTileIdStr( randomTileAxisNum(), randomTileAxisNum() );
var arrayOfBombs = [newBombId]
while(arrayOfBombs.length < numOfBombs){
  newBombId = makeTileIdStr( randomTileAxisNum(), randomTileAxisNum() );
  // console.log('newBombId: ' + newBombId)
  if( !arrayOfBombs.includes(newBombId) ){
    arrayOfBombs.push(newBombId)
    // console.log('pushed ' + newBombId)
  }
  console.log('arrayOfBombs: ' + arrayOfBombs.length)
} // while(arrayOfBombs.length < numOfBombs)

/// UTILIZE BOMBS ARR TO MAKE BOMBS
console.log( 'before makeIntoBomb(arrayOfBombs) ' + arrayOfBombs)
for(var b = 0; b < arrayOfBombs.length; b++){
  makeIntoBomb(arrayOfBombs[b])
  console.log('made ' + arrayOfBombs[b] + ' into a bomb')
}
// } makeBoardDOM()
