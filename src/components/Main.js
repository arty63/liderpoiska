export class Main {
  render() {
    const wrapper = document.getElementById('wrapper');
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
    return main;
  }
}
export const main = new Main();
