const prisma = require("../config/prisma");

//Aqui ficará a lógica de negócios, ou seja, o que o sistema deve fazer para registrar um novo usuário
const loginService = async (data) => {
  if (!data.email || !data.password_hash) {
    const erroForm = new Error("Login e Senha são obrigatórios!");
    erroForm.status = 400;
    throw erroForm;
  }

  //use o mesmo nome da função exportada no controller
  const user = await prisma.user.findUnique({
    where: { email: data.email },
    select: {
      id: true,
      email: true,
      full_name: true,
      password_hash: true,
    },
  });

  if (!user ||  data.password_hash !== user.password_hash) {
    const erroForm = new Error("Credenciais inválidas!");
    erroForm.status = 401;
    throw erroForm;
  }

  const { password_hash, ...userClean} = user

  return userClean;
};

module.exports = { loginService };

//prisma.user.create({ data: { ... } }); // [CREATE] Grava novo registro
//prisma.user.findMany();                // [READ] Busca todos os registros
//prisma.user.findUnique({ where: { ... } }); // [READ] Busca um registro específico
//prisma.user.update({ where: { ... }, data: { ... } }); // [UPDATE] Altera registro existente
//prisma.user.delete({ where: { ... } }); // [DELETE] Remove registro do banco
