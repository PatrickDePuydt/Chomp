const initializeAnimation = (element, animationState) => {
  element.classList.add("animate__animated");
  element.classList.add(animationState);
};

const animationEngine = (element, animation) => {
  let sturdyAnimation = animation ? animation : "bounce";
  const possibleIntervals = [0, 1, 2, 3, 4];
  const randomNumber = Math.floor(Math.random() * possibleIntervals.length)

  setTimeout(() => {
    element.classList.add(`animate__${sturdyAnimation}`);
  }, Number(`${randomNumber}00`));
};