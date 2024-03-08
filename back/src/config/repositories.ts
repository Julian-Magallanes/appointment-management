import Appointment from "../entities/Appointment";
import Credential from "../entities/Credential";
import User from "../entities/User";
import { AppDataSource } from "./data-source";

export const credentialModel = AppDataSource.getRepository(Credential)
export const usersModel = AppDataSource.getRepository(User)
export const appointmentsModel = AppDataSource.getRepository(Appointment)