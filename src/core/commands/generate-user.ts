import { AuthIdentity } from "@app/auth/index.entity";
import { Role } from "@app/role/index.entity";
import { User } from "@app/user/index.entity";
import typeOrmConfig from "@config/typeorm";
import { ProjectLogger } from "@core/utils/loggers/log-service";
import { NodePlopAPI } from "plop";
import { Connection, createConnection, In } from "typeorm";

/**
 * Generate api module for project, use "yarn command generate-user" to run it directly
 */
export default function GenerateUser(plop: NodePlopAPI) {
  const createUser =
    () =>
    async (data: any): Promise<any> => {
      let connection: Connection = null;
      try {
        connection = await createConnection(typeOrmConfig as any);
        const userRepository = connection.getRepository(User);
        const roleRepository = connection.getRepository(Role);
        const roles = await roleRepository.find({
          where: {
            label: In(data.roles),
          },
        });
        const user = new User();
        const auth = new AuthIdentity();
        user.firstname = data.firstname;
        user.lastname = data.lastname;
        user.email = data.email;
        user.password = data.password;
        user.roles = roles;
        user.status = 1;
        user.auth = auth;
        await userRepository.save(user);

        await connection.close();
        return `User ${data.firstname} ${data.lastname} added successfully. Did it....?`;
      } catch (error) {
        if (connection) {
          connection.close();
        }
        if (error.code == "ER_DUP_ENTRY") {
          throw Error(
            "This user has already existed. Please create another one with different credential.",
          );
        } else {
          ProjectLogger.exception(error.stack);
          throw Error("An unknown error has occurred. Please check again.");
        }
      }
    };

  plop.setGenerator("generate-user", {
    description: "Generate a user for your system",
    prompts: [
      {
        type: "input",
        name: "firstname",
        message: "Please input firstname",
        validate: (input) => {
          const isEmptyResponse = Boolean(input && input.length !== 0);
          if (!isEmptyResponse) return "Firstname cannot be empty";
          if (input.length < 1)
            return "Firstname cannot be shorter than 1 characters";
          if (input.length > 100)
            return "Firstname cannot be longer than 100 characters";
          if (!/^[a-zA-Z ]+$/.test(input))
            return "Firstname should contain only english words";
          return true;
        },
      },
      {
        type: "input",
        name: "lastname",
        message: "Please input lastname",
        validate: (input) => {
          const isEmptyResponse = Boolean(input && input.length !== 0);
          if (!isEmptyResponse) return "Firstname cannot be empty";
          if (input.length < 5)
            return "Lastname cannot be shorter than 5 characters";
          if (input.length > 100)
            return "Firstname cannot be longer than 100 characters";
          if (!/^[a-zA-Z ]+$/.test(input))
            return "Firstname should contain only english words";
          return true;
        },
      },
      {
        type: "password",
        name: "password",
        message: "Please input password",
        mask: "*",
        validate: (input) => {
          const isEmptyResponse = Boolean(input && input.length !== 0);
          if (!isEmptyResponse) return "Password cannot be empty";
          if (input.length < 5)
            return "Password cannot be shorter than 5 characters";
          if (input.length > 100)
            return "Password cannot be longer than 100 characters";
          if (!/^[A-Za-z0-9]+$/.test(input))
            return "Password should contain only english words and numbers";
          return true;
        },
      },
      {
        type: "email",
        name: "email",
        message: "Please input email",
        validate: (input) => {
          const isEmptyResponse = Boolean(input && input.length !== 0);
          if (!isEmptyResponse) return "Email cannot be empty";
          if (input.length < 5)
            return "Email cannot be shorter than 5 characters";
          if (input.length > 100)
            return "Email cannot be longer than 100 characters";
          if (
            !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              input,
            )
          )
            return "Email should be in correct format";
          return true;
        },
      },
      {
        type: "checkbox",
        name: "roles",
        message: "Please choose user roles",
        choices: ["SUPERADMIN", "MODERATOR", "COLLABORATOR", "USER"],
      },
    ],
    actions: [createUser()],
  });
}
