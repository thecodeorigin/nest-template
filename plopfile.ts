import GenerateModule from "@core/commands/generate-module";
import GenerateUser from "@core/commands/generate-user";
import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  GenerateModule(plop);
  GenerateUser(plop);
}
