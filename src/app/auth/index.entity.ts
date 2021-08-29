import { User } from "@app/user/index.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("auth_identities")
export class AuthIdentity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 500,
    type: "varchar",
    nullable: true,
    name: "refresh_token",
  })
  refreshToken: string;

  @Column({
    length: 500,
    type: "varchar",
    nullable: true,
    name: "email_verification_token",
  })
  emailVerificationToken: string;

  @Column({
    type: "datetime",
    nullable: true,
    name: "email_verification_valid_until",
  })
  emailVerificationValidUntil: string;

  @Column({
    length: 500,
    type: "varchar",
    nullable: true,
  })
  passwordResetToken: string;

  @Column({
    type: "datetime",
    nullable: true,
    name: "password_reset_valid_until",
  })
  passwordResetValidUntil: string;

  @OneToOne(() => User, (user) => user.auth)
  @JoinColumn({ name: "user_id" })
  user: User;
}
