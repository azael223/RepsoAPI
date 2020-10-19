import express from "express";
import { UsersRouter } from "./users.routes";

const Router = express.Router();

Router.use(UsersRouter);

export { Router };
