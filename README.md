# Katalogoss - Sitio Web Profesional

Un sitio web moderno y futurista para Katalogoss, especialistas en catálogos profesionales con estilo ciberpunk.

## 📁 Estructura del Proyecto

```
paginaweb/
├── index.html                 # Página principal
├── styles.css                 # Estilos y diseño responsivo
├── script.js                  # Funcionalidades interactivas
├── catalogo-yazbek.html       # Página visualizador PDF - Yazbek
├── catalogo-optima.html       # Página visualizador PDF - Optima
├── catalogo-playerytees.html  # Página visualizador PDF - Playerytees
├── catalogo-shaka.html        # Página visualizador PDF - Shaka
├── catalogo-temporada.html    # Página visualizador PDF - Temporada
├── catalogo-dimeo.html        # Página visualizador PDF - Dimeo
├── catalogs/                  # Carpeta con archivos PDF
│   ├── yazbek.pdf
│   ├── optima.pdf
│   ├── playerytees.pdf
│   ├── shaka.pdf
│   ├── temporada.pdf
│   └── dimeo.pdf
├── img/                       # Carpeta para imágenes
└── README.md                  # Este archivo
```

## ✨ Características

- **Diseño Ciberpunk**: Tema futurista con colores neón aqua y cian
- **Responsive Design**: Se adapta a todos los tamaños de pantalla
- **Navegación Sticky**: Barra de navegación fija al desplazarse
- **Animaciones Suaves**: Efectos visuales ciberpunk elegantes
- **Secciones Incluidas**:
  - Inicio/Hero con llamada a acción
  - Servicios (6 servicios especializados)
  - Catálogos (6 categorías de catálogos)
  - Clientes (logos de clientes)
  - Proyectos (trabajos realizados)
  - Contacto (formulario funcional)
  - Footer con enlaces sociales

## 🚀 Cómo Usar

### 1. **Abre el archivo** `index.html` en tu navegador
   - Verás la página principal con la sección de catálogos

### 2. **Agrega los archivos PDF**
   - Crea una carpeta llamada `catalogs/` en la raíz del proyecto
   - Coloca tus archivos PDF con los siguientes nombres:
     - `yazbek.pdf`
     - `optima.pdf`
     - `playerytees.pdf`
     - `shaka.pdf`
     - `temporada.pdf`
     - `dimeo.pdf`

### 3. **Haz clic en "Ver Catálogo"**
   - Te llevará a una página dedicada donde podrás:
     - Ver el PDF embebido en un visualizador
     - Descargar el PDF si lo deseas
     - Regresar a la página principal con el botón "Regresar"

### 4. **Personaliza el contenido**
   - Cambia el nombre en la sección Logo
   - Actualiza los servicios según tus necesidades
   - Modifica los datos de contacto en el footer
   - Reemplaza las imágenes en la carpeta `img/`

## 🎨 Colores Ciberpunk

Los colores principal y secundario están definidos en `styles.css`:

```css
:root {
    --primary-color: #00ffff;      /* Aqua neón */
    --secondary-color: #00f5ff;    /* Cian brillante */
    /* ... otros colores ciberpunk ... */
}
```

Cámbia estos valores para personalizar el tema.

## � Enlaces de Catálogos

Cada botón "Ver Catálogo" ahora dirige a una página local dedicada para visualizar cada PDF:

- **Yazbek** → `catalogo-yazbek.html`
- **Optima** → `catalogo-optima.html`
- **Playerytees** → `catalogo-playerytees.html`
- **Shaka** → `catalogo-shaka.html`
- **Ropa de Temporada** → `catalogo-temporada.html`
- **Dimeo** → `catalogo-dimeo.html`

### 📄 Visualizador de PDF

Cada página de catálogo incluye:
- **Visualización embebida** del PDF en un iframe
- **Botón de descarga** para descargar el archivo PDF
- **Botón de regresar** en la navbar para volver a la página principal
- **Diseño responsivo** que se adapta a todos los dispositivos
- **Estilo ciberpunk** consistente con el sitio principal

### 📌 Estructura de Carpetas

Para que los PDFs se visualicen correctamente, coloca los archivos en la carpeta `catalogs/`:

```
paginaweb/
└── catalogs/
    ├── yazbek.pdf
    ├── optima.pdf
    ├── playerytees.pdf
    ├── shaka.pdf
    ├── temporada.pdf
    └── dimeo.pdf
```

## �📱 Breakpoints Responsivos

- **Desktop**: Diseño completo a partir de 769px
- **Tablet**: Ajustes de 481px a 768px
- **Mobile**: Optimizado para pantallas < 480px

## 🔧 Funcionalidades JavaScript

- Navegación con desplazamiento suave
- Efecto hover en tarjetas
- Validación del formulario de contacto
- Animaciones de entrada en scroll
- Efectos visuales interactivos
- **Enlaces de catálogos funcionales** que abren en nuevas pestañas

## 📝 Notas

- El formulario de contacto actualmente muestra un mensaje de éxito (conectar a un servidor backend para envíos reales)
- Las imágenes de ejemplo necesitan ser reemplazadas
- **Los botones "Ver Catálogo" están vinculados a URLs específicas** del sitio katalogoss.wordpress.com
- Considera agregar más páginas si necesitas expandir el sitio

## 🎯 Próximos Pasos

1. Personalizar contenido y colores
2. Agregar tus propias imágenes
3. Conectar formulario a un backend
4. Opcionalmente: agregar más páginas (servicios detallados, blog, etc.)

¡Disfruta tu nuevo sitio web! 🎉
