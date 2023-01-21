// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//  і змінює інлайн-стиль span#text, 
// оновлюючи властивість font-size. В результаті, перетягуючи повзунок, 
// буде змінюватися розмір тексту.
const  inputFontSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');


console.log(inputFontSizeControl);
console.log(spanText);

inputFontSizeControl.addEventListener('change',onInputFontSize);


function onInputFontSize(e) {
    inputFontSizeControl.range = e.currentTarget.value;
    spanText.style.fontSize = `${e.target.value}px`
    console.log (spanText.textContent);
}
