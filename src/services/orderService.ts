import { userRepository } from "../repositories/userRepo";
import { orderRepository } from "../repositories/orderRepo";
import { productRepository } from "../repositories/productRepo";
import { orderItemRepository } from "../repositories/orderItemRepo";
import { Order } from "../models/order";
import { OrderItem } from "../models/orderItem";

class OrderService {
  async createOrder(
    userId: number,
    items: { productId: number; quantity: number }[]
  ) {
    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("User not found");
    }

    const order = new Order();
    order.date = new Date();
    order.user = user;

    const orderItems = [];
    for (const item of items) {
      const product = await productRepository
        .createQueryBuilder("product")
        .where("product.id = :productId", { productId: item.productId })
        .getOne();
      console.log(product);

      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found`);
      }

      const orderItem = new OrderItem();
      orderItem.product = product;
      orderItem.quantity = item.quantity;
      orderItem.price = product.price * item.quantity;
      orderItem.order = order;

      orderItems.push(orderItem);
    }

    await orderRepository.save(order);
    await orderItemRepository.save(orderItems);

    return order;
  }
}

export default new OrderService();
