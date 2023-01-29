// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//  і змінює інлайн-стиль span#text, 
// оновлюючи властивість font-size. В результаті, перетягуючи повзунок, 
// буде змінюватися розмір тексту.
const  inputFontSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');


console.log(inputFontSizeControl);
console.log(spanText);

inputFontSizeControl.oninput = function()
 {
    console.log (this.value)
    inputFontSizeControl.range = e.currentTarget.value;
    spanText.style.fontSize = nputFontSizeControl.value + 'px';
    
   
}
