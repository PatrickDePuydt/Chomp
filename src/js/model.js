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

// console.log(lunaPieceInventory);

const depleteReseource = (piecePower, currentTeam) => {
  // Attribution
  console.log("luna ", lunaPieceInventory.x3.quantity);
  console.log("lily ", lilyPieceInventory.x3.quantity);
  let player = (String(currentTeam) == "LUNA") ? lunaPieceInventory : lilyPieceInventory;
  //console.log(player[`x${Number(piecePower)}`].quantity);
  // Invetory Depletion
  let depletedInventory = player[`x${Number(piecePower)}`].quantity - 1;
  //console.log(depletedInventory);
  player[`x${Number(piecePower)}`].quantity = depletedInventory; // Update inventory
  //console.log(player[`x${Number(piecePower)}`].quantity);
  // console.log(lunaPieceInventory);
};
