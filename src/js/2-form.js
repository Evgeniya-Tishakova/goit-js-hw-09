let formData = { email: '', message: '' };

// Отримуємо форму
const form = document.querySelector('.feedback-form');

// Додаємо подію input до всієї форми
form.addEventListener('input', event => {
  // Зберігай актуальні дані з полів email та message у formData
  formData.email = form.email.value;
  formData.message = form.message.value;

  // та записуй цей об’єкт у локальне сховище. Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

if (localStorage.getItem('feedback-form-state')) {
  formData = JSON.parse(localStorage.getItem('feedback-form-state'));

  form.email.value = formData.email.trim();
  form.message.value = formData.message.trim();
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.email.value === '' || form.message.value === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();
  formData = { email: '', message: '' };
  localStorage.removeItem('feedback-form-state');
});
