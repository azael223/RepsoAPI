import express from "express";
import { UserController } from "../controllers/user.controller";

const _userCtrl = new UserController();
const UsersRouter = express.Router();

UsersRouter.get("/", _userCtrl.find);

UsersRouter.get("/:id", _userCtrl.findOne);

UsersRouter.post("/CreateUser", _userCtrl.add);

UsersRouter.delete("/DeleteUser", _userCtrl.delete);

UsersRouter.post("/UpdateUser", _userCtrl.update);

export { UsersRouter };
