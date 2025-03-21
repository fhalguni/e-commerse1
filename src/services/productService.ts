import { Brackets } from "typeorm";
import { Product } from "../models/product";
import { productRepository } from "../repositories/productRepo";
import { orderItemRepository } from "../repositories/orderItemRepo";

class ProductService {
  async createProduct(name: string, price: number) {
    const product = productRepository.create({ name, price });
    return await productRepository.save(product);
  }

  async getHighPrice() {
    const product = productRepository
      .createQueryBuilder("product")
      .where((qb) => {
        const subQuery = qb
          .subQuery()
          .select("SUM(orderItem.price)")
          .from("orderItem_table11", "orderItem")
          .where("orderItem.productId = product.id")
          .getQuery();
        return "1000 < (" + subQuery + ")";
      })
      .getMany();

    return product;
  }

  async getPrice() {
    const product = await orderItemRepository

      .createQueryBuilder("orderItem")

      .where(
        new Brackets((qb) =>
          qb
            .where("orderItem.price >:price", { price: 4000 })
            .orWhere("orderItem.price = :price", { price: 2000 })
        )
      )
      .getMany();
    return product;
  }
}

export default new ProductService();
