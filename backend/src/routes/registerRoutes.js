// primeiro chamamos o express, que é o framework que usamos para criar o servidor
const express = require("express");
// depois criamos uma instância do router do express, que é o que usamos para definir as rotas da nossa API
const router = express.Router();
// importamos a função que vai lidar com o formulário de contato, que criamos no controller
const { registerController } = require("../controllers/registerController"); //Use o mesmo nome da função exportada no controller

// definimos a rota POST para /register, que vai chamar a função handleRegisterForm quando receber uma requisição
router.post("/register", registerController);

module.exports = router;
