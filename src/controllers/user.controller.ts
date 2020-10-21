import { UserModel } from "../models/user.model";
import { Response, Request } from "express";
import {} from "mongoose";

export class UserController {
  getUsers = async (res: Response, req: Request) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (err) {
      res.json(err);
    }
  };

  getUser = async (res: Response, req: Request) => {
    try {
      const user = await UserModel.find(req.body);
      res.json(user);
    } catch (err) {
      res.json(err);
    }
  };

  createUser = async (res: Response, req: Request):Promise<Response>  => {
    try {
      const newUser = new UserModel(req.body);
      await UserModel.create(newUser);
      const result = await newUser.save()
      return res.json(result);
    } catch (err) {
      return res.json(err);
    }
  };

  deleteUser = async (res: Response, req: Request) => {
    const deleted = await UserModel.remove(req.body);
    res.json(deleted.deletedCount);
  };

  updateUser = (res: Response, req: Request) => {};
}
