import { MigrationInterface, QueryRunner } from "typeorm";

export class init1629726662036 implements MigrationInterface {
  name = "init1629726662036";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `roles` (`id` int NOT NULL AUTO_INCREMENT, `num` smallint NOT NULL, `label` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      "CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(100) NOT NULL, `password` varchar(100) NOT NULL, `firstname` varchar(50) NOT NULL, `lastname` varchar(50) NOT NULL, `status` tinyint NOT NULL DEFAULT '0', UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      "CREATE TABLE `auth_identities` (`id` int NOT NULL AUTO_INCREMENT, `refresh_token` varchar(500) NULL, `email_verification_token` varchar(500) NULL, `email_verification_valid_until` datetime NULL, `password_reset_token` varchar(500) NULL, `password_reset_valid_until` datetime NULL, `user_id` int NULL, UNIQUE INDEX `REL_c06a980d83c42611d27a294e55` (`user_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      "CREATE TABLE `users_roles` (`user_id` int NOT NULL, `role_id` int NOT NULL, INDEX `IDX_e4435209df12bc1f001e536017` (`user_id`), INDEX `IDX_1cf664021f00b9cc1ff95e17de` (`role_id`), PRIMARY KEY (`user_id`, `role_id`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      "ALTER TABLE `auth_identities` ADD CONSTRAINT `FK_c06a980d83c42611d27a294e55c` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
    );
    await queryRunner.query(
      "ALTER TABLE `users_roles` ADD CONSTRAINT `FK_e4435209df12bc1f001e5360174` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE",
    );
    await queryRunner.query(
      "ALTER TABLE `users_roles` ADD CONSTRAINT `FK_1cf664021f00b9cc1ff95e17de4` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `users_roles` DROP FOREIGN KEY `FK_1cf664021f00b9cc1ff95e17de4`",
    );
    await queryRunner.query(
      "ALTER TABLE `users_roles` DROP FOREIGN KEY `FK_e4435209df12bc1f001e5360174`",
    );
    await queryRunner.query(
      "ALTER TABLE `auth_identities` DROP FOREIGN KEY `FK_c06a980d83c42611d27a294e55c`",
    );
    await queryRunner.query(
      "DROP INDEX `IDX_1cf664021f00b9cc1ff95e17de` ON `users_roles`",
    );
    await queryRunner.query(
      "DROP INDEX `IDX_e4435209df12bc1f001e536017` ON `users_roles`",
    );
    await queryRunner.query("DROP TABLE `users_roles`");
    await queryRunner.query(
      "DROP INDEX `REL_c06a980d83c42611d27a294e55` ON `auth_identities`",
    );
    await queryRunner.query("DROP TABLE `auth_identities`");
    await queryRunner.query(
      "DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`",
    );
    await queryRunner.query("DROP TABLE `users`");
    await queryRunner.query("DROP TABLE `roles`");
  }
}
