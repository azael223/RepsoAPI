import express from "express";
import { DepartamentController } from "../controllers/departament.controller";

const _departamentCtrl = new DepartamentController();
const DepartamentsRouter = express.Router();

DepartamentsRouter.get("/", _departamentCtrl.find);

DepartamentsRouter.get("/:id", _departamentCtrl.findOne);

DepartamentsRouter.post("/CreateDepartament", _departamentCtrl.add);

DepartamentsRouter.delete("/DeleteDepartament", _departamentCtrl.delete);

DepartamentsRouter.post("/UpdateDepartament", _departamentCtrl.update);

export { DepartamentsRouter };
