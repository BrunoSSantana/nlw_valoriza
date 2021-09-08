import * as nodemailer from "nodemailer";
import { config } from "./config";


class Mail {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      auth: config.auth,
    })
  }

  sendMail(message: any) {
    return this.transporter.sendMail({
      ...config.default,
      ...message
    })
  }
}

export default new Mail();