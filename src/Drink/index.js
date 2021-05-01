import { Layer } from '../Layer/index.js';
import './style.css';

export const Drink = ({ id, name, layers }) => {
  let html = '';
  for (let i = 0; i < layers.length; i += 1) {
    html += Layer(layers[i]);
  }
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img src="/assets/cups/${id}.png" />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
      ${html}
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>
  `;
  const orderBtnElm = drinkElm.querySelector('.order-btn');
  const drinCupElm = drinkElm.querySelector('.drink__cup');

  orderBtnElm.addEventListener('click', () => {
    if (!ordered) {
      orderBtnElm.textContent = 'Zrušit';
      drinCupElm.classList.add('drink_cup--selected');
      ordered = true;
    } else {
      orderBtnElm.textContent = 'Objednat';
      drinCupElm.classList.remove('drink_cup--selected');
      ordered = false;
    }
  });

  return drinkElm;
};
