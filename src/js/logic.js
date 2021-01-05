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



const depleteResource = (piecePower, currentTeam, inventoryIndex) => {
// Attribution
  // console.log(`3. current team: `, currentTeam);
  let playerInventory = (circleTurn == "LUNA") ? lunaPieceInventory : lilyPieceInventory;
  // Inventory Depletion
  let depletedInventory = playerInventory[`x${Number(piecePower)}`].quantity - 1;
  // Update inventory
  playerInventory[`x${Number(piecePower)}`].quantity = depletedInventory; 
  
  // console.log(`4. Luna's pieces: `, lunaPieceInventory);
  // console.log(`5. Lily's pieces: `, lilyPieceInventory);

  swapPieceBackground(inventoryIndex, piecePlayPower);
};


const setInitialTeams = (whoseTurnIsIt) => {
  return currentTeam = whoseTurnIsIt ? "LILY" : "LUNA"; 
}


const startGame = () => {
  dismissModal();
  setLayout(circleTurn);
  toggleHeader(team);
};

const turnOverPossession = (team) => {
  // console.log('turnOverPossession 2: ', team);
  if (team == false) {
    team = "LUNA"
  } else {
    team == "LILY";
  }
  // console.log('turnOverPossession 3: ', team);
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


const setLayout = (circleTurn) => {
  let  notActiveControls = (circleTurn == false) ? [...rightControls] : [...leftControls];
  let activeControls = (circleTurn == true) ? [...rightControls] : [...leftControls];
  handleControlButtonClickability();
  setControlButtonLayout(circleTurn);
};

// Here
const handleControlButtonClickability = () => {
  let  notActiveControls = (circleTurn == false) ? [...rightControls] : [...leftControls];
  let activeControls = (circleTurn == true) ? [...rightControls] : [...leftControls];

  if (circleTurn == false) {
    [...activeControls].map( activeControl => {
      activeControl.classList.remove("CANNOT_CLICK");
      activeControl.classList.add("CAN_CLICK");
    });
    
    [...notActiveControls].map( notActiveControl => {
      notActiveControl.classList.remove("CAN_CLICK");
      notActiveControl.classList.add("CANNOT_CLICK");
    });

  } else {
    [...activeControls].map( activeControl => {
      activeControl.classList.add("CAN_CLICK");
      activeControl.classList.remove("CANNOT_CLICK");
    });
    
    [...notActiveControls].map( notActiveControl => {
      notActiveControl.classList.add("CANNOT_CLICK");
      notActiveControl.classList.remove("CAN_CLICK");
    });
  }
};

const handleGameBoardClickability = (canClick) => {
  [...gameBoardCells].map(cell => {
    if (canClick) {
      cell.classList.add("CAN_CLICK");
      cell.classList.remove("CANNOT_CLICK");
      cell.classList.add("animate__bounceIn");
      // 1850
    }else {
      cell.classList.remove("CAN_CLICK");
      cell.classList.add("CANNOT_CLICK");
      cell.classList.remove("animate__bounceIn");
    }
  });
};

const setControlButtonLayout = (circleTurn) => {
  let activeControl = (circleTurn == false) ?  leftControlPanel : rightControlPanel;
  let notActiveControl = (!circleTurn == true) ? rightControlPanel : leftControlPanel;

  
  activeControl.classList.add("LAY_FLEX_ACTIVE");
  activeControl.classList.remove("LAY_FLEX_NOT_ACTIVE");

  notActiveControl.classList.add("LAY_FLEX_NOT_ACTIVE");
  notActiveControl.classList.remove("LAY_FLEX_ACTIVE");
};

