class Form {
  render() {
    const boxForm = document.createElement('div');
    boxForm.classList.add('person-form');

    const title = document.createElement('h2');
    title.classList.add('person-form__title');
    title.textContent = 'Пожалуйста, представьтесь';

    const form = document.createElement('form');
    form.classList.add('person-form__form');

    const inputText = document.createElement('input');
    inputText.type = 'tel';
    inputText.placeholder = 'Ваше имя';
    inputText.classList.add('person-form__place');
    inputText.autocomplete = 'off';
    inputText.required = true;

    const inputPhone = document.createElement('input');
    inputPhone.type = 'text';
    inputPhone.placeholder = 'Телефон';
    inputPhone.classList.add('person-form__place');
    inputPhone.autocomplete = 'off';
    inputPhone.pattern = '+7-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}';
    inputPhone.required = true;

    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.placeholder = 'Email';
    inputEmail.classList.add('person-form__place');
    inputEmail.autocomplete = 'off';
    inputEmail.required = true;

    const btnSubmit = document.createElement('button');
    btnSubmit.type = 'submite';
    btnSubmit.classList.add('person-form__button');
    btnSubmit.textContent = 'оформить заказ';

    if (inputEmail.value && inputText.value) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }
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

/* <div class="person-form">
<h2 class="person-form__title"></h2>
<form action="" class="person-form__form" > 
    <input type="text" name="name" id="name" placeholder="Ваше имя" class="person-form__place" autocomplete="off" >
    <input type="tel" name="phone" id="phone" placeholder="Телефон" class="person-form__place" autocomplete="off" pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}">
    <input type="email" name="email" id="email" placeholder="Email" class="person-form__place" autocomplete="off">
    <button type="submit" class="person-form__button" disabled>оформить заказ</button>
</form>
</div> */
