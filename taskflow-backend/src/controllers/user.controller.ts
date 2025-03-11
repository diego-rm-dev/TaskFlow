import { NextFunction, Request, Response } from "express";
import { deleteUserService, getUserByIdService, getUsersService, saveUserService, updateUserService } from "../services/user.service.js";
import { IUser, IUserSimple } from "../interfaces/user.interface.js";

export const getUsersController: Function = async (req: Request, res: Response, next: NextFunction): Promise<IUser[] | undefined> => {
    try {
        return getUsersService();
    } catch (error: any) {
        next(error);
    }
}

export const getUserByIdController: Function = async (req: Request, res: Response, next: NextFunction): Promise<IUser | undefined> => {
    try {
        return getUserByIdService(req.params.id);
    } catch (error: any) {
        next(error);
    }
}


export const saveUserController: Function = async (req: Request, res: Response, next: NextFunction): Promise<IUserSimple | undefined> => {
    try {
        return saveUserService(req.body);
    } catch (error: any) {
        next(error);
    }
}

export const updateUserController: Function = async (req: Request, res: Response, next: NextFunction): Promise<IUser | undefined> => {
    try {
        return updateUserService(req.params.id, req.params.id);
    } catch (error: any) {
        next(error);
    }
}

export const deleteUserController: Function = async (req: Request, res: Response, next: NextFunction): Promise<IUser | undefined> => {
    try {
        return deleteUserService(req.params.id);
    } catch (error: any) {
        next(error);
    }
}


