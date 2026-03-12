const { sendContactEmail } = require("../services/emailServices");

const handleContactForm = async (req, res) => {
  // O req.body é onde o React coloca as informações do formulário
  const dados = req.body;

  try {
    // Mandamos o serviço trabalhar e esperamos (await) ele terminar
    await sendContactEmail(dados);

    // Se chegou aqui, deu certo. Respondemos status 200 (OK)
    return res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    // Se o serviço falhar (ex: senha errada no .env), caímos aqui
    console.error("Erro no Controller:", error);

    // Respondemos status 500 (Erro Interno do Servidor)
    return res
      .status(500)
      .json({ error: "Não foi possível enviar sua mensagem." });
  }
};

module.exports = { handleContactForm };
