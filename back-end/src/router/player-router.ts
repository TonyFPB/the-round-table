import { NewPlayerSchema, PlayerFormSchema } from "../schema";
import { authenticateToken, validateBody } from "../middleware";
import { Router } from "express";
import { newPlayer, updatePlayer } from "../controller";

const playerRouter = Router();

playerRouter
  .all("/*",authenticateToken)
  .post("/add", validateBody(NewPlayerSchema), newPlayer)
  .put("/form", validateBody(PlayerFormSchema), updatePlayer);

export { playerRouter };
