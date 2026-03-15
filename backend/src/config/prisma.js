const { PrismaClient } = require("@prisma/client");

// Deixe o parêntese vazio. O Prisma se vira sozinho com o .env
const prisma = new PrismaClient();

module.exports = prisma;
