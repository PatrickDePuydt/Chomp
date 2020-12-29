const checkForWin = (currentTeam, opposingTeam)  => {
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

const checkScore = (currentTeam) => {
  return winningCombinations.some(winningCombo => { 
    return winningCombo.every(cell => { 
      return gameBoardCells[cell].classList.contains(currentTeam); 
    });
  });
};

const handleCellClick = (event) => {
  const currentTeam = whoseTurnIsIt ? "SQUARE" : "CIRCLE"; 
  const opposingTeam = !whoseTurnIsIt ? "SQUARE" : "CIRCLE"; 
  claimCell(event, currentTeam, opposingTeam);
  checkForWin(currentTeam, opposingTeam);
};

const handlePieceSelectionClick = (event) => {
  console.log(`Helllooooooo`);
}


// const resetBoard = () => {
//   bindEvents(); 

//  return [...gameBoardCells].map( cell => {
//    cell.setAttribute("disabled", false)
//    cell.classList.remove("SQUARE")
//    cell.classList.remove("CIRCLE")
//   });
// };
