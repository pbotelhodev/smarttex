const { visitorService } = require("../services/visitorServices"); //Use o mesmo nome da função exportada no service

const visitorController = async (req, res) => {
  // O req.body é onde o React coloca as informações do formulário
  const dados = req.body;

  try {
    //Capturamos o ip do usuário e o agente
    const rawIp = req.headers["x-forwarded-for"] || req.ip;
    const ipAddress = rawIp ? rawIp.split(",")[0].trim() : "IP desconhecido";
    const userAgent = req.headers["user-agent"] || "Dispositivo desconhecido";

    const visitorData = {
      username: dados.username,
      ipAddress: ipAddress,
      userAgent: userAgent,
    };

    // Mandamos o serviço trabalhar e esperamos (await) ele terminar
    await visitorService(visitorData);

    return res.status(201).json({ message: "Log registrado" });

  } catch (error) {
    // Se o serviço falhar 
    console.error("Erro no Controller:", error);

    // Respondemos status 500 (Erro Interno do Servidor)
    return res
      .status(500)
      .json({ error: "Não foi possível registrar o log." });
  }
};

module.exports = { visitorController };

// 200 - OK: A requisição foi bem-sucedida e o servidor retornou os dados solicitados.
// 201 - Created: A requisição foi bem-sucedida e um novo recurso foi criado como resultado.
// 400 - Bad Request: A requisição é inválida ou malformada, geralmente devido a dados de entrada incorretos.
// 401 - Unauthorized: O cliente não está autenticado ou não tem permissão para acessar o recurso.
// 403 - Forbidden: O cliente está autenticado, mas não tem permissão para acessar o recurso.
// 404 - Not Found: O recurso solicitado não foi encontrado no servidor.
// 500 - Internal Server Error: Ocorreu um erro no servidor ao processar a requisição.
