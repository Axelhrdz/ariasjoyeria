async function cargarProductos() {
    // 1. Obtener lista de archivos .md (en producción, usa una API o lista estática)
    const archivos = ['producto1.md', 'producto2.md']; // Reemplaza con tus archivos reales
  
    // 2. Contenedor donde se mostrarán los productos
    const contenedor = document.getElementById('productos-container');
  
    // 3. Cargar cada producto
    for (const archivo of archivos) {
      try {
        const response = await fetch(`/data/productos/${archivo}`);
        const texto = await response.text();
        
        // 4. Parsear el Markdown con gray-matter (extrae metadatos y contenido)
        const { data: producto } = grayMatter(texto);
  
        // 5. Crear HTML del producto
        contenedor.innerHTML += `
          <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
          </div>
        `;
      } catch (error) {
        console.error(`Error al cargar ${archivo}:`, error);
      }
    }
  }
  
  // Ejecutar al cargar la página
  document.addEventListener('DOMContentLoaded', cargarProductos);