
var board = $('#board');
var boardRows = 10;
var boardColumns = 10;
var bombsNum = 10;

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

function makeIntoBomb(tileIdStr){
  $('#' + tileIdStr).css('background-color', 'orange')
  $('#' + tileIdStr).html('-1')

  var bombRowNum = parseInt(tileIdStr.slice(0, 2))
  var bombColNum = parseInt(tileIdStr.slice(2))
  /// UPDATE SURROUNDING TILES
  // define path
  var shift = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1]
  }
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
        console.log(targetId)
      }else{
        $targetTile.css('background-color', 'purple')
        $targetTile.html(parseInt($targetTile.html()) + 1)
      }
    } // for( pathThroughTargets )
  } // makeIntoBomb()

// function makeBoardDOM(){
for(var row = 0; row < boardRows; row++){ // ROW
  $('<div>', { id: ('row' + row), class: 'row' }).appendTo('#board');
  for(var col = 0; col < boardColumns; col++){ // COLUMN
    var $divTile = $('<div>', { class: 'tile', id: makeTileIdStr(row, col), text: 0 } );

    $divTile.click(function(){
      makeIntoBomb( $(this).attr('id') )
      // console.log( $(this).attr('id') )
    }) // divTile.click

    $divTile.appendTo('#row' + row);

    /// lay down bomb? if this id = bombid..
    //var randomNum = Math.floor( (Math.random() * 10 ) )

    // console.log(randomNum)

  } // COLUMN
} // ROW

// }makeBoardDOM()
