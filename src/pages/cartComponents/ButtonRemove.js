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

    btnRemove.addEventListener('click', event => {
      
      event.target.closest('.basket__item').remove();
  })
    return btnRemove;
  }
}
export const remove = new ButtonRemove();
