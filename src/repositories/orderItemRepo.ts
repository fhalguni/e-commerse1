import { AppDataSource } from "../config/database";
import { OrderItem } from "../models/orderItem";

export const orderItemRepository = AppDataSource.getRepository(OrderItem);
