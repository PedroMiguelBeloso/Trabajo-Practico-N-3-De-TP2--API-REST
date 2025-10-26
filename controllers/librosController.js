/* El controller se encarga de gestionar la lógica y validacion de los datos.*/

/* Importamos el modelo para usar las funciones CRUD de los libros */
const model = require("../models/librosModel");

/* Funcion para obtener todo el array de libros. */
function getAll(req, res) {
  res.json(model.getAll());
}

/* Funcion para obtener libros por id. */
function getById(req, res) {
  const id = parseInt(req.params.id, 10);
  const libro = model.getById(id);
  if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
  res.json(libro);
}

/* Funcion para agregar libros. */
function create(req, res) {
  const { titulo, autor, año } = req.body;
  if (!titulo || !autor || !año) {
    return res.status(400).json({ error: "faltan campos: titulo, autor, año" });
  }
  const nuevo = model.createLibro({ titulo, autor, año });
  res.status(201).json(nuevo);
}

/* Funcion para actualizar u modificar libros. */
function update(req, res) {
  const id = parseInt(req.params.id, 10);
  const { titulo, autor, año } = req.body;
  const actualizado = model.updateLibro(id, { titulo, autor, año });
  if (!actualizado)
    return res.status(404).json({ error: "Libro no encontrado" });
  res.json(actualizado);
}

/* Funcion para eliminar libros. */
function remove(req, res) {
  const id = parseInt(req.params.id, 10);
  const ok = model.deleteLibro(id);
  if (!ok) return res.status(404).json({ error: "Libro no encontrado" });
  res.json({ message: "Libro eliminado" });
}

/* Exporto las funciones. */
module.exports = { getAll, getById, create, update, remove };
