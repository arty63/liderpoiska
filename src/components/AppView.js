import { Card } from '../shared/components/Card';
import { PRODUCTS } from '../shared/cards/cards';
import {Layout} from './Layout'

export class AppView {
  view() {
    const card = new Card();
    const layout = new Layout();
    layout.mainLayout();
    const box = document.querySelector('.goods');
    PRODUCTS.map(el => box.appendChild(card.renderCard(el)));
  }
}
