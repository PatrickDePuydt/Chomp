// These are usually either variable declarations or functions with single-concern return values.
// Or assigning event handelers

let piecePlayPower = NaN; // Used for comparing a selected piece with the gameboard
let initialChoice; // Used for the modal to start the game
let whoseTurnIsIt;  // Used for switching turns
let currentTeam; // Used for turn tracking
let opposingTeam; // Used for turn tracking
let genus;


const initializeGamePieceControls = () => [...gamePieces].map( piece => {
  const family = piece.getAttribute("data-family");
  const genus = piece.getAttribute("data-genus");
  piece.classList.add(`${family}-${genus}-3`); // Set initial Class state 

  piece.addEventListener('click', handlePieceSelectionClick); // Assign events listeners to all the pieces
});

const initializeGameGameboardControls = () => [...gameBoardCells].map( cell => {
  cell.addEventListener('click', handleCellClick)
}); // Add events to all the cells

const disableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", true))}; // Used to lock the board
const enableBoard = () => {gameBoardCells.forEach( cell => cell.setAttribute("disabled", false))}; // Used to unlock the board
const handleWin = () => console.log(`Win`); // Used as a placeholder for win tracking
const handleDraw = () => console.log(`draw`); // Used as a placeholder for draw tracking
const isDraw = () => [...gameBoardCells].every( cell => cell.classList.contains("LILY") || cell.classList.contains("LUNA")); // used to check if there was a combination (used in win evaluation)
const resetPiecePower = () => console.log(`Reset`); // Utility for clean piece tracking

const setLayout = (whoseTurnIsIt) => {
  let activeControls = whoseTurnIsIt ? [...rightControls] : [...leftControls];
  let notActiveControls = !whoseTurnIsIt ? [...rightControls] : [...leftControls];
  
  handleControlButtonClickability(activeControls, notActiveControls);
  setControlButtonLayout(whoseTurnIsIt);
  
};

const handleControlButtonClickability = (activeControls, notActiveControls) => {
  // console.log(`active controls:`, activeControls);
  // console.log(`notActiveControls controls:`, notActiveControls);
  
  activeControls.map(control => {
    control.classList.add("CAN_CLICK");
  });

  notActiveControls.map(control => {
    control.classList.add("CANNOT_CLICK");
  });
}

const setControlButtonLayout = (whoseTurnIsIt) => {
  let activePanel = whoseTurnIsIt ? rightControlPanel : leftControlPanel;
  let notActivePanel = !whoseTurnIsIt ? rightControlPanel : leftControlPanel;

  activePanel.classList.add("LAY_FLEX_ACTIVE");
  notActivePanel.classList.add("LAY_FLEX_NOT_ACTIVE");
}



// [data-feature="chomp"] [data-target='side-control'].LUNA {
//   border: 5px solid black;
//   flex: 3;
// }

// [data-feature="chomp"] [data-target='side-control'].LILY {
//   border: 5px solid hotpink;
//   flex: 1;
// }