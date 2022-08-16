import { Card } from '../shared/components/Card';
import { PRODUCTS } from '../shared/cards/cards';
import { header } from './Header';
import { main } from './Main';
import { footer } from './Footer';

export class AppView {
  view() {
    const card = new Card();
    header.render();
    main.render();
    footer.render();
    const box = document.querySelector('.goods');
    PRODUCTS.map(el => box.appendChild(card.renderCard(el)));
  }
}
