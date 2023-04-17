import { BaseForm, PlayerType, Table } from "@prisma/client";

export type ApplicationError = {
  name: string,
  message: string
};

export type PlayerTables = {
  Table:{
    id: number,
    name: string,
    BaseForm: BaseForm
  },
  id: number,
  type: PlayerType
};
