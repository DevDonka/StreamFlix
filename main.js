document.addEventListener('DOMContentLoaded', () => {
  // Búsqueda del catálogo
  const buscador = document.getElementById('catalogoBuscador');
  const tarjetas = document.querySelectorAll('.catalogo .card');
  const filtroGenero = document.getElementById('filtroGenero');

  // Función para filtrar el catálogo
  function filtrarCatalogo() {
    const termino = buscador.value.toLowerCase();
    const generoSeleccionado = filtroGenero.value;

    tarjetas.forEach(card => {
      const titulo = card.querySelector('.card-title').textContent.toLowerCase();
      const generoTarjeta = card.parentElement.getAttribute('data-genero');

      const coincideBusqueda = titulo.includes(termino);
      const coincideGenero = generoSeleccionado === 'todos' || generoTarjeta === generoSeleccionado;

      // Mostrar u ocultar la tarjeta de acuerdo con las condiciones
      if (coincideBusqueda && coincideGenero) {
        card.parentElement.style.display = 'block';
      } else {
        card.parentElement.style.display = 'none';
      }
    });
  }

  // Agregar evento para la búsqueda mientras se escribe y del filtro
  buscador.addEventListener('input', filtrarCatalogo);
  filtroGenero.addEventListener('change', filtrarCatalogo);
  
  filtrarCatalogo();
});
