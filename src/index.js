import './style.scss';
import { Layout } from './components/veiw/layout';

const layout = new Layout();

layout.mainLayout();
const box = document.querySelector('.goods');

const dictionary = {
  'Увлажнитель воздуха STARWIND SHC1322, 3л, белый': 1650,
  'Триммер PHILIPS HC3521/15 серебристый/черный': 2290,
  'Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95", розовый': 2390,
  'Мышь A4TECH Bloody V3, игровая, оптическая, проводная, USB, черный': 960,
  'Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95", черный': 2390,
  'Пылесос SINBO SVC 3497, 2500Вт, синий/серый': 5670,
  'Планшет DIGMA Optima 7 Z800 Android 10.0 серебристый': 9490,
  'Монитор игровой ACER Nitro RG241YPbiipx 23.8" черный': 16800,
  'Экшн-камера DIGMA DiCam 310 4K, WiFi, черный': 2290,
  'Умная колонка ЯНДЕКС c голосовым помощником Алисой, серебристый': 5670,
  'Квадрокоптер DJI Mini 2 MT2PD Fly More Combo с камерой, серый': 60990,
  'Шлем виртуальной реальности HTC Vive PRO Eye EEA, черный/синий': 11960,
  'МФУ лазерный CANON i-Sensys MF445dw, A4, лазерный, черный': 35310,
  'Смарт-часы AMAZFIT Bip U, 1.43", зеленый / зеленый': 4490,
  'Кофемашина PHILIPS EP1224/00, серый/черный': 29990,
  'Гироскутер MIZAR MZ10,5CN, 10.5", карбон': 12990,
};

const quant = Object.keys(dictionary).length;
// console.log(quant);

let countText = '';

for (let i = 0; i < quant; i++) {
  countText += `<div class="goods__item">\n
    <img src="../assets/images/${i + 1}.png"
    alt="goods" class="goods__pictures"></img>\n
    <p class="goods__description">${Object.keys(dictionary)[i]}</p>
    <p class="goods__price">${Object.values(dictionary)[i]} ₽</p>\n
    <a href="#" data-num="${i}" class="goods__button">Добавить в корзину</a>\n
    </div>`;
}

box.innerHTML = countText;

// const goods = document.querySelectorAll('.goods__item');
const buttons = document.querySelectorAll('.goods__button');
const cartQuant = document.querySelector('.cart__quantity');

let countGoods = 0;

function sumOfGoods() {
  countGoods += 1;
  cartQuant.classList.add('active');
  cartQuant.innerHTML = countGoods;
}
buttons.forEach(elm => elm.addEventListener('click', sumOfGoods));

const goodsInBsket = [];

buttons.forEach(elm =>
  elm.addEventListener('click', event => {
    //   console.log(event.target.dataset.num);
    goodsInBsket.push(event.target.dataset.num);
    elm.textContent = elm.textContent.replace(
      'Добавить в корзину',
      'В корзине',
    );
    elm.classList.toggle('active-btn');

    //   console.log(goodsInBsket);
  }),
);

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
