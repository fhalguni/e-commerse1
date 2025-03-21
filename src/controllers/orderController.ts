import { Request, Response } from "express";
import orderService from "../services/orderService";

class OrderController {
  async createOrder(req: Request, res: Response) {
    try {
      const { userId, items } = req.body;
      const newOrder = orderService.createOrder(userId, items);
      res.status(200).json({
        message: "order Created",
        data: newOrder,
      });
    } catch (err) {
      res.status(404).json({
        error: err as Error,
      });
    }
  }
}

export default new OrderController();
