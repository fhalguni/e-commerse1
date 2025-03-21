import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user";

@Entity("profile_table11")
export class Profile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  bio!: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User[];
}
