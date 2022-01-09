const btn = document.querySelector(".btn");

const changeBg = function () {
  const color = randomColor();
  document.body.style.backgroundColor = color;
};

btn.addEventListener("click", changeBg);

const randomColor = function () {
  const color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  return color;
};

const randomNumber = function () {
  return Math.floor(Math.random() * 256);
};
