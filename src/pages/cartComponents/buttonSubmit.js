export function buttonSubmit() {
  const input = document.querySelectorAll('.person-form__place');
  const btnSubmit = document.querySelector('.person-form__button');
  let n = 0;
  for (let el = 0; el < input.length; el++) {
    if (!input[el].value) {
      n++;
    } else {
      n += 0;
    }
  }
  if (n === 0) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
