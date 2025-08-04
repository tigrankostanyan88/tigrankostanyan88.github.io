'use strict';

emailjs.init("8ntdIvsu4ES-7uX-E");

const forms = document.querySelectorAll("form");

forms.forEach(form => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let hasEmptyField = false;

    const formData = new FormData(e.target);
    const templateParams = {};
    
    for (let [key, value] of formData.entries()) {
      if (!value.trim()) {
        hasEmptyField = true;
        break;
      }
      templateParams[key] = value;
    }

    if (hasEmptyField) {
      alert("Please fill out all fields.");
      return;
    }

    console.log(formData)

  });
});


// All input validation
function validation() {
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
}

validation()