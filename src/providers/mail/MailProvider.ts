import dotenv from 'dotenv'
import handlebars from "handlebars";
import { readFileSync } from "fs";
import * as nodemailer from "nodemailer";
import { SentMessageInfo } from "nodemailer/lib/smtp-transport";
import { config } from "./configs";

dotenv.config()

class Mail {
  private transporter: nodemailer.Transporter<SentMessageInfo>;

  constructor() {
    this.transporter = nodemailer.createTransport({
      port: config.port,
      host: config.host,
      auth: config.auth,
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
      from: `Valoriza <${process.env.MAIL_ADRESS}>`,
      subject,
      html: templateHTML
    })
  }
}

export default new Mail();