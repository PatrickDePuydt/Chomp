const handleCellClick = (event) => {
  const identifier = event.target.innerHTML;
  let inventoryIndex = (family == "x") ? lunaPieceInventory : lilyPieceInventory;
  currentTeam = !circleTurn ? "LUNA" : "LILY";
  
  comparePieceToCell(event.target, identifier, piecePlayPower); // Check to make sure you can place a piece there

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
  genus = event.target.getAttribute("data-genus");
  family = event.target.getAttribute("data-family");
  
  choosePiece(selectedPiecePower);
  event.target.classList.toggle("CLICK"); // Add an animation helper
  handleGameBoardClickability(true);
}

const swapTurns = () => circleTurn = !circleTurn;
