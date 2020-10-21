import express from "express";
import { UsersRouter } from "./users.routes";

const Router = express.Router();

Router.use('/Users',UsersRouter);

export { Router };
