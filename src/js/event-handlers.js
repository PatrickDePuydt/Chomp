const handleCellClick = (event) => {
  const identifier = event.target.innerHTML;
  let inventoryIndex = (family == "x") ? lunaPieceInventory : lilyPieceInventory;
  currentTeam = !circleTurn ? "LUNA" : "LILY";
  
  // comparePieceToCell(); // Check to make sure you can place a piece there

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
  piecePower = selectedPiecePower;

  
  choosePiece(selectedPiecePower);
  event.target.classList.toggle("CLICK"); // Add an animation helper
  handleGameBoardClickability(true);
  superviseGameplay();
  console.log(`piecePower`, piecePower);
}

const handleHover = (event) => {
  let localIdentifier = event.target.innerText;
  
  comparePieceToCell(event.target, localIdentifier, piecePlayPower)
  superviseGameplay(localIdentifier, piecePlayPower);
}


const swapTurns = () => circleTurn = !circleTurn;
