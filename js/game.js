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
