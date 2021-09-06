import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
};

class CreateUserService {
  async execute({ email, name, admin }: IUserRequest) {
    const userRepository = getCustomRepository(UsersRepositories)

    const userAlreadyExists = userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already Exists");
    }

    const user = userRepository.create({
      name,
      email,
      admin,
    });

    await userRepository.save(user);
  }
}

export { CreateUserService };