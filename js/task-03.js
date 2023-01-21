const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки 
// і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

// const imagesRef = document.querySelector('.galery')
// const imagesEl = document.querySelector('ul');
// // const galary = document.createElement('li');
// for (const image of images){
//   const liElem = document.createElement('li');
//   liElem.textContent = image;
//   imagesEl.appendChild(liElem);
// }
// // imagesRef.appendChild(imagesEl);
// insertAdjacentHTML()
const imagesRef = document.querySelector('.gallery');
console.log(imagesRef);
const imageEl = images.map(image => {
  return `<li class="gallery__item">
  <img class="gallery__img" 
  src="${image.url}" alt="${image.alt}"/>`
  
}).join("");
console.log(imageEl);
imagesRef.insertAdjacentHTML("beforeend", imageEl);
