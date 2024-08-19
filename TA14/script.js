document.getElementById('añadirElementoBtn').addEventListener('click', function() {
    const input = document.getElementById('inputElemento');
    const texto = input.value;
    if (texto !== '') {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = texto;
        document.getElementById('lista').appendChild(nuevoElemento);
        input.value = '';
    }
});