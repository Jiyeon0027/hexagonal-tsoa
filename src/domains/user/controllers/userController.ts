// src/domains/user/controllers/userController.ts
import { Controller, Get, Post, Route, Tags, Body, Path } from "tsoa";
import { UserService } from "../services/userService";
import { User } from "../models/userModel";

@Route("users")
@Tags("User")
export class UserController extends Controller {
  private userService = new UserService();

  @Get("{id}")
  public async getUser(@Path("id") id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @Post()
  public async createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }
}
