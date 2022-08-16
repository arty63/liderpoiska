class ButtonRemove {
  render() {
    const btnRemove = document.createElement('button');
    btnRemove.classList.add('control-buttons__remove');

    const btnRemoveX = document.createElement('div');
    btnRemoveX.classList.add('btn-remove');

    const btnText = document.createElement('span');
    btnText.textContent = 'Удалить';

    btnRemove.appendChild(btnRemoveX);
    btnRemove.appendChild(btnText);

    return btnRemove;
  }
}
export const remove = new ButtonRemove();
