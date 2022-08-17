import { remove } from './ButtonRemove';
import { controls } from './Controls';

class BasketItem {
  render(obj) {
    const item = document.createElement('div');
    item.classList.add('basket__item');

    const picture = document.createElement('img');
    picture.classList.add('goods__pictures');
    picture.alt = 'goods';
    picture.src = `${obj.source}`;

    const description = document.createElement('p');
    description.classList.add('goods__description');
    description.textContent = `${obj.name}`;

    const price = document.createElement('p');
    price.classList.add('goods__price');
    price.textContent = `${obj.price}₽`;

    item.appendChild(picture);
    item.appendChild(description);
    item.appendChild(controls.render());
    item.appendChild(price);
    item.appendChild(remove.render());

    return item;
  }
}
export const item = new BasketItem();
