// --- Verificar login ---
if (sessionStorage.getItem("logueado") !== "true") {
  window.location.href = "login.html";
}

// --- Función para cargar componentes HTML ---
async function cargar(id, archivo) {
  const resp = await fetch(archivo);
  document.getElementById(id).innerHTML = await resp.text();
}

// Cargar header y footer
cargar("header", "components/header.html");
cargar("footer", "components/footer.html");
cargar("sidebar", "components/sidebar.html");

// --- Cargar catálogo desde /data/productos.json ---
fetch("data/productos.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo productos.json");
    }
    return response.json();
  })
  .then(productos => {
    const contenedor = document.getElementById("template-container");

    productos.forEach(producto => {
      const card = document.createElement("product-card");
      card.setAttribute("nombre", producto.nombre);
      card.setAttribute("descripcion", producto.descripcion);
      card.setAttribute("precio", producto.precio);
      card.setAttribute("imagen", producto.imagen);

      // Evento botón comprar
      card.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
          alert(`Agregado al carrito: ${producto.nombre} - ${producto.precio}`);
        }
      });

      contenedor.appendChild(card);
    });
  })
  .catch(error => console.error("Error cargando productos:", error));

