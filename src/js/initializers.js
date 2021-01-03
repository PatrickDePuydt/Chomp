// These are usually either variable declarations or functions with single-concern return values.
// Or assigning event handelers

let piecePlayPower = NaN; // Used for comparing a selected piece with the gameboard
let initialChoice; // Used for the modal to start the game
let whoseTurnIsIt;  // Used for switching turns
let currentTeam; // Used for turn tracking
let opposingTeam; // Used for turn tracking
let genus;

const initializeGamePieceControls = () => [...gamePieces].map( piece => {
  const family = piece.getAttribute("data-family");
  const genus = piece.getAttribute("data-genus");
  piece.classList.add(`${family}-${genus}-3`); // Set initial Class state 
  initializeAnimation(piece, "CAN_CLICK");

  piece.addEventListener('click', handlePieceSelectionClick); // Assign events listeners to all the pieces
});

const initializeGameGameboardControls = () => [...gameBoardCells].map( cell => {
  cell.addEventListener('click', handleCellClick)
  initializeAnimation(cell, "CANNOT_CLICK");
}); // Add events to all the cells

const disableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", true))}; // Used to lock the board
const enableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", false))}; // Used to unlock the board
const handleWin = () => console.log(`Win`); // Used as a placeholder for win tracking
const handleDraw = () => console.log(`draw`); // Used as a placeholder for draw tracking
const isDraw = () => [...gameBoardCells].every( cell => cell.classList.contains("LILY") || cell.classList.contains("LUNA")); // used to check if there was a combination (used in win evaluation)
const resetPiecePower = () => console.log(`Reset`); // Utility for clean piece tracking
const setLayout = () => switchClass(currentTeam, opposingTeam); // Sets the layout of the board

const initializeAnimation = (element, animationState) => {
  element.classList.add("animate__animated");
  element.classList.add(animationState);
};

const animationEngine = (element, animation) => {
  let sturdyAnimation = animation ? animation : "bounce";
  setTimeout(() => {
    
  }, timeout);
  element.classList.add(`animate__${sturdyAnimation}`);
}