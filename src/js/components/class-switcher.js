const switcher = document.querySelector("[data-component='class-switcher']");
const switcherHeader = document.querySelector("[data-component='class-switcher'] [data-target='switcher-header']");

const lunaSidebar = document.querySelector("[data-component='class-switcher'] [data-kitten='LUNA']");
const lilySidebar = document.querySelector("[data-component='class-switcher'] [data-kitten='LILY']");

const modifyHeader = (player) => {
  switcherHeader.classList.toggle("SWITCH");
}



const swell = (element) => {
  console.log(element);

  if (element.classList.contains("RECEDE")) {
    console.log(`1`);
    elememnt.classList.remove("RECEDE");
  }

  element.classList.add("SWELL");
}

const recede = (element) => {

  if (element.classList.contains("SWELL")) {
    element.classList.remove("SWELL");
  }
  element.classList.add("RECEDE");
}


const toggleClass = (event) => {
  modifyHeader();  
  console.log(whoseTurnIsIt);
  // swell(event.target);  
  // recede(event.target);  
}


switcherHeader.addEventListener("click", toggleClass);