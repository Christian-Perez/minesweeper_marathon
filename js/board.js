
var board = $('#board');
var boardRows = 10;
var boardColumns = 10;
var numOfBombs = 10;
var numOfNonBombs = (boardRows * boardColumns) - numOfBombs
// var tilesToClear
console.log('numOfBombs ' + numOfBombs)
console.log('numOfNonBombs: ' + numOfNonBombs)

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
    // take step in direction 't' (target)
        targetRowNum += shift[direction][0]
        targetColNum += shift[direction][1]
    // define tile to modify
    var targetId = makeTileIdStr(targetRowNum, targetColNum)
    var $targetTile = $('#' + targetId);
    if($targetTile.html() == '-1'){
      // console.log('target found bomb @ ' + targetId)
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

function clearZeroTiles(startTileIdStr){
  console.log('clearZeroTiles( startTileIdStr ) - ' + startTileIdStr)
  // update tilesLeftCounter
}

function timer(string){
  console.log('timer(string)')
  // start
  // stop
}

function setRecord(num){
  console.log('setRecord(num)')
}

// MAKE BOARD
function makeBoard(){
  $('<div>', {class: 'timer', id: 'current-timer', text: '00:00'}).appendTo('#board')
  $('<div>', {
    id: 'bomb-toggle',
    html: '<span id="tilesLeftCounter">' + numOfNonBombs + '</span> / <span id="flagsLeftCounter">' + numOfBombs + '</span>'
  }).appendTo('#board')
  $('<div>', {class: 'timer', id: 'record-time', text: '00:00'}).appendTo('#board')
  $('<button>', {id: 'reset-btn', text: 'New Game'}).appendTo('#board')
  $('<button>', {id: 'toggle-flag-btn', text: 'toggle flag'}).appendTo('#board')

  //resetBoard()
  $('#reset-btn').click(function(){
    $('#board').empty()
    makeBoard()
  })

  var tilesLeftCounter = numOfNonBombs;
  var flagsLeftCounter = numOfBombs;
  var flagToggle = false
  $('#toggle-flag-btn').click(function(){
    // change click behavior if toggle-flag-btn has been clicked
    flagToggle == true ? flagToggle = false : flagToggle = true
    if( $(this).hasClass( 'flagged' ) ){
      $('#toggle-flag-btn').removeClass('flagged')
    } else {
      $('#toggle-flag-btn').addClass('flagged')
    }
    console.log(flagToggle)
  })

  for(var row = 0; row < boardRows; row++){ // ROW
    $('<div>', { id: ('row' + row), class: 'row' }).appendTo('#board');
    for(var col = 0; col < boardColumns; col++){ // COLUMN
      var $divTile = $('<div>', { class: 'tile tile-hidden', id: makeTileIdStr(row, col), text: 0 } );
  /// FOR EVERY TILE ON THE BOARD...
        $divTile.click(function(){
          if(flagToggle){
            if( $(this).hasClass('flagged') ){
              $(this).removeClass('flagged')
              flagsLeftCounter++
            } else{
              $(this).addClass('flagged')
              flagsLeftCounter--
            }
            $('#flagsLeftCounter').html(flagsLeftCounter)
            // console.log(flagsLeftCounter)
          } else if( !$(this).hasClass('flagged') ){

            if( $(this).html() == '-1' ){ // is bomb
              $(this).addClass('tile-bomb')
              $(this).removeClass('tile-hidden')
              timer('stop')
              alert( 'tile ' + $(this).attr('id') + ' is a bomb, you lose')
            } else if( $(this).html() == '0' ){ // is zero
              $(this).removeClass('tile-hidden')
              $(this).addClass('tile-' + parseInt($(this).html()) )
              --tilesLeftCounter
              $('#tilesLeftCounter').text(tilesLeftCounter)

              clearZeroTiles( $(this).attr('id') )

              if(tilesLeftCounter < 1){
                alert('you won! yay!!')
              }

            } else { // is num between 1 & 8
              console.log( 'cell value is ' + $(this).html() )
              $(this).removeClass('tile-hidden')
              $(this).addClass('tile-' + parseInt($(this).html()) )
              --tilesLeftCounter
              $('#tilesLeftCounter').text(tilesLeftCounter)

              if(tilesLeftCounter < 1){
                alert('you won! yay!!')
              }

            }

          } else {// if( !flagToggle ).. the tile IS flagged
            alert('this tile is protected, toggle the flag selector and select this tile to disable protection')
          }
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
  } // while(arrayOfBombs.length < numOfBombs)

  /// MAKE BOMBS
  for(var b = 0; b < arrayOfBombs.length; b++){
    makeIntoBomb(arrayOfBombs[b])
  }
  tilesToClear = numOfNonBombs
} makeBoard()
