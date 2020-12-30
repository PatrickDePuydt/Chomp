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

const depleteReseource = (piecePower, currentTeam) => {
  const cleanTeam = String(currentTeam);
  const player = (cleanTeam == "LUNA") ? lunaPieceInventory : lilyPieceInventory;
  const cleanPiecePower = Number(piecePower);
  const currentInventory = Number(player.x3.quantity);
  const depletedNumber = currentInventory - 1;
  
  console.log(`Original: ${player.x3.quantity}`);
  player[`x${cleanPiecePower}`].quantity = depletedNumber; // Update inventory
  console.log(`New: ${player.x3.quantity}`);
};
