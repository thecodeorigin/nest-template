import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { FilterUserDTO } from "./dto/filter-many";

@Injectable()
export class UserService {
  users = [
    { id: 1, name: "Nguyen Quang Tu", age: "24", job: "Backend developer" },
    { id: 2, name: "John Marston", age: "45", job: "Frontend developer" },
    { id: 3, name: "Arthur Morgan", age: "50", job: "Full-stack developer" },
  ];

  findMany(param: FilterUserDTO) {
    if (param.name) {
      return this.users.filter((user) => {
        user.name.toLowerCase().includes(param.name.toLowerCase());
      });
    }
    return this.users;
  }

  findOne(id: number) {
    const matchUsers = this.users.filter((user) => user.id === id);
    if (matchUsers.length === 0) {
      throw new HttpException("Users not found", HttpStatus.NOT_FOUND);
    }
    return matchUsers[0];
  }
}
