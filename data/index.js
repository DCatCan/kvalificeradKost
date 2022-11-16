import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const serialize = (el) => {
  return JSON.parse(JSON.stringify(el));
};

export default prisma;
