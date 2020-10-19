import { UserModel } from "../models/user.model";
import { Response, Request } from "express";
import {} from "mongoose";

export class UserController {
  getUsers = (res: Response, req: Request) => {
    const users = UserModel.find();
    res.json(users);
  };

  getUser = (res: Response, req: Request) => {};

  createUser = (res: Response, req: Request) => {};

  deleteUser = (res: Response, req: Request) => {};

  updateUser = (res: Response, req: Request) => {};
}
