/* (Aca lo que hago es Iniciar Express,configurando los middelwares y conectando rutas) */

/* 1) Importo la libreria de express */
const express = require("express");
/* 2) Importo un modulo de node que sirve para manejar las rutas de archivos. */
const path = require("path");

/* 3) Creo la app express */
const app = express();

const port = 8080;

/* Middelwares que procesan la peticion antes de llegar a las rutas. */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

/* rutas que necesito importar. */
const librosRouter = require("./routes/libros");
app.use("/libros", librosRouter);

/* ruta raiz. */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* Arrancar el servidor. */
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
