import express from "express";
import { ProblemController } from "../controllers/problem.controller";

const _problemCtrl = new ProblemController();
const ProblemsRouter = express.Router();

ProblemsRouter.get("/", _problemCtrl.find);

ProblemsRouter.get("/:id", _problemCtrl.findOne);

ProblemsRouter.post("/CreateProblem", _problemCtrl.add);

ProblemsRouter.delete("/DeleteProblem", _problemCtrl.delete);

ProblemsRouter.post("/UpdateProblem", _problemCtrl.update);

export { ProblemsRouter };
