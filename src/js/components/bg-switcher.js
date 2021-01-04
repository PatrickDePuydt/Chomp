const swapBackground = (piecePower, playerInventory) => {
 let element = document.querySelector(`[data-family='x${piecePower}']`);
 element.classList.add(`x-${piecePower}-${playerInventory}`);
}

const setCellBackground = (element, family, piecePlayPower) => {
 element.classList.add(`${family}${piecePlayPower}`);
}

const swapPieceBackground = (inventoryIndex, piecePlayPower, currentTeam) => {
  let inventory = inventoryIndex;
  let player = (circleTurn == "LUNA") ? lunaPieceInventory : lilyPieceInventory;
  let currentPlayerInventory = player[`x${piecePlayPower}`].quantity;
  
  let dynamicFamily = `[data-family="${family}"]`;
  let dynamicGenus = `[data-genus="${genus}"]`;
  let targetPiece = document.querySelector(`${dynamicFamily}${dynamicGenus}`);


  console.log(`17 circleTurn: `, circleTurn);
  console.log(`18 inventory index: `, inventory);
  console.log(`19 piecePlayPower: `, piecePlayPower);
  console.log(`21 currentPlayerInventory: + 1`, currentPlayerInventory + 1);
  console.log(`22: family`, family);
  console.log(`21: genus`, genus);
  console.log(`23: targetPiece`, targetPiece);

  targetPiece.classList.remove(`${family}-${genus}-${currentPlayerInventory + 1}`); // remove the previous class
  targetPiece.classList.add(`${family}-${genus}-${currentPlayerInventory}`); // Add the new background class

};