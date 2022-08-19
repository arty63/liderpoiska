import { header } from '../../components/Header';
import { main } from './Main';
import { footer } from '../../components/Footer';
import { form } from './Form';

export class CartView {
  view() {
    header.render();
    main.render();
    const body = document.querySelector('body');
    body.appendChild(form.render());
    footer.render('body');
  }
}
