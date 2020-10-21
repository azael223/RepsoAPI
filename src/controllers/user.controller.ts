import { UserModel } from "../models/user.model";
import { Response, Request } from "express";
import {} from "mongoose";

export class UserController {
  getUsers = async (req: Request, res: Response) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (err) {
      res.json(err);
    }
  };

  getUser = async (req: Request, res: Response) => {
    try {
      const user = await UserModel.find(req.body);
      res.json(user);
    } catch (err) {
      res.json(err);
    }
  };

  createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      console.log(req.body);
      const newUser = new UserModel(req.body);
      await UserModel.create(newUser);
      const result = await newUser.save();
      return res.json(result);
    } catch (err) {
      return res.json(err);
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const deleted = await UserModel.remove(req.body);
      res.json(deleted.deletedCount);
    } catch (err) {
      res.json(err);
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      const updated = await UserModel.updateOne({_id:req.body["_id"]},req.body)
      res.json(updated)
    } catch (err) {
      res.json(err);
    }
  };
}
