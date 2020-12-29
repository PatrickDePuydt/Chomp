const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];


const a1 = {
  power: {
    name: "power",
    value: 1
  },
  taken: {
    name: "taken",
    value: false
  },
  team: {
    name: "team",
    value: null
  },
  chomp: {
    name: "chomp",
    value: null
  },
  neighbors: {
    name: "neighbors",
    value: []
  },
  diagonals: {
    name: "diagonals",
    value: []
  }
}