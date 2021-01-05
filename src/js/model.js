const winningCombinations = [
  [0, 1, 2, 3], 
  [0, 4, 8, 12],
  [0, 5, 10, 15],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [3, 6, 9, 12],
  [4, 9, 10, 11],
  [8, 9, 10, 11],
  [12, 13, 14, 15]
];

const cells = {
  a1: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  },
  a2: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  }, 
  a3: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  },
  a4: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  },
  b1: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  },
  b2: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  }, 
  b3: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  },
  b4: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  },
  c1: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  },
  c2: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  }, 
  c3: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  },
  c4: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  },
  d1: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  },
  d2: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  }, 
  d3: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  },
  d4: {
    power: 0,
    taken: false,
    team: "",
    chomp: [],
    neighbors: []
  }
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
