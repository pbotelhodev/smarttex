const transporter = require("../config/mailer");

/**
 * Função responsável por disparar notificações para o sistema e e-mail pessoal
 * @param {Object} dados - Nome, email, telefone, empresa, budget e mensagem
 */
const sendContactEmail = async (dados) => {
  const { name, email, phone, company, budget, message } = dados;

  // --- CONFIGURAÇÃO DO E-MAIL 1: DESIGN PREMIUM (SMARTTEX) ---
  const mailSmarttex = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER_SMARTTEX,
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

            <h2 style="color: #ffffff; font-size: 24px; margin: 0 0 25px 0; letter-spacing: -0.5px; font-weight: bold;">Dados do Projeto.</h2>

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
                <div style="color: #94a3b8; font-size: 14px; line-height: 1.6;">${message}</div>
            </div>

            <div style="margin-top: 35px;">
                <a href="mailto:${email}" style="display: block; background-color: #ffffff; color: #000000; text-align: center; padding: 15px; text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
                    Responder Lead
                </a>
            </div>
        </div>

        <div style="text-align: center; margin-top: 40px;">
            <p style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #475569; margin: 0;">ESTE É UM E-MAIL AUTOMÁTICO DISPARADO PELO SISTEMA SMARITEX.</p>
            <p style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #334155; margin-top: 10px;">© 2026 Smarttex Development Lab</p>
        </div>
      </div>
    `,
  };

  // --- CONFIGURAÇÃO DO E-MAIL 2: ALERTA PESSOAL (BÁSICO) ---
  const mailPersonal = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER_PERSONAL,
    subject: `⚠️ Alerta: Novo Lead (${name})`,
    html: `
      <div style="background-color: #0F1115; padding: 25px; font-family: 'Space Grotesk', sans-serif; color: #cbd5e1; max-width: 450px; margin: 0 auto; border: 1px solid #1e293b; border-radius: 8px;">
        
        <div style="margin-bottom: 15px; border-bottom: 1px solid #334155; padding-bottom: 10px;">
            <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #818cf8; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                ⚡ Alerta Rápido
            </span>
        </div>

        <h3 style="color: #ffffff; margin: 0 0 20px 0; font-size: 18px; font-weight: bold;">
            Você tem um novo contato.
        </h3>

        <div style="background-color: #0A0C10; padding: 15px; border-radius: 6px; border: 1px solid #1e293b; font-size: 14px; line-height: 1.8;">
            <div style="border-bottom: 1px solid #1e293b; padding-bottom: 8px; margin-bottom: 8px;">
                <strong style="color: #475569; font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase;">Cliente:</strong> 
                <span style="color: #f8fafc; float: right;">${name}</span>
            </div>
            <div style="border-bottom: 1px solid #1e293b; padding-bottom: 8px; margin-bottom: 8px;">
                <strong style="color: #475569; font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase;">Empresa:</strong> 
                <span style="color: #f8fafc; float: right;">${company}</span>
            </div>
            <div style="border-bottom: 1px solid #1e293b; padding-bottom: 8px; margin-bottom: 8px;">
                <strong style="color: #475569; font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase;">Telefone:</strong> 
                <span style="color: #f8fafc; float: right;">${phone}</span>
            </div>
            <div style="border-bottom: 1px solid #1e293b; padding-bottom: 8px; margin-bottom: 8px;">
                <strong style="color: #475569; font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase;">E-mail:</strong> 
                <span style="color: #f8fafc; float: right;">${email}</span>
            </div>
            <div style="padding-top: 4px;">
                <strong style="color: #475569; font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase;">Orçamento:</strong> 
                <span style="color: #818cf8; float: right; font-weight: bold;">${budget}</span>
            </div>
        </div>

        <div style="margin-top: 25px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #475569;">
            Detalhes completos no e-mail e na plataforma oficial da Smarttex.
        </div>
      </div>
    `,
  };

  console.log("Variável Smarttex:", process.env.EMAIL_RECEIVER_SMARTTEX);
  console.log("Variável Pessoal:", process.env.EMAIL_RECEIVER_PERSONAL);
  // Envia ambos simultaneamente usando Promise.all
  return Promise.all([
    transporter.sendMail(mailSmarttex),
    transporter.sendMail(mailPersonal),
  ]);
};

module.exports = { sendContactEmail };
