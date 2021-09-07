import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
};

class CreateUserService {
  async execute({ email, name, admin, password }: IUserRequest) {
    const userRepository = getCustomRepository(UsersRepositories)

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already Exists");
    }

    const passwordHash = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      admin: !admin ? false: admin,
      password: passwordHash,
    });

    await userRepository.save(user);
  }
}

export { CreateUserService };