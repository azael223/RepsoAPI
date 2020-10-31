import express from "express";
import { CategoryController } from "../controllers/category.controller";

const _categoryCtrl = new CategoryController();
const CategoriesRouter = express.Router();

CategoriesRouter.get("/", _categoryCtrl.find);

CategoriesRouter.get("/:id", _categoryCtrl.findOne);

CategoriesRouter.post("/CreateCategory", _categoryCtrl.add);

CategoriesRouter.delete("/DeleteCategory", _categoryCtrl.delete);

CategoriesRouter.post("/UpdateCategory", _categoryCtrl.update);

export { CategoriesRouter };
