const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la raíz
app.use(express.static(__dirname));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Ruta login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "loginUser.html"));
});

// API de prueba
app.get("/api/test", (req, res) => {
  res.json({ mensaje: "Backend funcionando en Azure 🚀" });
});

// 404
app.use((req, res) => {
  res.status(404).send("Ruta no encontrada");
});

// Errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});