const modal = document.querySelector("[data-component='modal']");

const buttonQuery = document.querySelectorAll("[data-target='modal_button']");

const handleClick = (event) => {
  const choice = event.target.innerHTML;
  initialChoice = String(choice);
  startGame(initialChoice);
};


const assignModalEventHandlers = () => [...buttonQuery].map( button => {
  button.addEventListener('click', handleClick)
});


const dismissModal = () => {
  modal.classList.add("FADE");
  setTimeout(() => {
    modal.classList.add("HIDE");
  }, 200); // Timeout to make it seem smoother
};