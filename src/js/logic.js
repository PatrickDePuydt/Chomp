const checkForWin = (currentTeam)  => {
  
  if (checkScore(currentTeam)) {

    handleWin();
    console.log(`Handle Win: `, checkScore(currentTeam));
  } else {
    // handleDraw();
    console.log(`Still going: `, checkScore(currentTeam));
  }
}

const choosePiece = (selectedPiecePower) => {
  piecePlayPower = selectedPiecePower;
  // console.log(`6. piecePowerPlay`, piecePlayPower);
}

const claimCell = (event, currentTeam, opposingTeam) => { 
  event.classList.add(currentTeam); 
  event.classList.remove(opposingTeam); 
}

const checkScore = (currentTeam) => {
  return winningCombinations.some(winningCombo => { 
    return winningCombo.every(cell => { 
      return gameBoardCells[cell].classList.contains(currentTeam); 
    });
  });
};

const comparePieceToCell = (element, cellIdentifier, piecePlayPower) => {
  // console.log(`Compare`, element, cellIdentifier, piecePlayPower);
};


function superviseGameplay() {
  let cellPowerPrice = cells[cellIdentifier].power;

  if (piecePlayPower > cellPowerPrice) {
    // console.log(`1. piecePlayPower, cellPowerPrice`, piecePlayPower, cellPowerPrice);
    return true;
  } else if (piecePlayPower == cellPowerPrice) {
    // console.log(`2. piecePlayPower, cellPowerPrice`, piecePlayPower, cellPowerPrice);
    return false;
  } else {
    // console.log(`3. piecePlayPower, cellPowerPrice`, piecePlayPower, cellPowerPrice);
    return false;
  }
}

const bounceClick = () => {
  (`2 Bounce Click`);
  handleGameBoardClickability(false);
}

const depleteResource = (piecePower, currentTeam, inventoryIndex) => {
  // Attribution
  (`3. current team: `, currentTeam);
  let playerInventory = (circleTurn == false) ? lunaPieceInventory : lilyPieceInventory;
  // Inventory Depletion
  (circleTurn == false);
  let depletedInventory = playerInventory[`x${Number(piecePower)}`].quantity - 1;
  // Update inventory
  playerInventory[`x${Number(piecePower)}`].quantity = depletedInventory; 
  
  // console.log(`4. Luna's pieces: `, lunaPieceInventory);
  // console.log(`5. Lily's pieces: `, lilyPieceInventory);

  swapPieceBackground(playerInventory, piecePlayPower);
};


const setInitialTeams = (whoseTurnIsIt) => {
  return currentTeam = whoseTurnIsIt ? "LILY" : "LUNA"; 
}


const startGame = () => {
  dismissModal();
  setLayout(circleTurn);
  toggleHeader(team);
  handlePieceEventListeners();
  hideInstructions(circleTurn);
};

const turnOverPossession = (team) => {
  ('turnOverPossession 2: ', team);
  if (team == false) {
    team = "LUNA"
  } else {
    team == "LILY";
  }
  ('turnOverPossession 3: ', team);
}

const updateModel = (identifier, piecePlayPower) => {
  cells[identifier].taken = true;
  cells[identifier].power = piecePlayPower;
  cells[identifier].chomp.push(piecePlayPower);
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
  let notActiveControls = (circleTurn == false) ? [...rightControls] : [...leftControls];
  let activeControls = (circleTurn == true) ? [...rightControls] : [...leftControls];
  
  handleControlButtonClickability();
  setControlButtonLayout(circleTurn);
  handleHeaderLayout(circleTurn);
  handleInstructionsLayout(circleTurn);
  hideInstructions(circleTurn);
};

const hideInstructions = (circleTurn) => {
  let notActiveInstructions = circleTurn ? [...leftInstructions] : [...rightInstructions];
  let activeInstructions = !circleTurn ? [...leftInstructions] : [...rightInstructions]
  
  notActiveInstructions.map(quip => {
    quip.classList.add("HIDDEN");
  });
  
  activeInstructions.map(quip => {
    quip.classList.remove("HIDDEN");
  });
};


const handleHeaderLayout = (circleTurn) => {
  if (circleTurn) {
    headerTag.classList.add("FLIP");
  }  else {
    headerTag.classList.remove("FLIP");
  }
}

const handleInstructionsLayout = (circleTurn) => {
  if (circleTurn) {
    instructions.classList.add("FLIP");
  }  else {
    instructions.classList.remove("FLIP");
  }
}


const handleControlButtonClickability = () => {
  let  notActiveControls = (circleTurn == false) ? [...rightControls] : [...leftControls];
  let activeControls = (circleTurn == true) ? [...rightControls] : [...leftControls];
// Here

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
      cell.addEventListener('click', handleCellClick);
      
    }else {
      cell.classList.remove("CAN_CLICK");
      cell.classList.add("CANNOT_CLICK");
      cell.classList.remove("animate__bounceIn");
      cell.removeEventListener('click', handleCellClick);
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


 const updateInstructions = (instructions) => {
   instructionCopy.innerText = instructions;
 }

 const handleWin = () => {
  winningCombinations.some(winningCombo => { 
    winningCombo.every(cell => { 
      if (gameBoardCells[cell].classList.contains(currentTeam)) {
        gameBoardCells[cell].classList.add("WIN");
      }
    });
  });

  updateInstructions("Winner");
};