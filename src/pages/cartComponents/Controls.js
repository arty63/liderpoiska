// eslint-disable-next-line import/no-cycle
import { item } from './BasketItem';

class Controls {
  render(quantity) {
    const controls = document.createElement('div');
    controls.classList.add('control-buttons');

    const btnMin = document.createElement('p');
    btnMin.classList.add('control-buttons__minus');

    const sum = document.createElement('span');
    sum.classList.add('control-buttons__sum');
    sum.textContent = `${quantity}`;

    const btnPlus = document.createElement('p');
    btnPlus.classList.add('control-buttons__plus');

    controls.appendChild(btnMin);
    controls.appendChild(sum);
    controls.appendChild(btnPlus);

    btnPlus.addEventListener('click', () => {
      item.setAddQuantity();
    });
    return controls;
  }
}
export const controls = new Controls();
