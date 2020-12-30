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
}

const choosePiece = (selectedPiecePower) => piecePlayPower = selectedPiecePower;


const handleCellClick = (event) => {
  const identifier = event.target.innerHTML; 
  const currentTeam = whoseTurnIsIt ? "LILY" : "LUNA"; 
  const opposingTeam = !whoseTurnIsIt ? "LILY" : "LUNA"; 
  let cellValue = event.target.innerHTML;
  
  comparePieceAgainstCell(identifier);
  claimCell(event, currentTeam, opposingTeam);
  checkForWin(currentTeam, opposingTeam);
  
  depleteReseource(piecePlayPower, currentTeam);

};

const handlePieceSelectionClick = (event) => {
  const selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
  choosePiece(selectedPiecePower);
  swapBackground(event);
}


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
//    cell.classList.remove("LILY")
//    cell.classList.remove("LUNA")
//   });
// };
