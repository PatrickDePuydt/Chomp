const switcher = document.querySelector("[data-component='switcher']");
const switcherHeader = document.querySelector("[data-component='switcher'] [data-target='header']");

const toggleClass = (event) => {
  console.log(event);
  switcherHeader.classList.toggle("LUNA");
  
}

switcherHeader.addEventListener("click", toggleClass);