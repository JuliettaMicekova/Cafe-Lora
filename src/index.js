import './style.css';
import { Drink } from './Drink/index';

document.querySelector('#nav-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const menuItemElm = document.querySelectorAll('nav-link');

for (let i = 0; i < menuItemElm.length; i += 1) {
  menuItemElm[i].addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('nav-closed');
  });
}

// const orderBtnElm = document.querySelector('.order-btn');
// const drinCupElm = document.querySelector('.drink__cup');

// let ordered = false;
// orderBtnElm.addEventListener('click', () => {
//   if (ordered === false) {
//     orderBtnElm.textContent = 'Zrušit';
//     drinCupElm.classList.add('drink_cup--selected');
//     ordered = true;
//   } else if (ordered === true) {
//     orderBtnElm.textContent = 'Objednat';
//     drinCupElm.classList.remove('drink_cup--selected');
//     ordered = false;
//   }
// });

// const layerElm = document.querySelector('.drink__info');

// layerElm.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
// layerElm.innerHTML += Layer({ color: '#fed7b0', label: 'teplé mléko' });
// layerElm.innerHTML += Layer({ color: '#613916', label: 'espresso' });

// const layers = [
//   {
//     color: '#feeeca',
//     label: 'mléčná pěna',
//   },
//   {
//     color: '#fed7b0',
//     label: 'teplé mléko',
//   },
//   {
//     color: '#613916',
//     label: 'espresso',
//   },
// ];

// for (let i = 0; i < layers.length; i += 1) {
//   layerElm.innerHTML += Layer(layers[i]);
// }

// const drink = {
//   id: 'romano',
//   name: 'Romano',
//   ordered: false,
//   layers: [
//     {
//       color: '#fbdf5b',
//       label: 'citrón',
//     },
//     {
//       color: '#613916',
//       label: 'espresso',
//     },
//   ],
// };

// const drinks = [
//   {
//     id: 'cappuccino',
//     name: 'Cappuccino',
//     ordered: false,
//     layers: [
//       {
//         color: '#feeeca',
//         label: 'mléčná pěna',
//       },
//       {
//         color: '#fed7b0',
//         label: 'teplé mléko',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
//   {
//     id: 'romano',
//     name: 'Romano',
//     ordered: false,
//     layers: [
//       {
//         color: '#fbdf5b',
//         label: 'citrón',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
// ];
const drinkListElm = document.querySelector('.drinks-list');

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i += 1) {
      drinkListElm.appendChild(Drink(json[i]));
    }
  });
