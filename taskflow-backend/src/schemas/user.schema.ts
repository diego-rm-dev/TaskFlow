import { Schema } from "mongoose";
import { Roles } from "../interfaces/enums/role.enum.js";

export const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    roles: { type: Roles, required: true },
    password: { type: String, required: true },
    age: { type: Number }
})