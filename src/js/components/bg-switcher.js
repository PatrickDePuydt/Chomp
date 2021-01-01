const swapBackground = (piecePower, playerInventory) => {
 let element = document.querySelector(`[data-family='x${piecePower}']`);
//  console.log(element);
  // element.target.innerText
  console.log(`x-${piecePower}-${playerInventory}`);
  element.classList.add(`x-${piecePower}-${playerInventory}`);
}