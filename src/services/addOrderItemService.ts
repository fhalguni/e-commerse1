import { OrderItem } from "../models/orderItem";
import { orderItemRepository } from "../repositories/orderItemRepo";
import { orderRepository } from "../repositories/orderRepo";
import { productRepository } from "../repositories/productRepo";

class OrderItemService {
  async addOrderItem(
    orderId: number,
    productId: number,
    quantity: number
  ): Promise<OrderItem> {
    const order = await orderRepository.findOne({ where: { id: orderId } });
    if (!order) {
      throw new Error("Order not found");
    }

    const product = await productRepository.findOne({
      where: { id: productId },
    });
    if (!product) {
      throw new Error("Product not found");
    }

    const orderItem = new OrderItem();
    orderItem.order = order;
    orderItem.product = product;
    orderItem.quantity = quantity;
    orderItem.price = product.price;

    await orderItemRepository.save(orderItem);

    return orderItem;
  }
}

export default new OrderItemService();
