import { AppDataSource } from "../config/database";
import { Profile } from "../models/profile";

export const profileRepository = AppDataSource.getRepository(Profile);
