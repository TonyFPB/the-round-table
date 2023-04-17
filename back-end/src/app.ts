import express from "express";
import cors from "cors";
import { loadEnvs } from "./config/envs";
import { authRouter, playerRouter, tableRouter, userRouter } from "./router";
import { prisma } from "./config";

loadEnvs();

const server = express()
server
  .use(cors())
  .use(express.json())
  .get("/health", async(req, res) => { res.send("OK!") })
  .use("/auth", authRouter)
  .use("/table", tableRouter)
  .use("/user", userRouter)
  .use("/player", playerRouter)

server.get("/", (req, res) => res.send("hellow world"));

export default server;
