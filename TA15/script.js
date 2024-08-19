document.getElementById('añadirElementoBtn').addEventListener('click', function() {
    const lista = document.getElementById('lista');
    const inputElemento = document.getElementById('inputElemento');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = inputElemento.value;
    lista.appendChild(nuevoElemento);
    inputElemento.value = '';
});

document.getElementById('eliminarUltimoElementoBtn').addEventListener('click', function() {
    const lista = document.getElementById('lista');
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    }
});