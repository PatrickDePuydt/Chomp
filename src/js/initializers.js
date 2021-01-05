// These are usually either variable declarations or functions with single-concern return values.
// Or assigning event handelers

let piecePlayPower = NaN; // Used for comparing a selected piece with the gameboard
let initialChoice; // Used for the modal to start the game
let whoseTurnIsIt;  // Used for switching turns
let currentTeam; // Used for turn tracking
let opposingTeam; // Used for turn tracking
let circleTurn;
let genus;
let family;
let team;
let canEvenClick;



// A.
const initializeGamePieceControls = () => [...gamePieces].map( piece => {
  family = piece.getAttribute("data-family");
  genus = piece.getAttribute("data-genus");
  piece.classList.add(`${family}-${genus}-3`); // Set initial Class state 

  piece.addEventListener('click', handlePieceSelectionClick); // Assign events listeners to all the pieces
});

const initializeGameGameboardControls = () => [...gameBoardCells].map( cell => {
  cell.addEventListener('click', handleCellClick)
}); // Add events to all the cells

const disableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", true))}; // Used to lock the board
const enableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", false))}; // Used to unlock the board
const handleWin = () => console.log(`Win`); // Used as a placeholder for win tracking
const handleDraw = () => console.log(`draw`); // Used as a placeholder for draw tracking
const isDraw = () => [...gameBoardCells].every( cell => cell.classList.contains("LILY") || cell.classList.contains("LUNA")); // used to check if there was a combination (used in win evaluation)
const resetPiecePower = () => console.log(`Reset`); // Utility for clean piece tracking



