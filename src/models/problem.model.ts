import { Schema, model } from "mongoose";

const ProblemSchema = new Schema(
  {
    name: { type: String, required: true },
    category_id: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const ProblemModel = model("Problems", ProblemSchema);

export { ProblemModel };
