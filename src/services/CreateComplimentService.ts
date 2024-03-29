import fs from "fs";
import handlebars from "handlebars";
import { resolve } from "path";
import { getCustomRepository } from "typeorm"

import { AppError } from "../errors/AppErros";
import Mail from "../providers/mail/MailProvider";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimrntRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({ message, tag_id, user_receiver, user_sender }: IComplimrntRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    if (user_receiver === user_sender) {
      throw new AppError("Incorrect User Receiver")
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver);
    const userSender = await usersRepositories.findOne(user_sender);

    if (!userReceiverExists) {
      throw new AppError("User Receiver does not exists!")
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentsRepositories.save(compliment);

    const path = resolve(__dirname, "..", "providers", "mail", "views", "templateEmail.hbs")

    const variables = { sender: userSender.name, receiver: userReceiverExists.name, message }

    Mail.sendMail(
      `"${userReceiverExists.name}" <${userReceiverExists.email}>`,
      "Valoriza",
      path,
      variables
    )

    return compliment;

  }
}

export { CreateComplimentService }

function path(path: any) {
  throw new Error("Function not implemented.");
}
