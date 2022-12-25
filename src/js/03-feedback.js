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

const getData = localStorage.getItem(LOCALSTORAGE_KEY);
const getDataParced = JSON.parse(getData);

if (getData !== null) {
  function updateFormValue() {
    formRef.elements.email.value = getDataParced.email;
    formRef.elements.message.value = getDataParced.message;
  }
  updateFormValue();
}

formRef.addEventListener('submit', clearLocalStorage);
function clearLocalStorage(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(getDataParced);
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
