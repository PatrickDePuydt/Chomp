const checkForWin = (currentTeam, opposingTeam)  => {
    if (checkScore(currentTeam)) {
    handleWin();
  } else if (isDraw()) {
    handleDraw();
  } else {
    whoseTurnIsIt = !whoseTurnIsIt; 
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
  let identifier = event.target.innerHTML; 
  let currentTeam = whoseTurnIsIt ? "LILY" : "LUNA"; 
  let opposingTeam = !whoseTurnIsIt ? "LILY" : "LUNA"; 
  let cellValue = event.target.innerHTML;
  
  comparePieceAgainstCell(identifier);
  claimCell(event, currentTeam, opposingTeam);
  checkForWin(currentTeam, opposingTeam);

  depleteReseource(piecePlayPower, currentTeam);

};

const handlePieceSelectionClick = (event) => {
  let selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
  choosePiece(selectedPiecePower);
  swapBackground(event);
}


const resetPiecePower = () => {
  console.log(`Reset`);
} 
const comparePieceAgainstCell = (identifier) => {
  updateModel(identifier);
} 


const startGame = (teamChoice) => {
  if (teamChoice == "LUNA") {
    lunaStart()
  } else {
    lilyStart()
  }
  dismissModal();
};

const lunaStart = () => {
  console.log(`Del Tuna`);
  setLayout("LUNA");
};

const lilyStart = () => {
  console.log(`Ahhhwaaa?!!`);
  setLayout("LILY");
};

const setLayout = (team) => (team == "LUNA") ? setLuna() : setLily();

const setLuna = () => {
  console.log(`Tuna Behr`);
};