import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAllFromDB = await prisma.post.findMany({
    select: {
      author: true,
    },
  });

  console.log("get all data:", getAllFromDB);

  // findFirst and findFirstOrThrow
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  // findUnique and findUniqueOrThrow
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 31,
    },
    select: {
      title: true,
      content: true,
      author: true,
      published: true,
    },
  });

  console.log({ findUnique });
};

main();
