import * as _ from 'lodash';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const dataArray = {};

formRef.addEventListener('input', _.throttle(touchInput, 500));
function touchInput(e) {
  e.preventDefault();

  dataArray.email = formRef.elements.email.value;
  dataArray.message = formRef.elements.message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataArray));
}

const data = localStorage.getItem(LOCALSTORAGE_KEY);
const dataParced = JSON.parse(data);

if (data !== null) {
  function updateFormValue() {
    formRef.elements.email.value = dataParced.email;
    formRef.elements.message.value = dataParced.message;
  }
  updateFormValue();
}

formRef.addEventListener('submit', clearLocalStorage);
function clearLocalStorage(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(dataParced);
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
