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


const startGame = () => {
  console.log(`4:`, team);
  dismissModal();
  setLayout(team);
  toggleHeader(team);
};

const turnOverPossession = () => {
  setInitialTeams(!whoseTurnIsIt);
  console.log('2: ', setInitialTeams(!whoseTurnIsIt));
}

const updateModel = (identifier) => {
  cells[identifier].taken = true;
  cells[identifier].power = piecePlayPower;
}
const toggleHeader = (team) => {
   
   if (currentTeam == "LUNA") {
    header.classList.remove("LILY"); // Clean out any debris
    header.classList.add("LUNA"); // Add active class
  } else  {
    header.classList.remove("LUNA"); // Clean out any debris
    header.classList.add("LILY"); // Add active class
  }
};


const setLayout = (player) => {
  let activeControls = (player == "LUNA") ? [...rightControls] : [...leftControls];
  let notActiveControls = (player == "LILY") ? [...rightControls] : [...leftControls];
  
  handleControlButtonClickability(activeControls, notActiveControls);
  setControlButtonLayout(whoseTurnIsIt);
  console.log(`5.`);
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

