import { NextFunction, Request, Response } from "express";
import { unauthorizedError } from "../errors"
import jwt from "jsonwebtoken"
import httpStatus from "http-status";

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authorization = req.header("Authorization");
  if (!authorization) return res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());

  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer" || !token) return res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET) as JWTId;
    req.userId = id;

    return next();
  } catch (err) {
    return res.status(httpStatus.UNAUTHORIZED).send(err)
  }

}

export type AuthenticatedRequest = Request & JWTUserId

type JWTUserId = {
  userId: number;
}

type JWTId = {
  id:number;
}