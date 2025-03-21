import { AppDataSource } from "../config/database";
import { Product } from "../models/product";

export const productRepository = AppDataSource.getRepository(Product);
