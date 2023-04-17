import { prisma } from "../config";

async function findUserByName(name: string) {
  return prisma.user.findMany({
    where: {
      name: { contains: name }
    },
    select: {
      id:true,
      name: true
    },
    orderBy:{ name:"asc" }
  });
}

async function findUserById(id: number) {
  return prisma.user.findUnique({
    where:{id},
    select:{
      id:true,
      name:true
    }
  })
}

const userRepository = {
  findUserByName,
  findUserById
};

export { userRepository };
