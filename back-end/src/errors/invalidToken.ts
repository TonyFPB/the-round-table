import { ApplicationError } from "../protocols";

export function unauthorizedError(): ApplicationError {
  return{
    name:"UnauthorizedError",
    message:"Invalid user data."
  }
}