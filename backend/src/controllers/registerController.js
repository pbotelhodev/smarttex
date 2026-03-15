const { registerNewUser } = require("../services/registerServices"); //Use o mesmo nome da função exportada no service

const handleRegisterForm = async (req, res) => {
  // O req.body é onde o React coloca as informações do formulário
  const dados = req.body;

  try {
    // Mandamos o serviço trabalhar e esperamos (await) ele terminar
    await registerNewUser(dados);

    // Se chegou aqui, deu certo. Respondemos status 200 (OK)
    return res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    // Se o serviço falhar (ex: senha errada no .env), caímos aqui
    console.error("Erro no Controller:", error);

    // Respondemos status 500 (Erro Interno do Servidor)
    return res
      .status(500)
      .json({ error: "Não foi possível registrar o usuário." });
  }
};

module.exports = { handleRegisterForm };

// 200 - OK: A requisição foi bem-sucedida e o servidor retornou os dados solicitados.
// 201 - Created: A requisição foi bem-sucedida e um novo recurso foi criado como resultado.
// 400 - Bad Request: A requisição é inválida ou malformada, geralmente devido a dados de entrada incorretos.
// 401 - Unauthorized: O cliente não está autenticado ou não tem permissão para acessar o recurso.
// 403 - Forbidden: O cliente está autenticado, mas não tem permissão para acessar o recurso.
// 404 - Not Found: O recurso solicitado não foi encontrado no servidor.
// 500 - Internal Server Error: Ocorreu um erro no servidor ao processar a requisição.