import { Users } from "@app/user/index.entity";
import { define } from "typeorm-seeding";
import Faker from "faker";
import { RDS_SEED_USER_DEFAULT_PASSWORD } from "@core/environments/env";

define(Users, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);

  const user = new Users();
  user.email = faker.internet.email(firstName, lastName);
  user.password = RDS_SEED_USER_DEFAULT_PASSWORD;
  user.firstname = firstName;
  user.lastname = lastName;
  return user;
});
