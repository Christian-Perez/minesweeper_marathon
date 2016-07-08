#Minesweeper Marathon

##Gameplay Minesweeper
A game of minesweeper starts with a two dimensional array of tiles, some of which contain a bomb that will explode when clicked

players can click tiles, one at a time to reveal whether or not there is a bomb under the tile

When a player has clicked all of the tiles on a board that are NOT bombs, they have won.

##Gameplay Minesweeper Marathon
When finished, minesweeper mararathon wiill start you off with a 3x3 board and each time you clear a board, the next board will have 1 more column and 1 more row of tiles relative to the last board. 
You will start with 60 seconds and get 30 seconds added to your timer each time a board is cleared. 
score will be based on how many non-zero tiles are cleared. 



##Tools Used In Development
Minesweeper Marathon is built from the ground up using HTML, CSS, Vanilla Javascript for game logic and Jquery for animations.

##Methods
I begin constructing my board by defining how many columns and rows there will be. currently, my styling limits the board size to 10x10, but i plan to address that once my function for clearing zero tiles is complete & tested.

each tile is a div with either a '-1' to represent a bomb, or a number between 0 & 8, representing how many adjacent bombs there are.
My approach to creating random and  unique board each time a new game starts involved starting with a board where each tile had a value of zero. 
When I transorm a tile into a bomb, the bomb tile is switched to '-1' and all surrounding tiles are increased by 1 unless the adjacent tile is '-1' (see makeBomb & traverseTiles functions in board.js)


## Playing on your computer
if you'd like to play this game locally on your own computer, simply clone the repo and open the index file with your web browser

##Known Buggs
when starting a new game, before the current game is finished, the timer will count down faster than it should, the issue compounds on itself with each iteration.

###Future Features & Project Progress
https://trello.com/b/7SkwmC8s/minesweeper-trailblazer

###Play In Browser
https://chrisdillon92.github.io/minesweeper_marathon/

