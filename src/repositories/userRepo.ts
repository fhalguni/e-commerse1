import { AppDataSource } from "../config/database";
import { User } from "../models/user";

export const userRepository = AppDataSource.getRepository(User);
