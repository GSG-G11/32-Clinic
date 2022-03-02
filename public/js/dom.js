const doctorsList = document.querySelector('#doctors');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginForm = document.querySelector('#login-form');
const loginPage = document.querySelector('.login-page');

fetch('/doctors')
  .then((response) => response.json())
  .then((data) => {
    const { names } = data;
    names.forEach((element) => {
      const drOption = document.createElement('option');
      drOption.value = element.name;
      drOption.textContent = element.name;
      doctorsList?.appendChild(drOption);
    });
  });

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === 'sucess') {
        window.location = '/html/appointments-table-page.html';
      } else {
        const errorMassege = document.createElement('p');
        errorMassege.textContent = 'INVALID DOCTOR!';
        errorMassege.style.color = 'red';
        loginPage.appendChild(errorMassege);
      }
    })
    .catch((error) => console.log(error));
});
