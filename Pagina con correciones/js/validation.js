(() => {
    'use strict'
  
    // Obtener el formulario al que queremos aplicar validación y asignarlo a la constante forms
    const forms = document.querySelectorAll('.needs-validation');
    const contactF = document.getElementById('contactForm');
  
    // Recorre cada elemento input del form y evita el envío
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        contactF.classList.add('was-validated')

      }, false)
    })
})
()



