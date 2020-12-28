let whoseTurnIsIt = false; 
const turnOver = () => whoseTurnIsIt = !whoseTurnIsIt; 
const gameBoardCells = document.querySelectorAll(`[data-target='cell']`); 
const statusBar = document.querySelector(`[data-target='status_bar']`);
const resetButton = document.querySelector(`[data-target='reset']`);
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

const disableBoard = () => {gameBoardCells.forEach( cell => {
  cell.setAttribute("disabled", true)
})}

const enableBoard = () => {gameBoardCells.forEach( cell => {
  cell.setAttribute("disabled", false)
})}


const handleWin = () => {
  disableBoard();
  statusBar.innerText = "Win";
}

const handleDraw = () => {
  enalbeBoard();
  statusBar.innerText = "Draw";
}

const handleTurn = () => turnOver(); 
  

const resetBoard = () => {
  bindEvents(); 

 return [...gameBoardCells].map( cell => {
   cell.setAttribute("disabled", false)
   cell.classList.remove("SQUARE")
   cell.classList.remove("CIRCLE")
  });
};

function checkScore(currentTeam) {
  return winningCombinations.some(winningCombo => { 
    return winningCombo.every(cell => { 
      return gameBoardCells[cell].classList.contains(currentTeam); 
    });
  });
};

const isDraw = () => { 
  return [...gameBoardCells].every( cell => cell.classList.contains("SQUARE") || cell.classList.contains("CIRCLE")) 
};

const handleClick = (event) => {
  const currentTeam = whoseTurnIsIt ? "SQUARE" : "CIRCLE"; 
  const nextTeam = !whoseTurnIsIt ? "SQUARE" : "CIRCLE"; 
  markCell(event, currentTeam);
  
  if (checkScore(currentTeam)) {
    handleWin();
  } else if (isDraw()) {
    handleDraw();
  } else {
    handleTurn(currentTeam, nextTeam);
  }
};

const markCell = (event, currentTeam) => { 
  event.target.classList.add(currentTeam); 
  event.target.setAttribute("disabled", true);
}

const bindEvents = () => {
  return [...gameBoardCells].map( cell => {
    cell.addEventListener('click', handleClick, { once: true });
  });
}

bindEvents();