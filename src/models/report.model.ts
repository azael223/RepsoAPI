import { Schema, model } from "mongoose";

const ReportSchema = new Schema(
  {
    problem_id: { type: String, required: true },
    photo: { type: String, required: true },
    title: { type: String, required: true },
    ubication: { type: String, minlength: 3, maxlength: 29 },
    description: { type: String, maxlength: 500 },
    createdBy: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const ReportModel = model("Reports", ReportSchema);

export { ReportModel };
