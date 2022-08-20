import { darkBg } from './DarkBackground';
import { buttonSubmite } from './phone';
import { popup } from './Popup';

class Form {
  // name = inputText.value
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

    const inputText = document.createElement('input');
    inputText.id = 'input-name';
    inputText.type = 'text';
    inputText.placeholder = 'Ваше имя';
    inputText.classList.add('person-form__place');
    inputText.autocomplete = 'off';
    inputText.required = true;

    const inputPhone = document.createElement('input');
    inputPhone.id = 'input-phone';
    inputPhone.type = 'tel';
    inputPhone.placeholder = 'Телефон';
    inputPhone.classList.add('person-form__place');
    inputPhone.autocomplete = 'off';
    inputPhone.required = true;
    inputPhone.maxLength = 22;
    inputPhone.minLength = 22;

    inputPhone.pattern = /((?:\+7|8)\ \(\d{3}\)\ \d{3}\ \-\ \d{2}\ \-\ \d{2})/g;

    const inputEmail = document.createElement('input');
    inputEmail.id = 'input-email';
    inputEmail.type = 'email';
    inputEmail.placeholder = 'Email';
    inputEmail.classList.add('person-form__place');
    inputEmail.autocomplete = 'off';
    inputEmail.required = true;

    const btnSubmit = document.createElement('button');
    btnSubmit.type = 'submite';
    btnSubmit.classList.add('person-form__button');
    btnSubmit.textContent = 'оформить заказ';
    btnSubmit.disabled = false;

    btnSubmit.addEventListener(
      'click', (event) => {
        event.preventDefault();
        popup.render(inputText.value, inputPhone.value, inputEmail.value);
        
      }
    );

    inputPhone.addEventListener('focus', _ => {
      if (!/^\+\d*$/.test(inputPhone.value)) inputPhone.value = '+7';
    });

    inputPhone.addEventListener('keypress', event => {
      if (!/\d/.test(event.key)) event.preventDefault();
      if (inputPhone.value.length == 2) {
      inputPhone.value += ' (';
      }
      if (inputPhone.value.length == 7) {
        inputPhone.value += ') ';
      }
      if (inputPhone.value.length == 12) {
        inputPhone.value += ' - ';
      }
      if (inputPhone.value.length == 17) {
        inputPhone.value += ' - ';
      }
      buttonSubmite();
    });
  

    boxForm.appendChild(title);
    title.appendChild(form);
    form.appendChild(inputText);
    form.appendChild(inputPhone);
    form.appendChild(inputEmail);
    form.appendChild(btnSubmit);
    return boxForm;
  }
}
export const form = new Form();
