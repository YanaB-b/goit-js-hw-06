// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)}`
   
// }

const buttonEl = {
  colorBtn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  colorName: document.querySelector('color'),

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`
}
buttonEl.colorBtn.addEventListener('click', ()=>{
  buttonEl.body.style.backgroundColor = getRandomHexColor();
  buttonEl.colorName.textContent = buttoEl.body.style.backgroundColor;
})