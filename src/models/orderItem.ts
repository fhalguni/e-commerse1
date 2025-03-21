import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Order } from "./order";
import { Product } from "./product";

@Entity("orderItem_table11")
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  quantity: number;

  @Column({ type: "int" })
  price: number;
  @ManyToOne(() => Order, (order) => order.orderItem)
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderItem)
  product: Product;
}
