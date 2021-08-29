import { User } from "@app/user/index.entity";
import { define } from "typeorm-seeding";
import Faker from "faker";

define(User, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);

  const user = new User();
  user.email = faker.internet.email(firstName, lastName);
  user.password = "123456";
  user.firstname = firstName;
  user.lastname = lastName;
  return user;
});
