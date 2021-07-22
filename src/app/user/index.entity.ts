import { hashString } from "@core/utils/bcrypt";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
    unique: true,
    length: 100,
    type: "varchar",
    default: null,
  })
  email: string;

  @Column({
    nullable: false,
    unique: false,
    length: 100,
    type: "varchar",
  })
  password: string;

  @Column({
    nullable: false,
    unique: false,
    length: 50,
    type: "varchar",
  })
  firstname: string;

  @Column({
    nullable: false,
    unique: false,
    length: 50,
    type: "varchar",
  })
  lastname: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashUserPassword() {
    this.password = await hashString(this.password);
  }
}
