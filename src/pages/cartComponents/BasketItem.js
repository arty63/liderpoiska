/* eslint-disable import/no-cycle */
import { remove } from './ButtonRemove';
import { controls } from './Controls';

class BasketItem {
  quantity = 1;

  render(obj) {
    const item = document.createElement('div');
    item.classList.add('basket__item');
    item.dataset.id = `${obj.id}`;

    const picture = document.createElement('img');
    picture.classList.add('goods__pictures');
    picture.alt = 'goods';
    picture.src = `${obj.source}`;

    const description = document.createElement('p');
    description.classList.add('goods__description');
    description.textContent = `${obj.name}`;

    const price = document.createElement('p');
    price.classList.add('goods__price');
    price.textContent = `${obj.price * this.quantity} ₽`;

    item.appendChild(picture);
    item.appendChild(description);
    item.appendChild(controls.render(this.quantity));
    item.appendChild(price);
    item.appendChild(remove.render());

    return item;
  }

  setAddQuantity() {
    this.quantity++;
    console.log(this);
    return this.quantity;
  }
}
export const item = new BasketItem();
