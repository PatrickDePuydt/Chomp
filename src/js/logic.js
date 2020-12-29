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

const updateModel = (identifier) => {
  cells[identifier].taken = true;
  cells[identifier].power = piecePlayPower;
  console.log(`Cell power updated to: ${cells[identifier].power}`);
}


const handleCellClick = (event) => {
  const identifier = event.target.innerHTML; 
  const currentTeam = whoseTurnIsIt ? "SQUARE" : "CIRCLE"; 
  const opposingTeam = !whoseTurnIsIt ? "SQUARE" : "CIRCLE"; 
  let cellValue = event.target.innerHTML;
  
  comparePieceAgainstCell(identifier);
  claimCell(event, currentTeam, opposingTeam);
  checkForWin(currentTeam, opposingTeam);
};

const handlePieceSelectionClick = (event) => {
  const selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
  choosePiece(selectedPiecePower);
}

const choosePiece = (selectedPiecePower) => {
  piecePlayPower = selectedPiecePower;
};

const resetPiecePower = () => {
  console.log(`Reset`);
} 
const comparePieceAgainstCell = (identifier) => {
  updateModel(identifier);
} 


// const resetBoard = () => {
//   bindEvents(); 

//  return [...gameBoardCells].map( cell => {
//    cell.setAttribute("disabled", false)
//    cell.classList.remove("SQUARE")
//    cell.classList.remove("CIRCLE")
//   });
// };
