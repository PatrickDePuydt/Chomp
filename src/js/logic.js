const handleWin = () => console.log(`Win`);
const handleDraw = () => console.log(`draw`);
const handleTurn = () => turnOver(); 
const isDraw = () => [...gameBoardCells].every( cell => cell.classList.contains("SQUARE") || cell.classList.contains("CIRCLE"));
const turnOver = () => whoseTurnIsIt = !whoseTurnIsIt; 
let whoseTurnIsIt = false; 

const handleClick = (event) => {
  const currentTeam = whoseTurnIsIt ? "SQUARE" : "CIRCLE"; 
  const opposingTeam = !whoseTurnIsIt ? "SQUARE" : "CIRCLE"; 
  claimCell(event, currentTeam, opposingTeam);
  checkForWin(currentTeam, opposingTeam);
};

function checkForWin(currentTeam, opposingTeam) {
    if (checkScore(currentTeam)) {
    handleWin();
  } else if (isDraw()) {
    handleDraw();
  } else {
    handleTurn(currentTeam, opposingTeam);
  }
}

const claimCell = (event, currentTeam, opposingTeam) => { 
  event.target.classList.remove(opposingTeam); 
  event.target.classList.add(currentTeam); 
}

function checkScore(currentTeam) {
  return winningCombinations.some(winningCombo => { 
    return winningCombo.every(cell => { 
      return gameBoardCells[cell].classList.contains(currentTeam); 
    });
  });
};
