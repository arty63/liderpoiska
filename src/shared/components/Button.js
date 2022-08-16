import { localStorageUtil } from '../../components/utils/localStorageUtil';

export class CartButton {
  buttonText = 'Добавить в корзину';

  buttonPushed = 'В корзине';

  id = this.id;

  count = 0;

  state = false;

  cartText = document.querySelector('.cart__quantity').textContent - 0;

  cart = this.count;

  renderButton(id) {
    const productStore = localStorageUtil.getProducts();

    const goodsButton = document.createElement('a');
    goodsButton.classList.add('goods__button');
    goodsButton.textContent = this.buttonText.toUpperCase();
    this.id = id;
    if (productStore.includes(this.id)) {
      goodsButton.classList.add('active-btn');
    }
    goodsButton.addEventListener('click', () => {
      if (goodsButton.classList.contains('active-btn')) {
        goodsButton.classList.remove('active-btn');
        goodsButton.textContent = this.buttonText.toUpperCase();
        this.state = false;
        localStorageUtil.putProducts(this.id);
      } else {
        goodsButton.classList.add('active-btn');
        this.count = true;
        goodsButton.textContent = this.buttonPushed.toUpperCase();
        localStorageUtil.putProducts(this.id);
      }
    });
    return goodsButton;
  }

  addGood() {
    this.count++;
  }

  removeGood() {
    this.count--;
  }
}
