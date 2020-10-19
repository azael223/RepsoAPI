import { Schema, model } from "mongoose";
const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const CategoryModel = model("Categories", CategorySchema);

export { CategoryModel };
