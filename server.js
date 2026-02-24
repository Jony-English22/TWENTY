const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/test", (req, res) => {
  res.json({ mensaje: "Backend funcionando en Azure 🚀" });
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});