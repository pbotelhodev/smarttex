const nodemailer = require("nodemailer");

require("dotenv").config(); // Carrega as variáveis do seu .env

// Criamos o objeto que vai gerenciar a conexão com o servidor do Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Puxa smarttexdev@gmail.com
    pass: process.env.EMAIL_PASS, // Puxa a senha de 16 dígitos
  },
});

// Exportamos o transporter para que outros arquivos (como o serviço de e-mail) possam usá-lo
module.exports = transporter;
