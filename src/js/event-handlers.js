const handleCellClick = (event) => {
  const identifier = event.target.innerHTML;
  let inventoryIndex = (family == "x") ? lunaPieceInventory : lilyPieceInventory;
  currentTeam = !circleTurn ? "LUNA" : "LILY";
  
  comparePieceToCell(identifier, piecePlayPower); // Check to make sure you can place a piece there
  claimCell(event.target, currentTeam, opposingTeam); // Take space
  depleteResource(piecePlayPower, currentTeam, inventoryIndex); 
  setCellBackground(event.target, family, piecePlayPower);
  
  checkForWin(currentTeam);
  swapTurns();
  setLayout(circleTurn);
  handleGameBoardClickability(false);
  handlePieceEventListeners();
};

const handlePieceSelectionClick = (event) => {
  // console.log(`handlePieceSelection`);  
  let selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
  
  choosePiece(selectedPiecePower);
  
  event.target.classList.toggle("CLICK"); // Add an animation helper
  
  // Set Family Genus
  genus = event.target.getAttribute("data-genus");
  family = event.target.getAttribute("data-family");
  
  handleGameBoardClickability(true);


  // console.log(`Handle Piece Click,`, currentTeam);
}

const swapTurns = () => circleTurn = !circleTurn;
