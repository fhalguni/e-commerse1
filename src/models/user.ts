import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Profile } from "./profile";
import { Order } from "./order";

@Entity("user_table11")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  email!: string;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn({ name: "profile_id" })
  profile: Profile;

  @OneToMany(() => Order, (order) => order.user)
  order: Order[];
}
