import express from "express";
import { UserController } from "../controllers/user.controller";

const _userCtrl = new UserController();
const UsersRouter = express.Router();

UsersRouter.get("/", _userCtrl.find);

UsersRouter.get("/:id", _userCtrl.findOne);

UsersRouter.post("/Create", _userCtrl.add);

UsersRouter.delete("/Delete", _userCtrl.delete);

UsersRouter.post("/Update", _userCtrl.update);

export { UsersRouter };
