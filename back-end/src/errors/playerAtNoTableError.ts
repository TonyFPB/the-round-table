import { ApplicationError } from "../protocols";

export function playerAtNoTableError(): ApplicationError {
  return{
    name:"PlayerTableErrorNotFound",
    message:"This user is not in any table."
  }
}
