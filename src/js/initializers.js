const assignEventHandlers = () => [...gameBoardCells].map( cell => cell.addEventListener('click', handleClick));
const disableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", true))};
const enableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", false))};
const handleWin = () => console.log(`Win`);
const handleDraw = () => console.log(`draw`);
const handleTurn = () => turnOver(); 
const isDraw = () => [...gameBoardCells].every( cell => cell.classList.contains("SQUARE") || cell.classList.contains("CIRCLE"));
const turnOver = () => whoseTurnIsIt = !whoseTurnIsIt; 
let whoseTurnIsIt = false; 

