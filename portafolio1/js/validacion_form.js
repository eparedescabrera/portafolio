document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
    e.preventDefault(); // Detener envío para validar

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validar campos vacíos
    if (!nombre || !email || !mensaje) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos antes de enviar.'
      });
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Email inválido',
        text: 'Por favor, ingresa un correo válido.'
      });
      return;
    }

    // Todo bien → Enviar el formulario
    this.submit(); // continúa hacia FormSubmit
  });