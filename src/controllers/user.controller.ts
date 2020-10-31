import { UserModel } from "../models/user.model";
import { Controller } from "../lib/Controller";

export class UserController extends Controller {
  Model = UserModel;
}
