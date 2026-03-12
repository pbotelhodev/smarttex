const express = require("express");
const router = express.Router();
const { handleContactForm } = require("../controllers/contactController");

// Definimos que: se alguém enviar um POST para o caminho '/contato',
// nós chamamos a função 'handleContactForm' que criamos no Controller.
router.post("/contato", handleContactForm);

module.exports = router;
