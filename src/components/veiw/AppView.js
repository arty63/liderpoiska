import { Card } from './Card';
import { Layout } from './Layout';
import { PRODUCTS } from '../cards/cards';

export class AppView {
  view() {
    const card = new Card();
    const layout = new Layout();
    layout.mainLayout();
    const box = document.querySelector('.goods');
    PRODUCTS.map(el => box.appendChild(card.renderCard(el)));
  }
}
