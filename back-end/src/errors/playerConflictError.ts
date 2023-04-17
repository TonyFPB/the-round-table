import { ApplicationError } from "../protocols";

export function playerConflictError(): ApplicationError {
  return {
    name:"PlayerConflictError",
    message:"The user already exists in the table!"
  }
}