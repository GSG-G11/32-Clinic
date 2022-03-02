const doctorsList = document.querySelector('#doctors');

fetch('/doctors')
  .then((response) => response.json())
  .then((data) => {
    const { names } = data;
    names.forEach((element) => {
      const drOption = document.createElement('option');
      drOption.value = element.name;
      drOption.textContent = element.name;
      doctorsList.appendChild(drOption);
    });
  });
