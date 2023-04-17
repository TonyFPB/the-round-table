import { postNewTable, getAllTables, getOneTable } from "../controller";
import { authenticateToken } from "../middleware";
import { Router } from "express";

const tableRouter = Router();

tableRouter
  .all("/*",authenticateToken)
  .post("/new", postNewTable)
  .get("/user", getAllTables)
  .get("/:tableId", getOneTable)

export { tableRouter };
