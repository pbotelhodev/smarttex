const prisma = require("../config/prisma");

//Aqui ficará a lógica de negócios, ou seja, o que o sistema deve fazer para registrar um novo usuário
const visitorService = async (data) => {
  //use o mesmo nome da função exportada no controller
  const visitor = await prisma.visitorLog.create({
    data: {
      username: data.username ? data.username : undefined,
      ipAddress: data.ipAddress,
      userAgent: data.userAgent,
    },
  });
  return visitor;
};

module.exports = { visitorService };

//prisma.user.create({ data: { ... } }); // [CREATE] Grava novo registro
//prisma.user.findMany();                // [READ] Busca todos os registros
//prisma.user.update({ where: { ... }, data: { ... } }); // [UPDATE] Altera registro existente
//prisma.user.delete({ where: { ... } }); // [DELETE] Remove registro do banco
