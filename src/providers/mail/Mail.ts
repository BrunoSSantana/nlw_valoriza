import handlebars from "handlebars";
import { readFileSync } from "fs";
import * as nodemailer from "nodemailer";
import { configMailTrap } from "./configMailTrap";


class Mail {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: configMailTrap.host,
      port: configMailTrap.port,
      auth: configMailTrap.auth,
    })
  }

  async sendMail(
    to: string,
    subject: string,
    path: string,
    variables: any
  ): Promise<void> {


    const templateFileContent = readFileSync(path).toString("utf-8");

    const templateParse = handlebars.compile(templateFileContent);

    const templateHTML = templateParse(variables)


    await this.transporter.sendMail({
      to,
      from: "Valoriza <valoriza@somosvaloriza.com.br>",
      subject,
      html: templateHTML
    })
  }
}

export default new Mail();