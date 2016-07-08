#Minesweeper Marathon

##Gameplay
A game of minesweeper starts with a two dimensional array of tiles, some of which contain a bomb that will explode when clicked

players can click tiles, one at a time to reveal whether or not there is a bomb under the tile

When a player has clicked all of the tiles on a board that are NOT bombs, they have won.


##Tools Used In Development
Minesweeper Marathon is built from the ground up using HTML, CSS, Vanilla Javascript for game logic and Jquery for animations.

##Methods
I begin constructing my board by defining how many columns and rows there will be. currently, my styling limits the board size to 10x10, but i plan to address that once my function for clearing zero tiles is complete & tested.

each tile is a div with either a '-1' to represent a bomb, or a number between 0 & 8, representing how many adjacent bombs there are.
my approach to creating random and  unique board each new game involved starting with a board where each tile had a value of zero. When I place a bomb, the bomb tile is switched to '-1' and all surrounding tiles are increased by 1 unless the adjacent tile is '-1' (see makeBomb & traverseTiles functions in board.js)

#Playing on your computer
if you'd like to play this game locally on your own computer, simply clone the repo and open the index file in your web browser

#Known buggs
when starting a new game, before the current game is finished, the timer will count down faster than it should, the issue compounds on itself with each iteration.

#future features & project progress
https://trello.com/b/7SkwmC8s/minesweeper-trailblazer

