import express from "express";
import { DepartamentController } from "../controllers/departament.controller";

const _departamentCtrl = new DepartamentController();
const DepartamentsRouter = express.Router();

DepartamentsRouter.get("/", _departamentCtrl.find);

DepartamentsRouter.get("/:id", _departamentCtrl.findOne);

DepartamentsRouter.post("/Create", _departamentCtrl.add);

DepartamentsRouter.delete("/Delete", _departamentCtrl.delete);

DepartamentsRouter.post("/Update", _departamentCtrl.update);

export { DepartamentsRouter };
