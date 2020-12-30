const switcher = document.querySelector("[data-component='switcher']");
const switcherHeader = document.querySelector("[data-component='switcher'] [data-target='header']");
const lunaSidebar = document.querySelector("[data-component='switcher'] [data-kitten='LUNA']");
const lilySidebar = document.querySelector("[data-component='switcher'] [data-kitten='LILY']");

const modifyHeader = () => switcherHeader.classList.toggle("SWITCH");
const swellSidebar = () => lunaSidebar.classList.toggle("SWITCH");
const recedeSidebar = () => lilySidebar.classList.toggle("SWITCH");

const toggleClass = (event) => {
  modifyHeader();  
  swellSidebar();  
  recedeSidebar();  
}


switcherHeader.addEventListener("click", toggleClass);