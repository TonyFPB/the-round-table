import { ApplicationError } from "../protocols";

export function typePlayerError(): ApplicationError {
  return{
    name:"TypePlayerError",
    message:"This user is not allowed to make this change"
  }
}