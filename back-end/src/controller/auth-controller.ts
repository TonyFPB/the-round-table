import  { authService, NewUserSign} from "../service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function signUp(req: Request, res: Response) {
  try {
    const user = req.body as NewUserSign
    const newUser = await authService.postSignUp(user);
    res.sendStatus(httpStatus.CREATED); 
  }catch(err) {
    if(err.name === "ConflictEmailError"){
      return res.status(httpStatus.CONFLICT).send(err)
    }
    if(err.name === "ConflictNameError"){
      return res.status(httpStatus.CONFLICT).send(err)
    }
  }
}

export async function signIn(req: Request, res: Response) {
  try{
    const { email, password } = req.body as SignInType;
    const user = await authService.postSignIn(email, password);
    res.status(httpStatus.OK).send(user)
  }catch(err){
    if(err.name === "UnauthorizedError"){
      return res.status(httpStatus.UNAUTHORIZED).send(err);
    }
  }
}

type SignInType = {
  email: string,
  password: string
}
