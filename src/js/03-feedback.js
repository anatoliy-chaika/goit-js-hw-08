import * as _ from 'lodash';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const dataArray = {};

formRef.addEventListener('input', _.throttle(handleSubmit, 1000));
function handleSubmit(e) {
  e.preventDefault();

  // const {
  //   elements: { email, message },
  // } = e.currentTarget;

  dataArray.email = `${e.currentTarget.email.value}`;
  dataArray.message = `${e.currentTarget.message.value}`;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataArray));
}

const data = localStorage.getItem(LOCALSTORAGE_KEY);

if (data !== null) {
  function updateFormValue() {
    const dataParced = JSON.parse(data);
    formRef.elements.email.value = dataParced.email;
    formRef.elements.message.value = dataParced.message;
  }
  updateFormValue();
}

formRef.addEventListener('submit', clearLocalStorage);
function clearLocalStorage(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(data));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
