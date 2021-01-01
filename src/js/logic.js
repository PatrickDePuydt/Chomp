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
    updateModel(identifier); 
  }
  console.log(piecePlayPower, cellPrice);
};

const depleteResource = (piecePower, currentTeam) => {
  // Attribution
  let playerInventory = (String(currentTeam) == "LUNA") ? lunaPieceInventory : lilyPieceInventory;
  // Invetory Depletion
  let depletedInventory = playerInventory[`x${Number(piecePower)}`].quantity - 1;
  // Update inventory
  playerInventory[`x${Number(piecePower)}`].quantity = depletedInventory; 
  console.log(`Luna's pieces: `, lunaPieceInventory);
  console.log(`Lily's pieces: `, lilyPieceInventory);
};

const setInitialTeams = (whoseTurnIsIt) => {
  currentTeam = whoseTurnIsIt ? "LILY" : "LUNA"; 
  opposingTeam = !whoseTurnIsIt ? "LILY" : "LUNA"; 
}


const startGame = (teamChoice) => {
  let whoseTurnIsIt = teamChoice == "LILY" ? true : false;
  dismissModal();
  setInitialTeams(whoseTurnIsIt);
  setLayout();
  toggleHeader();
};

const turnOverPossession = () => {
  whoseTurnIsIt = !whoseTurnIsIt; // Not sure I need these anymore
  currentTeam = whoseTurnIsIt ? "LILY" : "LUNA"; // Not sure I need these anymore
  opposingTeam = !whoseTurnIsIt ? "LILY" : "LUNA";  // not sure I need these anymore

  setLayout();
};

const updateModel = (identifier) => {
  cells[identifier].taken = true;
  cells[identifier].power = piecePlayPower;
}

