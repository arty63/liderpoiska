import { localStorageUtil } from '../../components/utils/localStorageUtil';
import { item } from './BasketItem';
import { createCartElements } from './createCartElements';

export class Main {
  render() {
    const wrapper = document.getElementById('wrapper');
    const main = document.createElement('main');
    wrapper.appendChild(main);
    main.classList.add('main');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Корзина';
    main.appendChild(title);

    const basket = document.createElement('div');
    basket.classList.add('basket');
    main.appendChild(basket);

    createCartElements(localStorageUtil.getProducts()).map(el =>
      basket.append(item.render(el)),
    );
    return main;
  }
}
export const main = new Main();
