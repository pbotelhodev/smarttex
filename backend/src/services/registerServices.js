const prisma = require("../config/prisma");

//Aqui ficará a lógica de negócios, ou seja, o que o sistema deve fazer para registrar um novo usuário
const registerService = async (data) => {
  //use o mesmo nome da função exportada no controller
  const newUser = await prisma.user.create({
    data: {
      full_name: data.full_name,
      password_hash: data.password_hash,
      email: data.email,
    },
  });
  return newUser;
};

module.exports = { registerService };

//prisma.user.create({ data: { ... } }); // [CREATE] Grava novo registro
//prisma.user.findMany();                // [READ] Busca todos os registros
//prisma.user.update({ where: { ... }, data: { ... } }); // [UPDATE] Altera registro existente
//prisma.user.delete({ where: { ... } }); // [DELETE] Remove registro do banco
