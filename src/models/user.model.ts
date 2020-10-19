import { Schema, model } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    photo: { type: String },
    name: { type: String, required: true, minlength: 2, maxlength: 100 },
    region: { type: String, required: true },
    address: { type: String, minlength: 2, maxlength: 100 },
    password: { type: String, minlength: 8, required: true },
    phone: { type: String, minlength: 10, maxlength: 10, unique: true },
    email: { type: String, maxlength: 320, required: true, unique: true },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);
const UserModel = model("Users", UserSchema);

export { UserModel };
