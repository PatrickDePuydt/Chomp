const gameBoardCells = document.querySelectorAll(`[data-target='cell']`);
const gamePieces = document.querySelectorAll(`[data-selector='piece']`);
const header = document.querySelector("[data-component='class-switcher'] [data-target='switcher-header']");
const headerTag = document.querySelector("[data-component='class-switcher'] [data-target='switcher-header'] h1");
const instructions = document.querySelector(`[data-target='instructions']`);
const instructionCopy = document.querySelector(`[data-target='instruction-copy']`);
const leftInstructions = document.querySelectorAll(`[data-target='piece_directions'][data-family='x']`);
const rightInstructions = document.querySelectorAll(`[data-target='piece_directions'][data-family='z']`);
const leftControls = document.querySelectorAll(`button[data-family='x']`);
const rightControls = document.querySelectorAll(`button[data-family='z']`);
const leftControlPanel = document.querySelector(`[data-component='switcher-control'][data-family='x']`);
const rightControlPanel = document.querySelector(`[data-component='switcher-control'][data-family='z']`);




