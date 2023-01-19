import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
async function main() {
  const hashPassword = await bcrypt.hash('123', 5);
  const usersData = Array.from({ length: 10 }, () => ({
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: hashPassword,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }));
  await prisma.users.createMany({ data: usersData });

  const postsData = Array.from({ length: 30 }, () => ({
    title: faker.lorem.sentence(),
    text: faker.lorem.paragraphs(10),
    userId: faker.datatype.number({ min: 1, max: 10 }),
  }));
  await prisma.posts.createMany({ data: postsData });

  const commentsData = Array.from({ length: 50 }, () => ({
    text: faker.lorem.sentence(),
    postId: faker.datatype.number({ min: 1, max: 30 }),
    userId: faker.datatype.number({ min: 1, max: 10 }),
    parentId:
      Math.random() > 0.5 ? faker.datatype.number({ min: 1, max: 10 }) : null,
  }));
  await prisma.comments.createMany({ data: commentsData });

  const likesData = Array.from({ length: 50 }, () => ({
    postId: faker.datatype.number({ min: 1, max: 30 }),
    userId: faker.datatype.number({ min: 1, max: 10 }),
    commentId: faker.datatype.number({ min: 1, max: 50 }),
  }));
  await prisma.likes.createMany({ data: likesData });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
