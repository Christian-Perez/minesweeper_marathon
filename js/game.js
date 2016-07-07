function traverseTiles(tileIdStr, directionStr){
  // define path directions
  var shift = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  }

  // start at titleIdStr
  var targetRowNum = parseInt(tileIdStr.slice(0, 2))
  var targetColNum = parseInt(tileIdStr.slice(2))
  //shift tile focus
  targetRowNum += shift[directionStr][0]
  targetColNum += shift[directionStr][1]

  return makeTileIdStr(targetRowNum, targetColNum)
} // traverseTile(tileIdStr, directionStr)

// // // // //

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
