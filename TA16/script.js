document.getElementById('toggleBtn').addEventListener('click', function() {
    const parrafo = document.getElementById('texto');
    if (parrafo.style.display === 'none') {
        parrafo.style.display = 'block';
    } else {
        parrafo.style.display = 'none';
    }
});