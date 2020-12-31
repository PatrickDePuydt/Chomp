const switcherHeader = document.querySelector("[data-component='class-switcher'] [data-target='switcher-header']");

const switchClass = (player, element) => {
  if (player == "LUNA") {
    element.classList.remove("LILY"); // Clean out any debris
    element.classList.add("LUNA"); // Add active class
  }

  if (player == "LILY") {
    element.classList.remove("LUNA"); // Clean out any debris
    element.classList.add("LILY"); // Add active class
  }
}
