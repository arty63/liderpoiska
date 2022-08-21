import { buttonSubmit } from './buttonSubmit';
import { popup } from './Popup';
import { sendEmail } from './sendEmail';

class Form {
  // name = inputName.value
  // phoneNumber = inputPhone.value
  // email = inputEmail.value

  render() {
    const boxForm = document.createElement('div');
    boxForm.classList.add('person-form');

    const title = document.createElement('h2');
    title.classList.add('person-form__title');
    title.textContent = 'Пожалуйста, представьтесь';

    const form = document.createElement('form');
    form.classList.add('person-form__form');

    const inputName = document.createElement('input');
    inputName.id = 'name';
    inputName.type = 'text';
    inputName.placeholder = 'Ваше имя';
    inputName.classList.add('person-form__place');
    inputName.autocomplete = 'off';
    inputName.required = true;

    const inputPhone = document.createElement('input');
    inputPhone.id = 'phone';
    inputPhone.type = 'tel';
    inputPhone.placeholder = 'Телефон';
    inputPhone.classList.add('person-form__place');
    inputPhone.autocomplete = 'off';
    inputPhone.required = true;
    inputPhone.maxLength = 22;
    inputPhone.minLength = 22;

    inputPhone.pattern = /((?:\+7|8)\ \(\d{3}\)\ \d{3}\ \-\ \d{2}\ \-\ \d{2})/g;

    const inputEmail = document.createElement('input');
    inputEmail.id = 'email';
    inputEmail.type = 'email';
    inputEmail.placeholder = 'Email';
    inputEmail.classList.add('person-form__place');
    inputEmail.autocomplete = 'off';
    inputEmail.required = true;
    const ePattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const btnSubmit = document.createElement('button');
    btnSubmit.type = 'submite';
    btnSubmit.classList.add('person-form__button');
    btnSubmit.textContent = 'оформить заказ';
    btnSubmit.disabled = true;

    btnSubmit.addEventListener('click', event => {
      event.preventDefault();
      sendEmail();
      popup.render(inputName.value, inputPhone.value, inputEmail.value);
    });

    inputPhone.addEventListener('focus', () => {
      if (!/^\+\d*$/.test(inputPhone.value)) inputPhone.value = '+7';
    });

    inputPhone.addEventListener('keypress', event => {
      if (!/\d/.test(event.key)) event.preventDefault();
      if (inputPhone.value.length === 2) {
        inputPhone.value += ' (';
      }
      if (inputPhone.value.length === 7) {
        inputPhone.value += ') ';
      }
      if (inputPhone.value.length === 12) {
        inputPhone.value += ' - ';
      }
      if (inputPhone.value.length === 17) {
        inputPhone.value += ' - ';
      }
      if (inputPhone.value.length === 21) {
        buttonSubmit();
      }
    });
    inputEmail.addEventListener('keypress', () => {
      buttonSubmit();
      if (inputEmail.value === ePattern) {
        buttonSubmit();
      }
    });
    inputName.addEventListener('keypress', () => {
      buttonSubmit();
    });

    boxForm.appendChild(title);
    title.appendChild(form);
    form.appendChild(inputName);
    form.appendChild(inputPhone);
    form.appendChild(inputEmail);
    form.appendChild(btnSubmit);
    return boxForm;
  }
}
export const form = new Form();
