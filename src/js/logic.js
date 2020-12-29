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
  let identifier = event.target.innerHTML; // a1
  // console.log(typeof identifier);
  // console.log(cells[identifier]);
  
  const currentTeam = whoseTurnIsIt ? "SQUARE" : "CIRCLE"; 
  const opposingTeam = !whoseTurnIsIt ? "SQUARE" : "CIRCLE"; 
  let cellValue = event.target.innerHTML;
  
  cells[identifier].taken = true;
  cells[identifier].power = piecePlayPower;
  
  console.log(cells[identifier]);


  comparePieceAgainstCell(cellValue);
  claimCell(event, currentTeam, opposingTeam);
  checkForWin(currentTeam, opposingTeam);
};

const handlePieceSelectionClick = (event) => {
  const selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
  
  choosePiece(selectedPiecePower);
}

const choosePiece = (selectedPiecePower) => {
  piecePlayPower = selectedPiecePower;
  console.log(piecePlayPower)
};

const resetPiecePower = () => {
  console.log(`Reset`);
} 
const comparePieceAgainstCell = (cellValue) => {
  console.log(cellValue);
} 


// const resetBoard = () => {
//   bindEvents(); 

//  return [...gameBoardCells].map( cell => {
//    cell.setAttribute("disabled", false)
//    cell.classList.remove("SQUARE")
//    cell.classList.remove("CIRCLE")
//   });
// };
