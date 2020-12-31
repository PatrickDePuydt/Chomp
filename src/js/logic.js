const checkForWin = (currentTeam, opposingTeam)  => {
    if (checkScore(currentTeam)) {
    handleWin();
  } else {
    handleDraw();
  }
}

const choosePiece = (selectedPiecePower) => {
  piecePlayPower = selectedPiecePower;
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

const comparePieceToCell = (identifier, piecePlayPower) => {
  let cellPrice = Number(cells[identifier].power);
  if (piecePlayPower > cellPrice) {
    updateModel(identifier);  // 1
  }
  console.log(piecePlayPower, cellPrice);
};

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

const setLayout = (currentTeam, opposingTeam) => switchClass(currentTeam);

const turnOverPossession = () => {
  whoseTurnIsIt = !whoseTurnIsIt;
  currentTeam = whoseTurnIsIt ? "LILY" : "LUNA"; 
  opposingTeam = !whoseTurnIsIt ? "LILY" : "LUNA"; 

  setLayout(currentTeam);
};

// 2
const updateModel = (identifier) => {
  cells[identifier].taken = true;
  cells[identifier].power = piecePlayPower;
}