const swapBackground = (piecePower, playerInventory) => {
 let element = document.querySelector(`[data-family='x${piecePower}']`);
 element.classList.add(`x-${piecePower}-${playerInventory}`);
}

const setCellBackground = (element, family, piecePlayPower, currentTeam) => {
  let previousFamily = (!circleTurn) ? "x" : "z";
  let identifier = element.innerText;
  let canChomp = (cells[identifier].chomp[0] < piecePlayPower);
  
  if (canChomp) {
    element.classList.remove(`${previousFamily}${cells[identifier].chomp.piece}`);
  }
  element.classList.add(`${family}${piecePlayPower}`);
  element.classList.add(`${currentTeam}`); // Super important for win tracking
}

const swapPieceBackground = (playerInventory, piecePlayPower) => {
  let dynamicFamily = `[data-family="${family}"]`;
  let dynamicGenus = `[data-genus="${genus}"]`;
  let targetPiece = document.querySelector(`${dynamicFamily}${dynamicGenus}`);

  targetPiece.classList.remove(`${family}-${genus}-${playerInventory[`x${piecePlayPower}`].quantity + 1}`); // remove the previous class
  targetPiece.classList.add(`${family}-${genus}-${playerInventory[`x${piecePlayPower}`].quantity}`); // Add the new background class
};