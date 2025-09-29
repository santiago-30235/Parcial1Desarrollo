# Parcial1Desarrollo
## Estructura de Carpetas

El proyecto se organizó siguiendo una estructura clara para separar las responsabilidades de cada tipo de archivo:


/gamezone-project
components/
│── footer.html
│── header.html
│── sidebar.html
css/
│── styles.css
data/
│── productos.json
imagenes/
│── fondo-gamer.jpg
│── Grand Theft Auto ....jpg
│── Mario Kart 8.jpg
│── Mortal Kombat 11.jpg
js/
│── login.js
│── main.js
│── product-card.js
index.html
login.html
README.md


## Conceptos Clave Implementados

Para lograr una aplicación modular y reutilizable, se implementaron los siguientes conceptos fundamentales del desarrollo web .

### 1. Fragmentos (Fragments)

Los fragmentos son porciones de código HTML reutilizables, como el encabezado (header), el pie de página (footer) y la barra lateral (sidebar).

*Implementación:*
- Se crearon archivos HTML separados para header.html, footer.html y sidebar.html dentro de la carpeta /components.
- Mediante JavaScript y la API fetch, estos fragmentos se cargan dinámicamente en la página principal (index.html), evitando la duplicación de código y facilitando el mantenimiento.

### 2. Plantillas (<template>)

La etiqueta <template> de HTML se utilizó para definir un "molde" o plantilla para la tarjeta de cada producto. El contenido de esta etiqueta no se renderiza en la página hasta que es clonado y añadido al DOM mediante JavaScript.

*Implementación:*
- En index.html, se definió un <template> con la estructura HTML de una tarjeta de producto.
- JavaScript se encarga de leer los datos de los videojuegos desde productos.json, clonar el contenido del template por cada producto, rellenar la información (nombre, precio, imagen) y finalmente insertarlo en la sección de contenido principal.

### 3. Web Components

Los Web Components son un conjunto de tecnologías que permiten crear elementos HTML personalizados, reutilizables y encapsulados.

*Implementación:*
- Se creó un Web Component personalizado llamado <product-card>.
- Este componente encapsula su propia estructura (HTML), estilos (CSS) y lógica (JavaScript) utilizando el *Shadow DOM*. Esto previene conflictos de estilos con el resto de la aplicación.
- El componente recibe los datos del producto (nombre, precio, descripción, imagen) a través de atributos HTML, haciendo su uso muy sencillo e intuitivo en el index.html.

## Detalles de Implementación

### Formulario de Inicio de Sesión

Se implementó un formulario de inicio de sesión con las siguientes características:
- *Página dedicada*: login.html contiene el formulario y su lógica es manejada por login.js.
- *Validación con JavaScript*: Se utilizan credenciales predeterminadas (quemadas en el código) para fines educativos.
- *Redirección*: Si las credenciales son correctas, el usuario es redirigido a la página principal (index.html). En caso contrario, se muestra un mensaje de error.

> *Nota de seguridad*: Este sistema de login es puramente con fines académicos y no es seguro para aplicaciones en producción. Las credenciales nunca deben ser manejadas de esta manera en un entorno real.

##  Buenas Prácticas Aplicadas

A lo largo del proyecto, se siguieron varias buenas prácticas de desarrollo:

- *Separación de Responsabilidades*: El código se dividió en archivos HTML, CSS y JavaScript distintos, cada uno con un propósito específico.
- *Convenciones de Nomenclatura*:
  - camelCase para variables y funciones en JavaScript.
  - kebab-case para clases en CSS.
- *Código Limpio y Comentado*: Se mantuvo el código correctamente indentado y se añadieron comentarios para explicar las partes más complejas de la lógica.
- *Modularización*: Se crearon componentes y fragmentos reutilizables para mantener el código bajo el principio DRY (Don't Repeat Yourself).

## Evidencia de Colaboración en GitHub

El trabajo en equipo fue fundamental para este proyecto. La colaboración se puede evidenciar a través del historial del repositorio en GitHub, incluyendo:
- *Commits*: Registro detallado de los cambios realizados por cada miembro del equipo.
- *Ramas (Branches)*: Uso de ramas para desarrollar nuevas funcionalidades de forma aislada antes de integrarlas a la rama principal.
- *Pull Requests*: Proceso de revisión de código para asegurar la calidad y coherencia antes de fusionar los cambios.