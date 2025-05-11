document.addEventListener('DOMContentLoaded', () => {
  // Búsqueda del catálogo
  const buscador = document.getElementById('catalogoBuscador');
  const tarjetas = document.querySelectorAll('.catalogo .card');
  const filtroGenero = document.getElementById('filtroGenero');

  // Función para filtrar el catálogo
  function filtrarCatalogo() {
    const termino = buscador.value.toLowerCase();

    tarjetas.forEach(card => {
      const titulo = card.querySelector('.card-title').textContent.toLowerCase();
      const coincideBusqueda = titulo.includes(termino);

      // Mostrar u ocultar la tarjeta de acuerdo con las condiciones
      if (coincideBusqueda) {
        card.parentElement.style.display = 'block';
      } else {
        card.parentElement.style.display = 'none';
      }
    });
  }

  // Agregar evento para la búsqueda mientras se escribe
  buscador.addEventListener('input', filtrarCatalogo);
  // Agregar evento para el filtro de géner
  filtroGenero.addEventListener('change', filtrarCatalogo);
  // También ejecutar la función al iniciar para cargar el catálogo con los filtros
  filtrarCatalogo();
});
