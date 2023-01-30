function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
   
}

const buttonEl =  document.querySelector('.change-color');
const buttonColor = document.querySelector('.color');
const body = document.querySelector('body');

const textSpan = () => {
  let color =  getRandomHexColor();
  body.style.backgroundColor = color;
  buttonColor.textContent =color;
};

buttonEl.addEventListener('click',textSpan);



  