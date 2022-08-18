import { localStorageUtil } from '../../components/utils/localStorageUtil';

export class Cart {
  goods = localStorageUtil.getProducts();

  cartCount = this.goods.length;

  render() {
    const cart = document.createElement('div');
    cart.classList.add('cart');

    const cartLink = document.createElement('a');
    cartLink.classList.add('cart__link');
    cartLink.textContent = 'Корзина';
    cart.appendChild(cartLink);

    const cartQuantity = document.createElement('span');
    cartQuantity.classList.add('cart__quantity');
    cartQuantity.textContent = this.cartCount;
    cart.appendChild(cartQuantity);

    if (this.cartCount > 0) {
      cartQuantity.classList.add('active');
      cartLink.href = './cart.html';
    } else {
      cartQuantity.classList.remove('active');
      cartLink.removeAttribute('href');
    }
    return cart;
  }
}
