import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 3,
  //     },
  //     data: {
  //       title: "This is title 3",
  //       content: "This is content 3",
  //       authorName: "author 3",
  //     },
  //   });

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "Title 2",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });

  //   console.log(updateMany);

  const upsertData = await prisma.post.upsert({
    where: {
      id: 2,
    },
    update: {
      content: "content 2",
    },
    create: {
      title: "Title 1",
      content: "content 1",
      authorId: 2,
    },
  });

  console.log(upsertData);
};

updates();
