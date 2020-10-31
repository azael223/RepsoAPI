import express from "express";
import { CategoriesRouter } from "./categories.routes";
import { UsersRouter } from "./users.routes";
import { DepartamentsRouter } from "./departaments.routes";
import { ProblemsRouter } from "./problems.routes";
import { ReportsRouter } from "./reports.routes";

const Router = express.Router();

Router.use("/Users", UsersRouter);
Router.use("/Categories", CategoriesRouter);
Router.use("/Departamets", DepartamentsRouter);
Router.use("/Problems", ProblemsRouter);
Router.use("/Reports", ReportsRouter);

export { Router };
