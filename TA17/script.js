document.getElementById('incrementarBtn').addEventListener('click', function() {
    const contador = document.getElementById('contador');
    let numeroActual = parseInt(contador.textContent);
    contador.textContent = numeroActual + 1;
});