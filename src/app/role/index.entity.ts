import { User } from "@app/user/index.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "smallint",
  })
  num: number;

  @Column({
    type: "varchar",
  })
  label: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
