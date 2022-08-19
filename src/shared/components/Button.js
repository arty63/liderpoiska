import { localStorageUtil } from '../../components/utils/localStorageUtil';

export class CartButton {
  buttonText = 'Добавить в корзину';

  buttonPushed = 'В корзине';

  renderButton(id) {
    const productStore = localStorageUtil.getProducts();

    const goodsButton = document.createElement('a');
    goodsButton.classList.add('goods__button');
    goodsButton.textContent = this.buttonText.toUpperCase();
    if (productStore.includes(id)) {
      goodsButton.classList.add('active-btn');
    }
    goodsButton.addEventListener('click', () => {
      if (goodsButton.classList.contains('active-btn')) {
        goodsButton.classList.remove('active-btn');
        goodsButton.textContent = this.buttonText.toUpperCase();
        localStorageUtil.putProducts(id);
        this.removeGoods();
      } else {
        goodsButton.classList.add('active-btn');
        goodsButton.textContent = this.buttonPushed.toUpperCase();
        localStorageUtil.putProducts(id);
        this.addGoods();
      }
    });
    return goodsButton;
  }

  addGoods() {
    const cartElem = document.querySelector('.cart__quantity');
    const cartLink = document.querySelector('.cart__link');
    let cartText = cartElem.textContent - 0;
    cartText++;
    cartElem.textContent = cartText;
    if (cartText > 0) {
      cartElem.classList.add('active');
      cartLink.href = './cart.html';
    } else {
      cartElem.classList.remove('active');
      cartLink.removeAttribute('href');
    }
  }

  removeGoods() {
    const cartElem = document.querySelector('.cart__quantity');
    const cartLink = document.querySelector('.cart__link');
    let cartText = cartElem.textContent - 0;
    cartText--;
    cartElem.textContent = cartText;
    if (cartText > 0) {
      cartElem.classList.add('active');
      cartLink.href = './cart.html';
    } else {
      cartElem.classList.remove('active');
      cartLink.removeAttribute('href');
    }
  }
}
export const goodsButton = new CartButton();
