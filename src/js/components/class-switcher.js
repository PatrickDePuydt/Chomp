const switcher = document.querySelector("[data-component='class-switcher']");
const switcherHeader = document.querySelector("[data-component='class-switcher'] [data-target='switcher-header']");

const lunaSidebar = document.querySelector("[data-component='class-switcher'] [data-kitten='LUNA']");
const lilySidebar = document.querySelector("[data-component='class-switcher'] [data-kitten='LILY']");

const modifyHeader = (currentPlayer) => {
  console.log(currentPlayer);

  if (currentPlayer == "LUNA") {
    switcherHeader.classList.remove("LILY"); // Clean out any debris
    switcherHeader.classList.add("LUNA"); // Add active class
  }

  if (currentPlayer == "LILY") {
    switcherHeader.classList.remove("LUNA"); // Clean out any debris
    switcherHeader.classList.add("LILY"); // Add active class
  }

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