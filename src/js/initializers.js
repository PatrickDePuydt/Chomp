// These are usually either variable declarations or functions with single-concern return values.
// Or assigning event handelers

let piecePlayPower = NaN; // Used for comparing a selected piece with the gameboard
let initialChoice; // Used for the modal to start the game
let whoseTurnIsIt;  // Used for switching turns
let currentTeam; // Used for turn tracking
let opposingTeam; // Used for turn tracking

const assignPieceEventHandlers = () => [...gamePieces].map( piece => piece.addEventListener('click', handlePieceSelectionClick)); // Assign events listeners to all the pieces
const assignCellEventHandlers = () => [...gameBoardCells].map( cell => cell.addEventListener('click', handleCellClick)); // Add events to all the cells
const setInitialClassState = () => [...gamePieces].map( piece => {
  piece.classList.add("x-3-3");
}); // Add events to all the cells

const disableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", true))}; // Used to lock the board
const enableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", false))}; // Used to unlock the board
const handleWin = () => console.log(`Win`); // Used as a placeholder for win tracking
const handleDraw = () => console.log(`draw`); // Used as a placeholder for draw tracking
const isDraw = () => [...gameBoardCells].every( cell => cell.classList.contains("LILY") || cell.classList.contains("LUNA")); // used to check if there was a combination (used in win evaluation)
const resetPiecePower = () => console.log(`Reset`); // Utility for clean piece tracking
const setLayout = () => switchClass(currentTeam, opposingTeam); // Sets the layout of the board

