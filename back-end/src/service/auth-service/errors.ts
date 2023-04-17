import { ApplicationError} from "../../protocols"

export function ConflictEmailError(): ApplicationError {
  return {
    name: "ConflictEmailError",
    message: "This email is already in use."
  }
}

export function ConflictNameError(): ApplicationError {
  return {
    name: "ConflictNameError",
    message: "This name is already in use."
  }
}

export function invalidEmailOrPasswordError(): ApplicationError {
  return {
    name:"UnauthorizedError",
    message:"Email or password are incorrect."
  }
}