import { badRequestError, notFoundError, playerAtNoTableError } from "../../errors";
import { BaseFormType } from "../../controller";
import { baseFormRepository, playerRepository, tableRepository } from "../../repository";
import { BaseForm, PlayerForm, PlayerType, Table } from "@prisma/client";
import { PlayerTables } from "../../protocols";

async function createNewTable(userId: number, name: string, form: BaseFormType): Promise<Table> {
  if (!form || !name) throw badRequestError();

  if (typeof form === "object") {
    const newForm = await baseFormRepository.createForm(form);
    const newTable = await tableRepository.createTable(name, newForm.id);
    const newPlayer = await playerRepository.createPlayer(userId, newTable.id, "MASTER", null);

    return newTable;

  } if (typeof form === "number") {
    const baseForm = await baseFormRepository.findFormById(form);
    if (!baseForm) throw notFoundError();

    const newTable = await tableRepository.createTable(name, baseForm.id);
    const newPlayer = await playerRepository.createPlayer(userId, newTable.id, "MASTER", null);

    return newTable
  }

}

async function findAllTablesFromUser(userId: number): Promise<PlayerTables[]> {
  const player = await playerRepository.findPlayerAndTablesByUserId(userId);

  if (player.length === 0) throw playerAtNoTableError();

  return player;
}

async function findOneTable(userId: number, tableId: number): Promise<TableMaster | TablePlayer> {
  const player = await playerRepository.findOnePlayerInTable(userId, tableId);
  if (!player) throw notFoundError();

  if (player.type === "MASTER") {
    const tableMaster = await tableRepository.findAllPlayerInMasterTables(player.Table.id);
    return {...tableMaster, playerMaster:true};
  };

  const tablePlayer: TablePlayer = {
    id: player.Table.id,
    name: player.Table.name,
    BaseForm: player.Table.BaseForm,
    playerMaster: false,
    Player: {
      id: player.id,
      User: {
        name: player.User.name
      },
      type: player.type,
      PlayerForm: player.PlayerForm
    }
  };

  return tablePlayer;
}

type TablePlayer = {
  id: number,
  name: string,
  BaseForm: BaseForm,
  playerMaster: boolean,
  Player: {
    id: number,
    User: { name: string },
    type: PlayerType,
    PlayerForm: PlayerForm
  }
};
type TableMaster = {
  id: number,
  name: string,
  BaseForm: BaseForm,
  playerMaster: boolean,
  Player: {
    id: number,
    type: PlayerType,
    User: { name: string },
    PlayerForm: PlayerForm
  }[]
};

const tableService = {
  createNewTable,
  findAllTablesFromUser,
  findOneTable
};

export { tableService }
