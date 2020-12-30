const switcher = document.querySelector("[data-component='class-switcher']");
const switcherHeader = document.querySelector("[data-component='class-switcher'] [data-target='header']");
const lunaSidebar = document.querySelector("[data-component='class-switcher'] [data-kitten='LUNA']");
const lilySidebar = document.querySelector("[data-component='class-switcher'] [data-kitten='LILY']");

const modifyHeader = () => switcherHeader.classList.toggle("SWITCH");
const swellSidebar = () => lunaSidebar.classList.toggle("SWELL");
const recedeSidebar = () => lilySidebar.classList.toggle("RECEDE");

const toggleClass = (event) => {
  modifyHeader();  
  swellSidebar();  
  recedeSidebar();  
}


switcherHeader.addEventListener("click", toggleClass);