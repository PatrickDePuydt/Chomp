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
};

const depleteResource = (piecePower, currentTeam) => {
// Attribution
  let playerInventory = (String(currentTeam) == "LUNA") ? lunaPieceInventory : lilyPieceInventory;
  // Inventory Depletion
  let depletedInventory = playerInventory[`x${Number(piecePower)}`].quantity - 1;
  // Update inventory
  playerInventory[`x${Number(piecePower)}`].quantity = depletedInventory; 
  
  console.log(`Luna's pieces: `, lunaPieceInventory);
  console.log(`Lily's pieces: `, lilyPieceInventory);
};

// swapBackground(piecePower, playerInventory[`x${Number(piecePower)}`].quantity);




const setInitialTeams = (whoseTurnIsIt) => {
  currentTeam = whoseTurnIsIt ? "LILY" : "LUNA"; 
  opposingTeam = !whoseTurnIsIt ? "LILY" : "LUNA"; 
}


const startGame = (teamChoice) => {
  let whoseTurnIsIt = teamChoice == "LILY" ? true : false;
  
  dismissModal();
  setInitialTeams(whoseTurnIsIt);
  setLayout(whoseTurnIsIt);
  toggleHeader();
  
};

const turnOverPossession = () => {
  whoseTurnIsIt = !whoseTurnIsIt; // Not sure I need these anymore
  currentTeam = whoseTurnIsIt ? "LILY" : "LUNA"; // Not sure I need these anymore
  opposingTeam = !whoseTurnIsIt ? "LILY" : "LUNA";  // not sure I need these anymore

  // setLayout(currentTeam, opposingTeam); // Different from the global variables defined and managed in setInitialTeams
  toggleHeader(currentTeam, opposingTeam); // Different from the global variables defined and managed in setInitialTeams
};

const updateModel = (identifier) => {
  cells[identifier].taken = true;
  cells[identifier].power = piecePlayPower;
}
const toggleHeader = (currentTeam, opposingTeam) => {
   if (currentTeam == "LUNA") {
    header.classList.remove("LILY"); // Clean out any debris
    header.classList.add("LUNA"); // Add active class
  } else  {
    header.classList.remove("LUNA"); // Clean out any debris
    header.classList.add("LILY"); // Add active class
  }
};