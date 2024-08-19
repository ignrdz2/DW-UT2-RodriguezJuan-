document.addEventListener('DOMContentLoaded', function() {
    const personas = [
        'Juan Pérez',
        'María García',
        'Carlos López',
        'Ana Fernández',
        'Luis Martínez',
        'Sofía Rodríguez'
    ];

    const listaPersonas = document.getElementById('listaPersonas');
    const busqueda = document.getElementById('busqueda');

    // Renderizar la lista de personas
    function renderizarLista(filtro = '') {
        listaPersonas.innerHTML = '';
        const personasFiltradas = personas.filter(persona => 
            persona.toLowerCase().includes(filtro.toLowerCase())
        );
        personasFiltradas.forEach(persona => {
            const li = document.createElement('li');
            li.textContent = persona;
            listaPersonas.appendChild(li);
        });
    }

    // Filtrar la lista mientras se escribe en el input
    busqueda.addEventListener('input', function() {
        renderizarLista(this.value);
    });

    // Renderizar la lista inicialmente sin filtro
    renderizarLista();
});