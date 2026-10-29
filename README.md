# BIOCOMFORT — sitio web React

Sitio web responsive para una empresa de instalación, reparación y mantenimiento de aires acondicionados.

## Requisitos
- Node.js y npm instalados.
- VS Code u otro editor.

## Instalar y ejecutar
En una terminal, dentro de la carpeta del proyecto:

```bash
npm install
npm run dev
```

Vite mostrará una dirección local, normalmente `http://localhost:5173`. Ábrela en el navegador.

## Comprobar la compilación
```bash
npm run build
```

## Archivos principales
- `index.html`: documento HTML base.
- `src/main.jsx`: punto de entrada de React.
- `src/App.jsx`: composición de la página.
- `src/App.css`: estilos de la página.
- `src/index.css`: estilos globales.
- `src/components/`: componentes de encabezado, hero, servicios, nosotros, contacto y pie.

## Importante sobre el formulario
El formulario actual valida los campos en el navegador y muestra un mensaje de demostración. No envía correos ni guarda solicitudes en una base de datos. Para eso falta desarrollar y conectar un backend y la base de datos.

## Seguridad
No subas claves privadas, contraseñas ni archivos `.env` con secretos a GitHub.
