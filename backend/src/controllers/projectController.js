const { projectService } = require("../services/projectServices"); //Use o mesmo nome da função exportada no service

const projectController = async (req, res) => {
  try {
    // Mandamos o serviço trabalhar e esperamos (await) ele terminar
    const projects = await projectService();

    // Se chegou aqui, deu certo. Respondemos status 200 (OK)
    return res.status(200).json(projects);
  } catch (error) {
    // Se o serviço falhar (ex: senha errada no .env), caímos aqui
    console.error(error.message);

    const statusCode = error.status || 404; // Usa o status do erro ou 500 se não tiver

    // Respondemos status 500 (Erro Interno do Servidor)
    return res.status(statusCode).json({
      message: error.message || "Ocorreu um erro ao rerquisitar os projetos.",
    });
  }
};

module.exports = { projectController };

// 200 - OK: A requisição foi bem-sucedida e o servidor retornou os dados solicitados.
// 201 - Created: A requisição foi bem-sucedida e um novo recurso foi criado como resultado.
// 400 - Bad Request: A requisição é inválida ou malformada, geralmente devido a dados de entrada incorretos.
// 401 - Unauthorized: O cliente não está autenticado ou não tem permissão para acessar o recurso.
// 403 - Forbidden: O cliente está autenticado, mas não tem permissão para acessar o recurso.
// 404 - Not Found: O recurso solicitado não foi encontrado no servidor.
// 500 - Internal Server Error: Ocorreu um erro no servidor ao processar a requisição.
