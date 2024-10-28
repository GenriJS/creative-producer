document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById('name');
  const contactInput = document.getElementById('contact');
  const checkboxInput = document.getElementById('checkbox');
  const nameMessage = document.getElementById('nameMessage');
  const contactMessage = document.getElementById('contactMessage');
  const checkboxMessage = document.getElementById('checkboxMessage');

  nameInput.addEventListener('input', () => validateInput(nameInput, nameMessage));
  contactInput.addEventListener('input', () => {validateInput(contactInput, contactMessage); console.log(contactInput)});
  checkboxInput.addEventListener('input', () => validateInput(checkboxInput, checkboxMessage));

  let nameFill = false;
  let contactFill = false;
  let checkboxFill = false;

  function validateInput(input, messageElement) {
    if (valid(input)) {
      if (input.type === 'text') {
        messageElement.style.display = "none";
        const messageContent = messageElement.querySelector('p');
        messageContent.textContent = "";
        if (input === nameInput) {
          nameFill = true;
        } else {
          contactFill = true;
        }
      }
      if (input.type === 'checkbox') {
        messageElement.style.display = "none";
        const messageContent = messageElement.querySelector('p');
        messageContent.textContent = "";
        checkboxFill = true;
      }
    } else {
      if (input.type === 'text') {
        messageElement.style.display = "flex";
        const messageContent = messageElement.querySelector('p');
        messageContent.textContent = "обязательное поле";
        if (input === nameInput) {
          nameFill = false;
        } else {
          contactFill = false;
        }
      }
      if (input.type === 'checkbox') {
        messageElement.style.display = "flex";
        const messageContent = messageElement.querySelector('p');
        messageContent.textContent = "необходимо дать своё согласие";
        checkboxFill = false;
      }
    }
  }

  nameInput.addEventListener('input', () => activateBtn());
  contactInput.addEventListener('input', () => activateBtn());
  checkboxInput.addEventListener('input', () => activateBtn());


  const submitButton = document.getElementById('submitButton');

  function activateBtn() {
    if (nameFill === true && contactFill === true && checkboxFill === true) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  function valid(input) {
    const value = input.value.trim();
    const type = input.type;
    if (type === 'text') {
      return value !== '';
    } else if (type === 'checkbox') {
      return input.checked;
    } 
    return false;
  }
});