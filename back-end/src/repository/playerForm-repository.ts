import { prisma } from "../config"

async function upsertPlayerForm(form: object, id?: number) {
  return prisma.playerForm.upsert({
    where: { id: id || 0 },
    update: {
      form: form
    },
    create: {
      form: form
    }
  })
}




const playerFormRepository = {
  upsertPlayerForm
};

export { playerFormRepository };