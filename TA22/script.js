document.addEventListener('DOMContentLoaded', function() {
    function mostrarTamañoVentana() {
        const ancho = window.innerWidth;
        const alto = window.innerHeight;
        const tamañoVentana = document.getElementById('tamañoVentana');
        
        if (tamañoVentana) {
            tamañoVentana.textContent = `Tamaño de la ventana: ${ancho}px x ${alto}px`;
        } else {
            console.error('El elemento con ID "tamañoVentana" no existe.');
        }
    }

    mostrarTamañoVentana();
    window.addEventListener('resize', mostrarTamañoVentana);
});