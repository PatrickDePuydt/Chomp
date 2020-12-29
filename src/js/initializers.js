const assignCellEventHandlers = () => [...gameBoardCells].map( cell => {
  cell.addEventListener('click', handleCellClick);
  cell.setAttribute(a1.power.name, a1.power.value);
  cell.setAttribute(a1.taken.name, a1.taken.value);
  cell.setAttribute(a1.team.name, a1.team.value);
  cell.setAttribute(a1.chomp.name, a1.chomp.value);
});



const assignPieceEventHandlers = () => [...gamePieces].map( piece => piece.addEventListener('click', handlePieceSelectionClick));
const disableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", true))};
const enableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", false))};

const handleWin = () => console.log(`Win`);
const handleDraw = () => console.log(`draw`);
const handleTurn = () => turnOver(); 
const isDraw = () => [...gameBoardCells].every( cell => cell.classList.contains("SQUARE") || cell.classList.contains("CIRCLE"));

const turnOver = () => whoseTurnIsIt = !whoseTurnIsIt; 
let whoseTurnIsIt = false; 
let piecePlayPower = NaN;

