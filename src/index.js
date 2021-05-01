import './style.css';

console.log('funguju!');

const navBtnElm = document.querySelector('.nav-closed');
const navElm = document.querySelector('nav');

navBtnElm.addEventListener('click', () => {
  navBtnElm.classList.toggle('nav-closed');
});
