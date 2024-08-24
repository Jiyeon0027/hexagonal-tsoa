// src/domains/user/services/userService.ts
import { User } from "../models/userModel";

export class UserService {
  private users: Map<string, User> = new Map();

  public async getUser(id: string): Promise<User | any> {
    return this.users.get(id) || null;
  }

  public async createUser(user: User): Promise<User> {
    this.users.set(user.id, user);
    return user;
  }
}
