// src/domains/user/services/userService.ts
import { UserEntity } from "../models/userEntity";
import { CreateUserDto } from "../dto/createUserDto";

export class UserService {
  private users: Map<string, UserEntity> = new Map();

  public async getUser(id: string): Promise<UserEntity | undefined> {
    return this.users.get(id);
  }

  public async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const newUser = new UserEntity(
      Date.now().toString(), // 임시 ID 생성 로직
      createUserDto.name,
      createUserDto.email,
      createUserDto.password
    );
    this.users.set(newUser.id, newUser);
    return newUser;
  }
}
