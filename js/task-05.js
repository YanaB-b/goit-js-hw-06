// Напиши скрипт, який під час набору тексту в інпуті input#name-input 
// (подія input), підставляє його поточне значення в span#name-output.
//  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
};
inputEl.input.addEventListener('input', onInputListener);

function onInputListener(event) {
    inputEl.output.textContent = event.currentTarget.value || 'Anonymous';

};