const transporter = require("../config/mailer");

/**
 * Função responsável por montar o template e disparar o e-mail
 * @param {Object} dados - Dados capturados pelo formulário do React
 */
const sendContactEmail = async (dados) => {
  // 1. Extraímos os novos campos.
  // IMPORTANTE: Esses nomes devem ser iguais aos do register() no seu Front.
  const { name, email, phone, company, budget, message } = dados;

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `🚀 Novo Lead - ${name} (${company})`,
    html: `
      <div style="background-color: #0F1115; padding: 40px 20px; font-family: 'Space Grotesk', sans-serif; color: #cbd5e1; max-width: 600px; margin: 0 auto; border: 1px solid #1e293b;">
    
    <div style="text-align: center; margin-bottom: 40px;">
        <img src="https://i.ibb.co/NkY7qzm/Logo-Smarttex-Sem-Fundo-White.png" alt="Smarttex Logo" style="height: 35px; object-fit: contain;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #64748b; letter-spacing: 3px; margin-top: 15px; text-transform: uppercase;">
            / inbound_notification_v2
        </div>
    </div>

    <div style="background-color: #0A0C10; border: 1px solid #334155; padding: 30px; position: relative;">
        
        <div style="margin-bottom: 25px;">
            <span style="display: inline-block; width: 8px; height: 8px; background-color: #818cf8; border-radius: 50%; margin-right: 8px;"></span>
            <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #818cf8; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
                Novo Lead Identificado
            </span>
        </div>

        <h2 style="color: #ffffff; font-size: 24px; margin: 0 0 25px 0; letter-spacing: -0.5px; font-weight: bold;">
            Dados do Projeto.
        </h2>

        <div style="margin-bottom: 20px;">
            <div style="margin-bottom: 15px; border-bottom: 1px solid #1e293b; padding-bottom: 10px;">
                <label style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #475569; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Nome do Cliente</label>
                <div style="color: #f8fafc; font-size: 16px;">${name}</div>
            </div>

            <div style="margin-bottom: 15px; border-bottom: 1px solid #1e293b; padding-bottom: 10px;">
                <label style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #475569; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Empresa / Organização</label>
                <div style="color: #f8fafc; font-size: 16px;">${company}</div>
            </div>

            <div style="margin-bottom: 15px; border-bottom: 1px solid #1e293b; padding-bottom: 10px;">
                <label style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #475569; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">E-mail Corporativo</label>
                <div style="color: #f8fafc; font-size: 16px;">${email}</div>
            </div>

            <div style="margin-bottom: 15px; border-bottom: 1px solid #1e293b; padding-bottom: 10px;">
                <label style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #475569; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Telefone / WhatsApp</label>
                <div style="color: #f8fafc; font-size: 16px;">${phone}</div>
            </div>

            <div style="margin-bottom: 15px; border-bottom: 1px solid #1e293b; padding-bottom: 10px;">
                <label style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #475569; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Budget Estimado</label>
                <div style="color: #818cf8; font-size: 16px; font-weight: bold;">${budget}</div>
            </div>
        </div>

        <div style="background-color: #050505; border-left: 3px solid #818cf8; padding: 20px; margin-top: 30px;">
            <label style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #475569; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 10px;">Breve Descritivo</label>
            <div style="color: #94a3b8; font-size: 14px; line-height: 1.6;">
                ${message}
            </div>
        </div>

        <div style="margin-top: 35px;">
            <a href="mailto:${email}" style="display: block; background-color: #ffffff; color: #000000; text-align: center; padding: 15px; text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
                Responder Lead
            </a>
        </div>
    </div>

    <div style="text-align: center; margin-top: 40px;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #475569; margin: 0;">
            ESTE É UM E-MAIL AUTOMÁTICO DISPARADO PELO SISTEMA SMARITEX.
        </p>
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #334155; margin-top: 10px;">
            © 2026 Smarttex Development Lab
        </p>
    </div>
</div>
    `,
  });
};

module.exports = { sendContactEmail };
