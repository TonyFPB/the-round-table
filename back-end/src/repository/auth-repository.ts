import { prisma } from "../config"

async function findUserByEmail(email:string) {
  return prisma.user.findFirst({
    where:{email}
  })
}

async function findUserByName(name:string) {
  return prisma.user.findFirst({
    where:{name}
  })
}

async function createNewUser(name:string, email:string, password:string) {
  return prisma.user.create({
    data:{
      name,
      email,
      password
    }
  })
}

const authRepository = {
  findUserByEmail,
  findUserByName,
  createNewUser
};

export { authRepository };