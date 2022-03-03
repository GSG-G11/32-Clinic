const doctorsList = document.querySelector('#doctors');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginForm = document.querySelector('#login-form');
const loginPage = document.querySelector('.login-page');
const cards = document.querySelector('.cards');
const searchBar = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-button');

const deleteAppointment = (element, id) => {
  element.addEventListener('click', () => {
    fetch(`/appointments/${id}`, {
      method: 'DELETE',
    }).then(() => {
      element.parentElement.remove();
    });
  });
};

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

loginForm?.addEventListener('submit', (e) => {
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
      if (data.message === 'success') {
        window.location = '/html/appointments-table-page.html';
      } else if (!document.getElementById('erroMessage')) {
        const errorMassege = document.createElement('p');
        errorMassege.setAttribute('id', 'erroMessage');
        errorMassege.textContent = '';
        errorMassege.textContent = 'INVALID DOCTOR!';
        errorMassege.style.color = 'red';
        loginPage.appendChild(errorMassege);
      }
    })
    .catch((error) => console.log(error));
});

fetch('/appointments')
  .then((response) => response.json())
  .then((data) => {
    const { names } = data;
    names.forEach((element) => {
      const appointmentCard = document.createElement('div');
      appointmentCard.classList.add('appointment-card');
      const name = document.createElement('p');
      const age = document.createElement('p');
      const date = document.createElement('p');
      const time = document.createElement('p');
      const mobile = document.createElement('p');
      const deleteBTN = document.createElement('button');
      deleteBTN.classList.add('delete-btn');
      deleteBTN.setAttribute('id', `${element.id}`);

      name.textContent = `Name: ${element.name}`;
      age.textContent = `Age: ${element.age}`;
      date.textContent = `Date: ${element.date.split('T')[0]}`;
      time.textContent = `Time: ${element.time}`;
      mobile.textContent = `Time: ${element.mobile}`;
      deleteBTN.textContent = 'Delete';
      deleteAppointment(deleteBTN, element.id);
      appointmentCard.appendChild(name);
      appointmentCard.appendChild(age);
      appointmentCard.appendChild(date);
      appointmentCard.appendChild(time);
      appointmentCard.appendChild(mobile);
      appointmentCard.appendChild(deleteBTN);

      cards?.appendChild(appointmentCard);
    });
  });

searchBtn?.addEventListener('click', () => {
  const inputValue = searchBar.value;
  fetch('/appointments')
    .then((response) => response.json())
    .then((data) => {
      const result = data.names.filter((ele) => {
        if (inputValue.toLowerCase() === ele.name.toLowerCase()) {
          return ele;
        }
      });
      cards.textContent = '';
      result.forEach((element) => {
        const appointmentCard = document.createElement('div');
        appointmentCard.classList.add('appointment-card');
        const name = document.createElement('p');
        const age = document.createElement('p');
        const date = document.createElement('p');
        const time = document.createElement('p');
        const mobile = document.createElement('p');
        const deleteBTN = document.createElement('button');
        deleteBTN.classList.add('delete-btn');
        deleteBTN.setAttribute('id', `${element.id}`);
        name.textContent = `Name: ${element.name}`;
        age.textContent = `Age: ${element.age}`;
        date.textContent = `Date: ${element.date.split('T')[0]}`;
        time.textContent = `Time: ${element.time}`;
        mobile.textContent = `Time: ${element.mobile}`;
        deleteBTN.textContent = 'Delete';

        appointmentCard.appendChild(name);
        appointmentCard.appendChild(age);
        appointmentCard.appendChild(date);
        appointmentCard.appendChild(time);
        appointmentCard.appendChild(mobile);
        appointmentCard.appendChild(deleteBTN);

        cards?.appendChild(appointmentCard);
      });
    });
});
