import { NodePlopAPI } from "plop";

/**
 * Generate api module for project, use "yarn command generate-module" to run it directly
 */
export default function GenerateModule(plop: NodePlopAPI) {
  plop.setGenerator("generate-module", {
    description: "Module generation",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Please input your module name",
        validate: (input) => {
          const isEmptyResponse = Boolean(input && input.length !== 0);
          if (!isEmptyResponse) return "Name cannot be empty";
          if (/\s/g.test(input)) return "Name cannot contain whitespaces";
          if (!/^[a-zA-Z]+$/.test(input))
            return "Name should contain only english words or number";
          return true;
        },
      },
    ],
    actions: [
      "Creating meatball...Please wait" as any,
      {
        type: "add",
        path: "src/app/{{lowerCase name}}/dto/create-one.ts",
        templateFile: "src/core/templates/create-one.txt",
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/app/{{lowerCase name}}/dto/update-one.ts",
        templateFile: "src/core/templates/update-one.txt",
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/app/{{lowerCase name}}/index.controller.ts",
        templateFile: "src/core/templates/index.controller.txt",
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/app/{{lowerCase name}}/index.entity.ts",
        templateFile: "src/core/templates/index.entity.txt",
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/app/{{lowerCase name}}/index.service.ts",
        templateFile: "src/core/templates/index.service.txt",
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/app/{{lowerCase name}}/index.repository.ts",
        templateFile: "src/core/templates/index.repository.txt",
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/app/{{lowerCase name}}/index.module.ts",
        templateFile: "src/core/templates/index.module.txt",
        abortOnFail: true,
        skipIfExists: true,
      },
      "The meatball of a crazy Sweedish man has been created...along with your module.",
    ],
  });
}
