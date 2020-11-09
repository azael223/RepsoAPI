import express from "express";
import { ProblemController } from "../controllers/problem.controller";

const _problemCtrl = new ProblemController();
const ProblemsRouter = express.Router();

ProblemsRouter.get("/", _problemCtrl.find);

ProblemsRouter.get("/:id", _problemCtrl.findOne);

ProblemsRouter.post("/Create", _problemCtrl.add);

ProblemsRouter.delete("/Delete", _problemCtrl.delete);

ProblemsRouter.post("/Update", _problemCtrl.update);

export { ProblemsRouter };
