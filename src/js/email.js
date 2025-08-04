emailjs.init("8ntdIvsu4ES-7uX-E"); 

const forms = document.querySelectorAll("#registerForm");

forms.forEach(form => {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    
        const formData = new FormData(form);
        const templateParams = {};
    
        console.log(formData)
    
        // Loop through all form fields and add to templateParams
        formData.forEach((value, key) => {
            templateParams[key] = value;
        });
    
        emailjs.send("service_k0wl3af", "template_b10xo97", templateParams)
            .then(() => {
                alert("Email sent successfully. ✅");
                form.reset();
            }, (error) => {
                alert("Email sending failed.❌: " + error.text);
            });
    });
});


(() => {
    'use strict';
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
  })();