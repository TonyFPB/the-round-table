import { authenticateToken } from "../middleware";
import { Router } from "express";

const formRouter = Router();

formRouter.all("/*", authenticateToken)