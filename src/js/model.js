const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

const cells = {
  a1: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbs: []
  },
  a2: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbs: []
  }, 
}


const lunaPieceInventory = {
  x3: {
    quantity: 3,
  },
  x2: {
    quantity: 3,
  },
  x1: {
    quantity: 3,
  },
}

const lilyPieceInventory = {
  x3: {
    quantity: 3,
  },
  x2: {
    quantity: 3,
  },
  x1: {
    quantity: 3,
  },
}

const depleteReseource = (modelAddress) => {
  const cleanQuantity = Number(modelAddress)
  const currentInventory = Number(lilyPieceInventory.x3.quantity);
  const depletedNumber = currentInventory - 1;
  
  console.log(`Original inventory: ${lilyPieceInventory.x3.quantity}`);
  
  lilyPieceInventory[`x${cleanQuantity}`].quantity = depletedNumber; // Update inventory

  console.log(`Updated inventory: ${lilyPieceInventory.x3.quantity}`);
};
