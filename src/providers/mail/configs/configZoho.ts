import dotenv from 'dotenv'
dotenv.config()

const configZoho = {
  host: process.env.MAIL_HOST as string,
  port: process.env.MAIL_PORT as unknown as number,
  secure: process.env.MAIL_SECURE as unknown as boolean,
  auth: {
    user: process.env.MAIL_ADRESS,
    pass: process.env.MAIL_PASSWORD
  },
  default: {
    from: "nlw Valoriza"
  }
};

export { configZoho }