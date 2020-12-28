const handleWin = () => console.log(`Win`);
const handleDraw = () => console.log(`draw`);
const handleTurn = () => turnOver(); 
const isDraw = () => [...gameBoardCells].every( cell => cell.classList.contains("SQUARE") || cell.classList.contains("CIRCLE"));
const turnOver = () => whoseTurnIsIt = !whoseTurnIsIt; 
let whoseTurnIsIt = false; 

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

function checkScore(currentTeam) {
  return winningCombinations.some(winningCombo => { 
    return winningCombo.every(cell => { 
      return gameBoardCells[cell].classList.contains(currentTeam); 
    });
  });
};

bindEvents();