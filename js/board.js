// console.log('board.js');
var boardRows = 10;
var boardColumns = 10;
// -1 = bomb
// 0 through 8 = clear tile
var tileValuesArr = [[],[]];
var board = $('#board');


// ** ** **
// ** for support of board greater than 10 tiles in length..
//supports number < 99
// function makeTileId(length){
//
//   var tileId = '' + length
//   function makeAxis(){
//     if(length < 9){
//       var section = ('0' + length ) ;
//     }else{
//       var section = ('' + length ) ;
//     }
//     // console.log(section);
//     return(section);
//   }
//   // return ('' + makeAxis(boardRows) + makeAxis(boardColumns);
//   // console.log(makeAxis(length));
//   return("" + length);
// }
// makeTileId(boardRows);
// ** ** **



for(var i = 0; i < boardRows; i++){ //X axis
    $('<div>', { class: ('row' + i) }).appendTo('#board');
    for(var j = 0; j < boardColumns; j++){
      //asign id that is a string of i + j
      var $divTile = $('<div>', { class: 'tile', id: ("" + i + j), text: 0 } );
      $divTile.click(function(){
        // console.log($(this).id);
        $(this).css('background-color', 'orange')
        // console.log( 'before: ' + $(this).html() );
        $(this).html('koala')
        console.log( $(this).attr('id') )
        // console.log( 'after: ' + $(this).html() );
      })
      $divTile.appendTo('.row' + i);

      // ADD EVENT LISTENER
      // RETURN ID VALUES OF ALL SURROUNDING TILES
      // CHANGE STYLE OF THOSE tiles
      // $('<div>', { class: 'tile', id: (makeTileId()), text: 0 } ).appendTo('.row' + i);
    }
}
