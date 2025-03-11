import mongoose from "mongoose";
import { IUserSimple } from "../interfaces/user.interface.js";
import { userSchema } from "../schemas/user.schema.js";

export const userModel = mongoose.model<IUserSimple>('User', userSchema);