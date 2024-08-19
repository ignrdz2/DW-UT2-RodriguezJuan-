document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('miFormulario');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorEmail');
    const errorPassword = document.getElementById('errorPassword');

    if (form && nombre && email && password && errorNombre && errorEmail && errorPassword) {
        form.addEventListener('submit', function(event) {
            let formIsValid = true;

            // Validar nombre
            if (nombre.value.trim() === '') {
                errorNombre.style.display = 'block';
                formIsValid = false;
            } else {
                errorNombre.style.display = 'none';
            }

            // Validar email
            const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email.value)) {
                errorEmail.style.display = 'block';
                formIsValid = false;
            } else {
                errorEmail.style.display = 'none';
            }

            // Validar contraseña
            if (password.value.length < 8) {
                errorPassword.style.display = 'block';
                formIsValid = false;
            } else {
                errorPassword.style.display = 'none';
            }

            if (!formIsValid) {
                event.preventDefault();
            }
        });

        nombre.addEventListener('input', function() {
            if (this.value.trim() === '') {
                errorNombre.style.display = 'block';
            } else {
                errorNombre.style.display = 'none';
            }
        });

        email.addEventListener('input', function() {
            const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(this.value)) {
                errorEmail.style.display = 'block';
            } else {
                errorEmail.style.display = 'none';
            }
        });

        password.addEventListener('input', function() {
            if (this.value.length < 8) {
                errorPassword.style.display = 'block';
            } else {
                errorPassword.style.display = 'none';
            }
        });
    } else {
        console.error('Uno o más elementos no se encontraron en el DOM.');
    }
});