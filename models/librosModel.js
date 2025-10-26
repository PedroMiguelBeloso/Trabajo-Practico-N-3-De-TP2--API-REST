/* En models lo que hacemos es guardar datos en memoria y proveer las funciones CRUD simples */

/* Genero un Array en memoria, al apagar el server estos datos dejan de existir. */
let libros = [
  { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967 },
  { id: 2, titulo: 'Ficciones', autor: 'Jorge Luis Borges', año: 1944 }
];
let nextId = 3;

/* Funcion para obtener todos los libros */
function getAll() {
  return libros;
  /* Devuelvo el Array entero. */
}

/* Funcion para obtener un libro por su id. */
function getById(id) {
  return libros.find(l => l.id === id) || null;
}

/* Funcion para agregar libros o crearlos en realidad. */
function createLibro({ titulo, autor, año }) {
  const nuevo = { id: nextId++, titulo, autor, año };
  libros.push(nuevo);
  return nuevo;
}

/* Funcion para editar libros ya existentes */
function updateLibro(id, { titulo, autor, año }) {
  const lib = getById(id);
  if (!lib) return null;
  if (titulo !== undefined) lib.titulo = titulo;
  if (autor !== undefined) lib.autor = autor;
  if (año !== undefined) lib.año = año;
  return lib;
}

/* Funcion para eliminar libros por id. */
function deleteLibro(id) {
  const idx = libros.findIndex(l => l.id === id);
  if (idx === -1) return false;
  libros.splice(idx, 1);
  return true;
}

/* Exportamos las funciones. */
module.exports = { getAll, getById, createLibro, updateLibro, deleteLibro };
