import express from "express";
import { ReportController } from "../controllers/report.controller";

const _reportCtrl = new ReportController();
const ReportsRouter = express.Router();

ReportsRouter.get("/", _reportCtrl.find);

ReportsRouter.get("/:id", _reportCtrl.findOne);

ReportsRouter.post("/Create", _reportCtrl.add);

ReportsRouter.delete("/Delete", _reportCtrl.delete);

ReportsRouter.post("/Update", _reportCtrl.update);

export { ReportsRouter };
