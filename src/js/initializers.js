let piecePlayPower = NaN; // Used for comparing a selected piece with the gameboard
let initialChoice; // Used for the modal to start the game

let whoseTurnIsIt;  // Used for switching turns
let currentTeam;
let opposingTeam;

const assignCellEventHandlers = () => [...gameBoardCells].map( cell => cell.addEventListener('click', handleCellClick));
const assignPieceEventHandlers = () => [...gamePieces].map( piece => piece.addEventListener('click', handlePieceSelectionClick));
const disableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", true))};
const enableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", false))};
const handleWin = () => console.log(`Win`);
const handleDraw = () => console.log(`draw`);
const isDraw = () => [...gameBoardCells].every( cell => cell.classList.contains("LILY") || cell.classList.contains("LUNA"));
const choosePiece = (selectedPiecePower) => piecePlayPower = selectedPiecePower;
const resetPiecePower = () => console.log(`Reset`);



