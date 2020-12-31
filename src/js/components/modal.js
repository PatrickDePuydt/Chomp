const modal = document.querySelector("[data-component='modal']"); // Modal body
const buttonQuery = document.querySelectorAll("[data-target='modal_button']"); // Modal Buttons
const assignModalEventHandlers = () => [...buttonQuery].map( button => button.addEventListener('click', handleClick));
// Don't forget to invoke this in ready.js

const handleClick = (event) => {
  initialChoice = String(event.target.innerHTML); // External Function call -> Set in initializers
  startGame(initialChoice); // External Function call -> Set in initializers
};

const dismissModal = () => {
  modal.classList.add("FADE");
  setTimeout(() => {
    modal.classList.add("HIDE");
  }, 200); // Timeout to make it seem smoother
};