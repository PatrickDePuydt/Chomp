const assignCellEventHandlers = () => [...gameBoardCells].map( cell => {
  let identifier = cell.innerHTML;

  cell.addEventListener('click', handleCellClick);
  
  // switch(identifier) {
  //   case "a1":
  //     console.log(a1);
  //     break;
  //   default:
  //     console.log(`Case Default`);
  // }

  // console.log(cells[identifier])
  
  // cell.setAttribute(a1.power.name, a1.power.value); // Works, but boo hoo
  
  // console.log(identifier);
  // cell.setAttribute(identifier.power.name, identifier.power.value); // Does not work, but what I'm trying to do

  
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

