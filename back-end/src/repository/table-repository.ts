import { prisma } from "../config";

async function createTable(name: string, baseFormId:number) {
  return prisma.table.create({
    data:{
      name,
      baseFormId
    }
  })
}

async function findAllPlayerInMasterTables(tableId: number) {
  return prisma.table.findUnique({
    where:{id:tableId},
    select:{
      id: true,
      name: true,
      BaseForm: true,
      Player:{
        select:{
          id: true,
          User:{
            select:{
              name: true
            }
          },
          type: true,
          PlayerForm: true
        }
      }
    }
  })
}

const tableRepository = {
  createTable,
  findAllPlayerInMasterTables
};

export { tableRepository };
