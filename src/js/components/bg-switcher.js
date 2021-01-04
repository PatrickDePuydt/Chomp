const swapBackground = (piecePower, playerInventory) => {
 let element = document.querySelector(`[data-family='x${piecePower}']`);
 element.classList.add(`x-${piecePower}-${playerInventory}`);
}

const setCellBackground = (element, family, piecePlayPower) => {
 element.classList.add(`${family}${piecePlayPower}`);
}

const swapPieceBackground = (inventoryIndex) => {
  console.log(`inventory index: `, inventoryIndex);
};