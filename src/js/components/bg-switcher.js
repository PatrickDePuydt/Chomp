const swapBackground = (element) => {
  let powerValue = Number(element.target.innerHTML);
  element.target.classList.add(`x-${String(powerValue)}`);
}