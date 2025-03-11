import { Roles } from "./enums/role.enum.js";

export interface IUser {
    _id: string,
    name: string,
    lastname: string,
    email: string,
    role: Roles,
    password: string,
    age: number,
    __v: number,
}

export interface IUserSimple {
    name: string,
    lastname: string,
    email: string,
    role: Roles,
    password: string,
    age: number,
}