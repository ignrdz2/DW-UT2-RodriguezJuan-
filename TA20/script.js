const imagen = document.getElementById('imagen');

document.addEventListener('DOMContentLoaded', function() {
    const imagen = document.getElementById('imagen');

    if (imagen) {
        imagen.addEventListener('mouseover', function() {
            imagen.src = 'img2.jpg'; // Cambia la imagen al pasar el mouse por encima
        });

        imagen.addEventListener('mouseout', function() {
            imagen.src = 'img1.jpg'; // Vuelve a la imagen original al retirar el mouse
        });
    } else {
        console.error('El elemento con ID "imagen" no existe.');
    }
});
