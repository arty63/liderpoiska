import { localStorageUtil } from '../../components/utils/localStorageUtil';
import { goodsButton } from '../../shared/components/Button';
import { total } from './Total';

class ButtonRemove {
  render() {
    const btnRemove = document.createElement('div');
    btnRemove.classList.add('control-buttons__remove');

    const btnRemoveX = document.createElement('div');
    btnRemoveX.classList.add('btn-remove');

    const btnText = document.createElement('span');
    btnText.textContent = 'Удалить';

    btnRemove.appendChild(btnRemoveX);
    btnRemove.appendChild(btnText);

    btnRemove.addEventListener('click', this.remove);
    return btnRemove;
  }

  remove(event) {
    localStorageUtil.putProducts(
      event.target.closest('.basket__item').dataset.id - 0,
    );
    event.target.closest('.basket__item').remove();
    goodsButton.removeGoods();
    total.refresh();
    if (localStorageUtil.getProducts().length === 0) {
      window.location.href = './index.html';
    }
  }
}
export const remove = new ButtonRemove();
