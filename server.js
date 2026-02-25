const express = require("express");
const path = require("path");

const app = express();

// ✅ Puerto obligatorio para Azure
const PORT = process.env.PORT || 3000;

// ✅ Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// ✅ Ruta opcional (no es obligatoria si usas express.static)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});