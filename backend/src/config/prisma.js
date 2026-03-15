const { PrismaClient } = require("@prisma/client");

// Instancia o cliente do Prisma
const prisma = new PrismaClient({
  adapter: process.env.DATABASE_URL,
  // accelerateUrl: process.env.PRISMA_ACCELERATE_URL,
});

module.exports = prisma;
