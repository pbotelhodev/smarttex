const express = require("express");
const cors = require("cors");
const path = require("path");

// Importa as rotas
const contactRoutes = require("./routes/contactRoutes");
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");
const visitorRoutes = require("./routes/visitorRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();
app.set("trust proxy", true);

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

//Rotas
app.use("/api", contactRoutes);
app.use("/api", registerRoutes);
app.use("/api", loginRoutes);
app.use("/api", visitorRoutes);
app.use("/api", projectRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Server smarttex ativo 🟢" });
});

module.exports = app;
