const handleCellClick = (event) => {
  const identifier = event.target.innerHTML;
  const currentTurn = circleTurn ? "LUNA" : "LILY";
  
  comparePieceToCell(identifier, piecePlayPower); // Check to make sure you can place a piece there
  claimCell(event, currentTeam, opposingTeam); // Take space
  depleteResource(piecePlayPower, currentTeam); 
  setCellBackground(event.target, family, piecePlayPower);
  
  console.log(`2: `, currentTurn);
  swapTurns();
  setLayout(circleTurn);
  console.log(`3: `, currentTurn);
};

const handlePieceSelectionClick = (event) => {
  let currentTurn = circleTurn;
  
  let selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
  choosePiece(selectedPiecePower);
  event.target.classList.toggle("CLICK"); // Add an animation helper
  // Set Family Genus
  genus = event.target.getAttribute("data-genus");
  family = event.target.getAttribute("data-family");
}


function swapTurns() {
  circleTurn = !circleTurn;
  console.log(`0: `, circleTurn);
}

