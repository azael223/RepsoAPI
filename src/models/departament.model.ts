import { Schema, model } from "mongoose";

const ContactSchema = new Schema({
  phone: [String],
  email: [String],
  others: [String],
});

const DepartamentSchema = new Schema(
  {
    photo: { type: String },
    name: { type: String, required: true },
    description: { type: String },
    contacts: ContactSchema,
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const DepartamentModel = model("Departaments", DepartamentSchema);

export { DepartamentModel };
