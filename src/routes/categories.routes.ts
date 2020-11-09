import express from "express";
import { CategoryController } from "../controllers/category.controller";

const _categoryCtrl = new CategoryController();
const CategoriesRouter = express.Router();

CategoriesRouter.get("/", _categoryCtrl.find);

CategoriesRouter.get("/:id", _categoryCtrl.findOne);

CategoriesRouter.post("/Create", _categoryCtrl.add);

CategoriesRouter.delete("/Delete", _categoryCtrl.delete);

CategoriesRouter.post("/Update", _categoryCtrl.update);

export { CategoriesRouter };
