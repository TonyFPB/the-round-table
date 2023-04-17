import { ApplicationError } from "../protocols";

export function userPlayerError(): ApplicationError {
  return{
    name:"UserPlayerError",
    message:"This user canot alter the player."
  }
}