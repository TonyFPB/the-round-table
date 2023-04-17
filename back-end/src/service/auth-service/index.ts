import { authRepository } from "../../repository"
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ConflictEmailError, ConflictNameError, invalidEmailOrPasswordError } from "./errors";

async function postSignUp(newUser: NewUserSign): Promise<User> {
  const {name, email, password} = newUser  

  const userEmail = await authRepository.findUserByEmail(email);
  if(userEmail) throw ConflictEmailError();

  const userName = await authRepository.findUserByName(name);
  if(userName) throw ConflictNameError();

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await authRepository.createNewUser(name, email, hashPassword)

  return user
}

async function postSignIn (email: string, password:string): Promise<UserToken>{
  const user = await authRepository.findUserByEmail(email);
  if(!user) throw invalidEmailOrPasswordError()

  await validatePassword(password, user.password);

  const token = jwt.sign({ id:user.id }, process.env.JWT_SECRET);

  return {name: user.name, token};
}

async function validatePassword(password: string, passwordHash:string) {
  const passwordValid = await bcrypt.compare(password, passwordHash);
  if(!passwordValid) throw invalidEmailOrPasswordError();
}


const authService = {
  postSignUp,
  postSignIn
}

export { authService }

export type NewUserSign = {
  name: string,
  email: string, 
  password: string, 
  confirmPasssword: string
}

export type UserToken = {
  name: string,
  token: string
}