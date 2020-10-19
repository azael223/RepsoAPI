import express from "express";
import { UserController } from "../controllers/user.controller";

const _userCtrl = new UserController();
const UsersRouter = express.Router();

UsersRouter.get("/", _userCtrl.getUsers);

UsersRouter.get("/:id", _userCtrl.getUser);

UsersRouter.post("/CreateUser", _userCtrl.createUser);

UsersRouter.delete("/DeleteUser/:id", _userCtrl.deleteUser);

UsersRouter.post("/UpdateUser/:id", _userCtrl.updateUser);

export { UsersRouter };
