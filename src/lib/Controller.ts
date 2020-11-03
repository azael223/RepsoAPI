import { Response, Request } from "express";
import { Model, Document } from "mongoose";

export class Controller {
  protected Model: any;

  add = async (req: Request, res: Response) => {
    try {
      const newData = new this.Model(req.body);
      await this.Model.create(newData);
      const result = await newData.save();
      return res.json(result);
    } catch (err) {
      return res.json(err);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const deleted = await this.Model.remove(req.body);
      res.json(deleted.deletedCount);
    } catch (err) {
      res.json(err);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const updated = await this.Model.updateOne(
        { _id: req.body["_id"] },
        req.body
      );
      res.json(updated);
    } catch (err) {
      res.json(err);
    }
  };

  find = async (req: Request, res: Response) => {
    try {
      const data = await this.Model.find();
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  };

  findOne = async (req: Request, res: Response) => {
    try {
      const data = await this.Model.find(req.body);
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  };
}
