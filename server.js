const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Indicar a Express dónde están los archivos estáticos
app.use(express.static("public"));

// Opcional: servir index.html para la raíz
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Ejemplo de API
app.get("/api/test", (req, res) => {
  res.json({ mensaje: "Backend funcionando 🚀" });
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});