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
  turnOverPosession();
};

const handlePieceSelectionClick = (event) => {
  let selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
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
  // if Lily, whoseTurnIsIt = true 
  // if Luna, whoseTurnIsIt = false
  let whoseTurnIsIt = teamChoice == "LILY" ? true : false;
  let currentTeam = teamChoice;
  let opposingTeam = whoseTurnIsIt ? "LUNA" : "LILY"
  console.log(`Team choice: ${teamChoice}, but the currentTeam is set to: ${currentTeam}, and the opposing team is: ${opposingTeam}`);
  setLayout(currentTeam, opposingTeam);
};


const setLayout = (currentTeam, opposingTeam) => {
  switchClass(currentTeam, switcherHeader); 
  switchClass(currentTeam, LUNACONTROLS);
  switchClass(opposingTeam, LILYCONTROLS);
};

