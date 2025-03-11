import { NextFunction, Request, Response, Router } from "express";
import { deleteUserController, getUserByIdController, getUsersController, saveUserController, updateUserController } from "../controllers/user.controller.js";
const userRouter: Router = Router();

userRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    await getUsersController(req, res, next);
});
userRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    await getUserByIdController(req, res, next);
});
userRouter.post('/create', async (req: Request, res: Response, next: NextFunction) => {
    await saveUserController(req, res, next);
});
userRouter.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    await updateUserController(req, res, next);
});
userRouter.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    await deleteUserController(req, res, next);
});