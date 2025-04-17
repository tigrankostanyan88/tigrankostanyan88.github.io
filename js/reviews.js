let addReviews = document.querySelector('.add_review');

addReviews.addEventListener('click', () => {
    Swal.fire({
        title: "Գրեք Ձեր կարծիքը",
        input: "textarea",
        inputLabel: "Ձեր կարծիքը այստեղ",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Ուղարկել",
        cancelButtonText: "Չեղարկել",
        showLoaderOnConfirm: false,
        preConfirm: (text) => {
          if (!text) {
            Swal.showValidationMessage("Խնդրում ենք գրել կարծիք");
          }
          return text;
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Շնորհակալություն կարծիքի համար!",
            text: `Դուք գրեցիք․ "${result.value}"`,
            icon: "success"
          });
        }
      });
      
})