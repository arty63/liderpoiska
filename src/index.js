import { AppView } from './components/AppView';
import './style.scss';
// import { LocalStorageUtil } from './components/utils/localStorageUtil';

const view = new AppView();
view.view();

// const buttons = document.querySelectorAll('.goods__button');
// const cartQuant = document.querySelector('.cart__quantity');

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

/*= ======================BASKET====================================== */

// const basket = document.querySelector('.basket')
// const basketLink = document.querySelector('.cart__link')

// let basketText =''

// for (let i =0; i<goodsInBsket.length; i++){
//     basketText += `<div class="basket__item">\n
//     <img src="./assets/images/${goodsInBsket[i+1]}.png" alt="goods" class="goods__pictures"></img>\n
//     <p class="goods__description">${Object.keys(dictionary)[goodsInBsket[i]]}</p>
//     <div> + и -</div>

//     <p class="goods__price">${Object.values(dictionary)[i]} ₽</p>\n

//     </div>`
// }

// function addBasket(){
//     basket.innerHTML = basketText

// }

// basketLink.addEventListener('click', addBasket)
