let whoseTurnIsIt = false;  // Used for switching turns
let piecePlayPower = NaN; // Used for comparing a selected piece with the gameboard
let initialChoice; // Used for the modal to start the game

const assignCellEventHandlers = () => [...gameBoardCells].map( cell => cell.addEventListener('click', handleCellClick));
const assignPieceEventHandlers = () => [...gamePieces].map( piece => piece.addEventListener('click', handlePieceSelectionClick));

const disableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", true))};
const enableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", false))};

const handleWin = () => console.log(`Win`);
const handleDraw = () => console.log(`draw`);
const isDraw = () => [...gameBoardCells].every( cell => cell.classList.contains("LILY") || cell.classList.contains("LUNA"));

const choosePiece = (selectedPiecePower) => piecePlayPower = selectedPiecePower;

const resetPiecePower = () => console.log(`Reset`);


const startGame = (teamChoice) => {
  if (teamChoice == "LUNA") {
    lunaStart()
  } else {
    lilyStart()
  }
  dismissModal();
};

const lunaStart = () => {
  console.log(`Del Tuna`);
  setLayout("LUNA");
};

const lilyStart = () => {
  console.log(`Ahhhwaaa?!!`);
  setLayout("LILY");
};

const setLayout = (team) => (team == "LUNA") ? setLuna() : setLily();

const setLuna = () => {
  console.log(`Tuna Behr`);
};