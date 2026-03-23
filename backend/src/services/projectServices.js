const prisma = require("../config/prisma");

//Aqui ficará a lógica de negócios, ou seja, o que o sistema deve fazer para registrar um novo usuário
const projectService = async () => {
  //use o mesmo nome da função exportada no controller
  const project = await prisma.project.findMany({
    select: {
      id: true,
      projectName: true,
      category: true,
      tech: true,
      href: true,
      imageUrl: true,
      highlight: true,
      slug: true,
      description: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return project;
};

module.exports = { projectService };

//prisma.user.create({ data: { ... } }); // [CREATE] Grava novo registro
//prisma.user.findMany();                // [READ] Busca todos os registros
//prisma.user.findUnique({ where: { ... } }); // [READ] Busca um registro específico
//prisma.user.update({ where: { ... }, data: { ... } }); // [UPDATE] Altera registro existente
//prisma.user.delete({ where: { ... } }); // [DELETE] Remove registro do banco
