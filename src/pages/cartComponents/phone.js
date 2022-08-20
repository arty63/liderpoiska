export function buttonSubmite() {
  
      if (inputEmail.valid && inputText.value &&
      inputPhone.value) {
      btnSubmit.disabled = false;
      } else {
      btnSubmit.disabled = true;
      }
  
}