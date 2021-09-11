import dotenv from 'dotenv'
import { configMailTrap } from "./configMailTrap";
import { configZoho } from "./configZoho";

dotenv.config()

const config = process.env.WORK_PLACE === 'prod' ? configZoho : configMailTrap

export { config }
