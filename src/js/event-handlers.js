const handleCellClick = (event) => {
  let identifier = event.target.innerHTML; 
  let cellValue = event.target.innerHTML;
  
  comparePieceToCell(identifier, piecePlayPower); // Check to make sure you can place a piece there
  
  claimCell(event, currentTeam, opposingTeam); // Take space
  
  depleteResource(piecePlayPower, currentTeam); // Reduce player piece inventory
  
  // checkForWin(currentTeam, opposingTeam); // Check to see if anyone won
  
  turnOverPossession(); // Switch possession
};

const handlePieceSelectionClick = (event) => {
  let selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
  choosePiece(selectedPiecePower);
  swapBackground(event);
}