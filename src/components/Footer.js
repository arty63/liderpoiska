export class Footer {
  render(location) {
    const wrapper = document.querySelector(location);
    const footer = document.createElement('footer');
    wrapper.appendChild(footer);
    footer.classList.add('footer');

    const footerDescription = document.createElement('p');
    footerDescription.classList.add('footer__descrition');
    footerDescription.textContent =
      'Тестовое задание на должность младшего программиста «Лидера поиска», ver. 3.0';
    footer.appendChild(footerDescription);
    return footer;
  }
}
export const footer = new Footer();
