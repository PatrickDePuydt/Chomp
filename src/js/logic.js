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


const setInitialTeams = (whoseTurnIsIt) => {
  return currentTeam = whoseTurnIsIt ? "LILY" : "LUNA"; 
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


const setLayout = (whoseTurnIsIt) => {
  let activeControls = whoseTurnIsIt ? [...rightControls] : [...leftControls];
  let notActiveControls = !whoseTurnIsIt ? [...rightControls] : [...leftControls];
  handleControlButtonClickability(activeControls, notActiveControls);
  setControlButtonLayout(whoseTurnIsIt);
};

const handleControlButtonClickability = (activeControls, notActiveControls) => {
  activeControls.map(control => control.classList.add("CAN_CLICK"));
  notActiveControls.map(control => control.classList.add("CANNOT_CLICK"));
}

const setControlButtonLayout = (whoseTurnIsIt) => {
  let activePanel = whoseTurnIsIt ? rightControlPanel : leftControlPanel;
  let notActivePanel = !whoseTurnIsIt ? rightControlPanel : leftControlPanel;
  activePanel.classList.add("LAY_FLEX_ACTIVE");
  notActivePanel.classList.add("LAY_FLEX_NOT_ACTIVE");
}