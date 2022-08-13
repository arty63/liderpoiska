import { localStorageUtil } from "../../components/utils/localStorageUtil";


export class CartButton {
  buttonText = 'Добавить в корзину';

  buttonPushed = 'В корзине';
  id = this.id
  count = 0;

  renderButton(id) {
    const productStore = localStorageUtil.getProducts();
    
    const goodsButton = document.createElement('a');
    goodsButton.classList.add('goods__button');
    goodsButton.textContent = this.buttonText.toUpperCase();
    this.id =id
    if(productStore.includes(this.id)){
      goodsButton.classList.add('active-btn');
    }
    goodsButton.addEventListener('click', (event) => {
      if (goodsButton.classList.contains('active-btn')) {
        goodsButton.classList.remove('active-btn');
        goodsButton.textContent = this.buttonText.toUpperCase();
        this.count = 0;
        localStorageUtil.putProducts(this.id)
        
      } else {
        goodsButton.classList.add('active-btn');
        this.count++;
        goodsButton.textContent = this.buttonPushed.toUpperCase();
        localStorageUtil.putProducts(this.id)
      }
    });
    return goodsButton;
  }
}

// let countGoods = 0;

// function sumOfGoods() {
//   countGoods += 1;
//   cartQuant.classList.add('active');
//   cartQuant.innerHTML = countGoods;
// }
// buttons.forEach(elm => elm.addEventListener('click', sumOfGoods));

// const goodsInBsket = [];

// buttons.forEach(elm =>
//   elm.addEventListener('click', event => {
//     goodsInBsket.push(event.target.dataset.num);
//     elm.textContent = elm.textContent.replace(
//       'Добавить в корзину',
//       'В корзине',
//     );
//     elm.classList.toggle('active-btn');
//   }),
// );
