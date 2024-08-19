document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('miInput');

    if (input) {
        input.addEventListener('focus', function() {
            input.style.borderColor = 'darkgray';
        });

        input.addEventListener('blur', function() {
            input.style.borderColor = 'lightgray';
        });
    } else {
        console.error('El elemento con ID "miInput" no existe.');
    }
});