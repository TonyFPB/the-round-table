import { notFoundError } from "../../errors";
import { userRepository } from "../../repository";


async function getUsersByName(name: string) {
  const users = await userRepository.findUserByName(name);

  if (users.length === 0) throw notFoundError()

  return users
}


const userService = {
  getUsersByName
};

export { userService };
