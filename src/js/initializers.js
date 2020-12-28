const bindEvents = () => [...gameBoardCells].map( cell => cell.addEventListener('click', handleClick));
const disableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", true))};
const enableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", false))}