const handleCellClick = (event) => {
  let identifier = event.target.innerHTML; 
  let cellValue = event.target.innerHTML;
  
  compare(identifier, piecePlayPower); // Check to make sure you can place a piece there
  claimCell(event, currentTeam, opposingTeam); // Take space
  depleteReseource(piecePlayPower, currentTeam); // Reduce player piece inventory
  checkForWin(currentTeam, opposingTeam); // Check to see if anyone won
  turnOverPossession();
  console.log(`cellValue: ${cellValue}`);
};

const handlePieceSelectionClick = (event) => {
  let selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
  console.log(`SelectedPiecePower: ${selectedPiecePower}`);
  choosePiece(selectedPiecePower);
  swapBackground(event);
}