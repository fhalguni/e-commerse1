import { AppDataSource } from "../config/database";
import { Order } from "../models/order";

export const orderRepository = AppDataSource.getRepository(Order);
