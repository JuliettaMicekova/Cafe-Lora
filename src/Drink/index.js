import { Layer } from '../Layer';
import '.';

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
  return drinkElm;
};
