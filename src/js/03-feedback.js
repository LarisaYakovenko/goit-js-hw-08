import throttle from 'lodash.throttle';

import '../css/common.css';
import '../css/03-feedback.css';


const STORAGE_KEY = 'feedback-form-state';

form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
const { email, message } = form.elements;
reloadPage();

function onInputData() {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function reloadPage() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Будь ласка, заповніть усі поля!');
  }

  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
  formData = {};
}


