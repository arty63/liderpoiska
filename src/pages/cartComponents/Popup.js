class Popup {
  orderNumber = 1;

  render(name, phone, email) {
    const popup = document.createElement('div');
    popup.id = popup;

    const close = document.createElement('div');

    const popupTitle = document.createElement('div');
    const userName = document.createElement('span');
    userName.textContent = name;
    const order = document.createElement('span');
    order.textContent = this.orderNumber;
    popupTitle.textContent = `Спасибо ${userName}, ваш заказ №${order} оформлен.`;
    this.orderNumber++;
    const popupDescription = document.createElement('div');

    popup.appendChild(close);
    popup.appendChild(popupTitle);
    popup.appendChild(popupDescription);

    return alert(popup);
  }
}
export const popup = new Popup();
