const handleCellClick = (event) => {
  const identifier = event.target.innerHTML;
  let inventoryIndex = (family == "x") ? lunaPieceInventory : lilyPieceInventory;
  currentTeam = !circleTurn ? "LUNA" : "LILY";
  
  if (superviseGameplay()) {
    console.log(`can play`);
  } else {
    console.log(`cannot play`);
  }
  
  updateModel(identifier); 
  depleteResource(piecePlayPower, currentTeam, inventoryIndex); 
  setCellBackground(event.target, family, piecePlayPower);
  checkForWin(currentTeam);
  swapTurns();
  setLayout(circleTurn);
  handleGameBoardClickability(false);
  handlePieceEventListeners();
  updateInstructions("Choose a new piece");
};

const handlePieceSelectionClick = (event) => {
  let selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
  
  genus = event.target.getAttribute("data-genus");
  family = event.target.getAttribute("data-family");
  piecePower = selectedPiecePower;

  choosePiece(selectedPiecePower);
  event.target.classList.toggle("CLICK"); // Add an animation helper
  handleGameBoardClickability(true);
  updateInstructions("Choose a game cell");
}

const handleHover = (event) => {
  cellIdentifier = event.target.innerText;
  
  if (superviseGameplay()) {
    event.target.classList.add("CAN_CLICK");
    event.target.classList.remove("CANNOT_CLICK");
  } else {
    event.target.classList.add("CANNOT_CLICK");
    event.target.classList.remove("CAN_CLICK");
  }
}
