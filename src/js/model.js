const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];


const a1 = {
  power: 505,
  taken: false,
  team: null,
  chomp: null,
  neighbors: [],
  diagonals: []
}

const a2 = {
  power: {
    name: "power",
    value: 1
  }
}

const aTwo = document.getElementById("a2");
aTwo.setAttribute(a2.power.name, a2.power.value)
console.log(aTwo);