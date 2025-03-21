import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user";
import { OrderItem } from "./orderItem";

@Entity("order_table11")
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "date" })
  date: Date;

  @ManyToOne(() => User, (user) => user.order)
  user: User;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItem: OrderItem[];
}
