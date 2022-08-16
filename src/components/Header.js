import { Cart } from '../shared/components/Cart';

export class Header {
  render() {
    const wrapper = document.getElementById('wrapper');
    const header = document.createElement('header');
    wrapper.appendChild(header);
    header.classList.add('header');
    const logo = document.createElement('a');
    logo.href = './index.html';
    logo.classList.add('logo');
    header.appendChild(logo);
    const cart = new Cart();
    header.appendChild(cart.render());
    return header;
  }
}
export const header = new Header();
