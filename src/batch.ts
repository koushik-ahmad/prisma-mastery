import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransactional = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "John",
      email: "john@ph.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 5,
    },
    data: {
      age: 30,
    },
  });

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updateData);
};

batchTransactional();
