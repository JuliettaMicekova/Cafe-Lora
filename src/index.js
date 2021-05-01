import './style.css';
import { Layer } from './Layer/index';
import './Layer/style.css';

document.querySelector('#nav-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const menuItemElm = document.querySelectorAll('nav-link');

for (let i = 0; i < menuItemElm.length; i += 1) {
  menuItemElm[i].addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('nav-closed');
  });
}

const orderBtnElm = document.querySelector('.order-btn');
const drinCupElm = document.querySelector('.drink__cup');

let ordered = false;
orderBtnElm.addEventListener('click', () => {
  if (ordered === false) {
    orderBtnElm.textContent = 'Zrušit';
    drinCupElm.classList.add('drink_cup--selected');
    ordered = true;
  } else if (ordered === true) {
    orderBtnElm.textContent = 'Objednat';
    drinCupElm.classList.remove('drink_cup--selected');
    ordered = false;
  }
});

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const layerElm = document.querySelector('.drink__info');

layerElm.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
layerElm.innerHTML += Layer({ color: '#fed7b0', label: 'teplé mléko' });
layerElm.innerHTML += Layer({ color: '#613916', label: 'espresso' });
