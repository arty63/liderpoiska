import emailjs from '@emailjs/browser';

export function sendEmail() {
  emailjs.init('8vj-2PBKSAVtvyYQQ');

  const templateParams = {
    from_name: 'Лидер поиска тест',
    name: document.getElementById('name').value,
    total: document.getElementById('total').textContent.split(' ')[1],
    phone: document.getElementById('phone').value,
    send_email: document.getElementById('email').value,
  };
  emailjs.send('service_37zbse7', 'template_n191lsr', templateParams).then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text);
    },
    function (err) {
      console.log('FAILED...', err);
    },
  );
}
