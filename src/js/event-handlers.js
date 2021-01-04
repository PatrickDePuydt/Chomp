const handleCellClick = (event) => {
  const identifier = event.target.innerHTML;
  
  currentTeam = !circleTurn ? "LUNA" : "LILY";
  
  console.log(`2. Cell Click: `, currentTeam);
  console.log(`2.1 circleTurn: `, circleTurn);
  
  let inventoryIndex = (family == "x") ? lunaPieceInventory : lilyPieceInventory;
  
  comparePieceToCell(identifier, piecePlayPower); // Check to make sure you can place a piece there

  claimCell(event, currentTeam, opposingTeam); // Take space
  
  depleteResource(piecePlayPower, currentTeam, inventoryIndex); 
  
  setCellBackground(event.target, family, piecePlayPower);
  
  console.log(`family: `, family);
  swapPieceBackground(inventoryIndex, piecePlayPower);
  
  swapTurns();
  setLayout();
};

const handlePieceSelectionClick = (event) => {
  let currentTeam = circleTurn;
  
  let selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
  
  choosePiece(selectedPiecePower);
  
  event.target.classList.toggle("CLICK"); // Add an animation helper
  
  // Set Family Genus
  genus = event.target.getAttribute("data-genus");
  family = event.target.getAttribute("data-family");

  console.log(`Handle Piece Click,`, currentTeam);
}

const swapTurns = () => circleTurn = !circleTurn;
