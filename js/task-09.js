function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
   
}

const buttonEl =  document.querySelector('.change-color');
const buttonColor = document.querySelector('.color');
const buttonRef = document.querySelector('body');

buttonEl.addEventListener('click', () =>{
  const spanColor = getRandomHexColor();
  body.style.backgroundColor = spanColor;
  buttonColor.textContent = spanColor;

});

  