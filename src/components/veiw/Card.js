export class Card {
  createElement(name, price, source) {
    this.name = name;
    this.price = price;
    this.source = source;
  }

  renderCard(obj) {
    const goodsItem = document.createElement('div');
    goodsItem.classList.add('goods__item');

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

    const goodsButton = document.createElement('a');
    goodsButton.classList.add('goods__button');
    goodsButton.textContent = `Добавить в корзину`;

    goodsItem.appendChild(goodsImg);
    goodsItem.appendChild(goodsDescription);
    goodsItem.appendChild(goodsPrice);
    goodsItem.appendChild(goodsButton);

    return goodsItem;
  }
}
