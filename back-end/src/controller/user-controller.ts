import { Response } from "express";
import { AuthenticatedRequest } from "../middleware";
import httpStatus from "http-status";
import { userService } from "../service";
import { notFoundError } from "../errors";


export async function getUsers(req: AuthenticatedRequest, res: Response) {
  try {
    const name  = req.query.name as string;
    if(!name){
      return res.status(httpStatus.NOT_FOUND).send(notFoundError())
    }
    const users = await userService.getUsersByName(name);
    return res.send(users);
  }catch(err) {
    console.log(err)
    if(err.name === "NotFoundError"){
      return res.status(httpStatus.NOT_FOUND).send(err);
    }
  }
}
