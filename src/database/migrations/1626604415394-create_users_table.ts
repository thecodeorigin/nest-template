import { MigrationInterface, QueryRunner } from "typeorm";

export class createUsersTable1626604415394 implements MigrationInterface {
  name = "createUsersTable1626604415394";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(100) NULL, `password` varchar(100) NOT NULL, `firstname` varchar(50) NOT NULL, `lastname` varchar(50) NOT NULL, UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`",
    );
    await queryRunner.query("DROP TABLE `users`");
  }
}
