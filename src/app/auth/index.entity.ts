import { User } from "@app/user/index.entity";
import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("auth_identities")
export class AuthIdentity {
  @ApiProperty({ readOnly: true })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({
    length: 500,
    type: "varchar",
    nullable: true,
    name: "refresh_token",
  })
  refreshToken: string;

  @ApiProperty()
  @Column({
    length: 500,
    type: "varchar",
    nullable: true,
    name: "email_verification_token",
  })
  emailVerificationToken: string;

  @ApiProperty()
  @Column({
    type: "datetime",
    nullable: true,
    name: "email_verification_valid_until",
  })
  emailVerificationValidUntil: string;

  @ApiProperty()
  @Column({
    length: 500,
    type: "varchar",
    nullable: true,
  })
  passwordResetToken: string;

  @ApiProperty()
  @Column({
    type: "datetime",
    nullable: true,
    name: "password_reset_valid_until",
  })
  passwordResetValidUntil: string;

  @ApiProperty()
  @OneToOne(() => User, (user) => user.auth)
  @JoinColumn({ name: "user_id" })
  user: User;
}
