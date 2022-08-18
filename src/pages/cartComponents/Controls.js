import { goodsButton } from '../../shared/components/Button';
import { remove } from './ButtonRemove';
import { total } from './Total';

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
      goodsButton.addGoods();
      sum.textContent++;
      total.refresh();
    });
    btnMin.addEventListener('click', event => {
      goodsButton.removeGoods();
      sum.textContent--;
      if (sum.textContent - 0 === 0) {
        remove.remove(event);
        goodsButton.addGoods();
      }
      if (document.querySelector('.cart__quantity').textContent - 0 < 1) {
        window.location.href = './index.html';
      }
      total.refresh();
    });
    return controls;
  }
}
export const controls = new Controls();
