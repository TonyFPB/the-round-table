import { signIn, signUp } from "../controller";
import { validateBody } from "../middleware";
import { SignUpSchema } from "../schema";
import { Router } from "express";

const authRouter = Router();

authRouter
  .post("/sign-up", validateBody(SignUpSchema), signUp)
  .post("/sign-in", signIn);

export { authRouter };

