const express = require ("express");
const cors = require ("cors");

// Importa as rotas
const contactRoutes = require('./routes/contactRoutes');
const registerRoutes = require('./routes/registerRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", contactRoutes);
app.use("/api", registerRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Backend smarttex ativo 🟢" });
});



module.exports = app;
