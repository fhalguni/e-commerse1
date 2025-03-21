import { Request, Response } from "express";
import addOrderItemService from "../services/addOrderItemService";

class OrderItemController {
  async addOrderItem(req: Request, res: Response): Promise<void> {
    try {
      const { orderId, productId, quantity } = req.body;

      if (!orderId || !productId || !quantity || quantity <= 0) {
        res.status(400).json({ error: "Invalid input data" });
        return;
      }

      const orderItem = await addOrderItemService.addOrderItem(
        orderId,
        productId,
        quantity
      );

      res.status(201).json(orderItem);
    } catch (error) {
      res.status(500).json({ error: error as Error });
    }
  }
}

export default new OrderItemController();
