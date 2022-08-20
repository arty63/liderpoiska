import { darkBg } from "./DarkBackground";

class Popup {
  orderNumber = 165796;

  render(name, phone, email) {
    
    const body = document.querySelector('body')

    const popup = document.createElement('div');
    popup.classList.add('popup');

    const close = document.createElement('div');
    close.classList.add('popup__close')

    const popupTitle = document.createElement('p');
    popupTitle.classList.add('popup__title')

    const userName = document.createElement('span');
    // userName.textContent = name;
    // const order = document.createElement('span');
    // order.textContent = this.orderNumber;
    popupTitle.textContent = `Спасибо ${name}, ваш заказ №${this.orderNumber} оформлен.`;
    this.orderNumber++;
    const popupDescription = document.createElement('p');
    popupDescription.classList.add('popup__description')
    popupDescription.textContent = `В ближайшее время мы свяжемся с вами по телефону ${phone} для его подтверждения.` 
    popup.appendChild(close);
    popup.appendChild(popupTitle);
    popup.appendChild(popupDescription);
    body.appendChild(popup)
    darkBg.render()
    
    return popup;
  }
}
export const popup = new Popup();
