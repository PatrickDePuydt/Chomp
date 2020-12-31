const checkForWin = (currentTeam, opposingTeam)  => {
    if (checkScore(currentTeam)) {
    handleWin();
  } else {
    handleDraw();
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

const handleCellClick = (event) => {
  let identifier = event.target.innerHTML; 
  let cellValue = event.target.innerHTML;
  
  compare(identifier, piecePlayPower); // Check to make sure you can place a piece there
  claimCell(event, currentTeam, opposingTeam); // Take space
  depleteReseource(piecePlayPower, currentTeam); // Reduce player piece inventory
  checkForWin(currentTeam, opposingTeam); // Check to see if anyone won
  turnOverPossession();
  console.log(`cellValue: ${cellValue}`);
};

const handlePieceSelectionClick = (event) => {
  let selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
  console.log(`SelectedPiecePower: ${selectedPiecePower}`);
  choosePiece(selectedPiecePower);
  swapBackground(event);
}

const compare = (identifier, piecePlayPower) => updateModel(identifier);  

const depleteReseource = (piecePower, currentTeam) => {
  // Attribution
  let playerInventory = (String(currentTeam) == "LUNA") ? lunaPieceInventory : lilyPieceInventory;
  // Invetory Depletion
  let depletedInventory = playerInventory[`x${Number(piecePower)}`].quantity - 1;
  // Update inventory
  playerInventory[`x${Number(piecePower)}`].quantity = depletedInventory; 
  console.log(`Luna's pieces: `, lunaPieceInventory);
  console.log(`Lily's pieces: `, lilyPieceInventory);
};

const startGame = (teamChoice) => {
  dismissModal();
  let whoseTurnIsIt = teamChoice == "LILY" ? true : false;
  let currentTeam = teamChoice;
  let opposingTeam = whoseTurnIsIt ? "LUNA" : "LILY"
  setLayout(currentTeam, opposingTeam);
};

const setLayout = (currentTeam, opposingTeam) => {
  switchClass(currentTeam);
};


const turnOverPossession = () => {
  whoseTurnIsIt = !whoseTurnIsIt;
  currentTeam = whoseTurnIsIt ? "LILY" : "LUNA"; 
  opposingTeam = !whoseTurnIsIt ? "LILY" : "LUNA"; 

  setLayout(currentTeam);
};

