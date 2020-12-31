const modal = document.querySelector("[data-component='modal']");

const buttonQuery = document.querySelectorAll("[data-target='modal_button']");

const handleClick = (event) => {
  console.log(event);
};


const assignModalEventHandlers = () => [...buttonQuery].map( button => {
  console.log(button);
  button.addEventListener('click', handleClick)
});


