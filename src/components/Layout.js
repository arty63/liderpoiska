import { Cart } from '../shared/components/Cart';

const wrapper = document.getElementById('wrapper');
export class Layout {
  mainLayout() {
    this.header();
    this.main();
    this.footer();
  }

  header() {
    const header = document.createElement('header');
    wrapper.appendChild(header);
    header.classList.add('header');
    const logo = document.createElement('a');
    logo.href = './index.html';
    logo.classList.add('logo');
    header.appendChild(logo);
    const cart = new Cart();
    header.appendChild(cart.render());
  }

  main() {
    const main = document.createElement('main');
    wrapper.appendChild(main);
    main.classList.add('main');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Каталог товаров';
    main.appendChild(title);

    const goods = document.createElement('div');
    goods.classList.add('goods');
    main.appendChild(goods);
  }

  footer() {
    const footer = document.createElement('footer');
    wrapper.appendChild(footer);
    footer.classList.add('footer');

    const footerDescription = document.createElement('p');
    footerDescription.classList.add('footer__descrition');
    footerDescription.textContent =
      'Тестовое задание на должность младшего программиста «Лидера поиска», ver. 3.0';
    footer.appendChild(footerDescription);
  }
}
