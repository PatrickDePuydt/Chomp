const handleCellClick = (event) => {
  let identifier = event.target.innerHTML; 
  
  comparePieceToCell(identifier, piecePlayPower); // Check to make sure you can place a piece there
  claimCell(event, currentTeam, opposingTeam); // Take space
  depleteResource(piecePlayPower, currentTeam); // Reduce player piece inventory
  // checkForWin(currentTeam, opposingTeam); // Check to see if anyone won
  
  console.log('Initial team: ', setInitialTeams(whoseTurnIsIt));
  
  ; // Switch possession
  
  setCellBackground(event.target, family, piecePlayPower);
  
  turnOverPossession();
  
  console.log('Next Team: ', setInitialTeams(whoseTurnIsIt));

  // setLayout(whoseTurnIsIt);
  // console.log('After: ', setInitialTeams(whoseTurnIsIt));

};

const handlePieceSelectionClick = (event) => {
  console.log(setInitialTeams(whoseTurnIsIt));

  let selectedPiecePower = Number(event.target.innerHTML); // Make sure it's a number
  choosePiece(selectedPiecePower);
  event.target.classList.toggle("CLICK"); // Add an animation helper
  // Set Family Genus
  genus = event.target.getAttribute("data-genus");
  family = event.target.getAttribute("data-family");
}

