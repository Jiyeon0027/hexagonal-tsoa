// src/domains/user/controllers/userController.ts
import { Controller, Get, Post, Route, Tags, Body, Path } from "tsoa";
import { UserService } from "../services/userService";
import { UserEntity } from "../models/userEntity";
import { CreateUserDto } from "../dto/createUserDto";

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */
@Route("users")
@Tags("User")
export class UserController extends Controller {
  private userService = new UserService();

  @Get("{id}")
  public async getUser(
    @Path("id") id: string
  ): Promise<UserEntity | undefined> {
    return this.userService.getUser(id);
  }

  @Post()
  public async createUser(
    @Body() createUserDto: CreateUserDto
  ): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }
}
