import { CartButton } from './Button';

export class Card {
  createElement(name, price, source, id) {
    this.name = name;
    this.price = price;
    this.source = source;
    this.id = id;
  }

  renderCard(obj) {
    const goodsItem = document.createElement('div');
    goodsItem.classList.add('goods__item');
    goodsItem.id = `${obj.id}`;

    const goodsImg = document.createElement('img');
    goodsImg.classList.add('goods__pictures');
    goodsImg.alt = 'goods';
    goodsImg.src = `${obj.source}`;

    const goodsDescription = document.createElement('p');
    goodsDescription.classList.add('goods__description');
    goodsDescription.textContent = `${obj.name}`;

    const goodsPrice = document.createElement('p');
    goodsPrice.classList.add('goods__price');
    goodsPrice.textContent = `${obj.price} ₽`;

    const goodsButton = new CartButton();

    goodsItem.appendChild(goodsImg);
    goodsItem.appendChild(goodsDescription);
    goodsItem.appendChild(goodsPrice);
    goodsItem.appendChild(goodsButton.renderButton(obj.id));

    return goodsItem;
  }
}
