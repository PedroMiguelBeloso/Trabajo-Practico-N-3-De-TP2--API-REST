# TP 3 - API REST

Este es un trabajo práctico donde hicimos una API REST usando Node.js y Express. La API permite manejar libros con operaciones CRUD: agregar, ver, modificar y borrar.

Los datos se guardan en un array en memoria, así que si se apaga el servidor se pierden (está hecho así a propósito para el TP).

También hice una página web muy simple con un formulario para agregar libros a la API. Después de cargar un libro, se puede ver el resultado en pantalla y también consultando la ruta /libros.

## Cómo usarlo

1. Instalar dependencias:
npm install


2. Ejecutar el servidor:
node server.js

3. Abrir en el navegador:

Ahí se puede agregar libros desde el formulario.
y se prueban los demas metodos o funciones (get por id,post,put,delete) con el postman

 Endpoints

- **GET** `/libros` → devuelve todos los libros
- **GET** `/libros/:id` → devuelve el libro por id
- **POST** `/libros` → agrega un libro
- **PUT** `/libros/:id` → modifica un libro
- **DELETE** `/libros/:id` → elimina un libro


