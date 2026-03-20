require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend Smarttex ativo na porta ${PORT} 🟢`);
  console.log(`Link público: https://api.smarttex.com.br 🚀`);
});
