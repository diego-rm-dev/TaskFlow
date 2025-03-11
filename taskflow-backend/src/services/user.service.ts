import mongoose from "mongoose";
import { IUser, IUserSimple } from "../interfaces/user.interface.js";
import { CastError, InternalServerError, NotFoundError, ValidateError } from "../middlewares/errors/error.types.js";
import { userModel } from "../models/user.model.js";

export const getUsersService: Function = async (): Promise<IUser[]> => {
    const foundedUsers: IUser[] = await userModel.find();
    if (!foundedUsers || foundedUsers.length == 0) {
        throw new NotFoundError('No hay usuarios!');
    }
    return foundedUsers;
}

export const getUserByIdService: Function = async (id: string): Promise<IUser> => {
    if (!id) {
        throw new ValidateError('Id no enviado!');
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new CastError('Id no válido!');
    }
    const foundedUser: IUser | null = await userModel.findById(id);
    if (!foundedUser) {
        throw new NotFoundError('Usuario no encontrado!');
    }
    return foundedUser;
}

export const saveUserService: Function = async (userData: IUserSimple): Promise<IUserSimple> => {
    if (!userData) {
        throw new ValidateError('Datos no enviados!');
    }
    const savedUser: IUserSimple = await userModel.create(userData);
    if (!savedUser) {
        throw new InternalServerError('Ocurrió un error al intentar guardar el usuario');
    }
    return savedUser;
}

export const updateUserService: Function = async (id: string, userData: IUserSimple): Promise<IUser> => {
    if (!userData || !id) {
        throw new ValidateError('Datos no enviados!');
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new CastError('Id no válido!');
    }
    const updatedUser: IUser | null = await userModel.findByIdAndUpdate(id, userData);
    if (!updatedUser) {
        throw new InternalServerError('Ocurrió un error al intentar guardar el usuario');
    }
    return updatedUser;
}

export const deleteUserService: Function = async (id: string): Promise<IUser> => {
    if (!id) {
        throw new ValidateError('Id no enviado!');
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new CastError('Id no válido!');
    }
    const deletedUser: IUser | null = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
        throw new NotFoundError('Usuario no encontrado!');
    }
    return deletedUser;
}