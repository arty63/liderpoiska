import { header } from '../../components/Header';
import { main } from './Main';
import { footer } from '../../components/Footer';

export class CartView {
  view() {
    header.render();
    main.render();
    footer.render();
    //  const box = document.querySelector('.basket');
    // PRODUCTS.map(el => box.appendChild(card.renderCard(el)));
  }
}
