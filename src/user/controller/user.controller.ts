import { Request, Response } from "express";
import { UserService } from "../useCase/user.service";

export class UserController {
    constructor(private userService: UserService) {}

    createUser = async (req: Request, res: Response) =>
        res.status(201).json(await this.userService.createUser(req.body));

    getAllUsers = async (_req: Request, res: Response) =>
        res.status(200).json(await this.userService.getAllUsers());

    getUserById = async (req: Request, res: Response) =>
        res.status(200).json(await this.userService.getUserById(Number(req.params.id)));

    updateUser = async (req: Request, res: Response) =>
        res.status(200).json(await this.userService.updateUser(Number(req.params.id), req.body));

    deleteUser = async (req: Request, res: Response) =>
        res.status(200).json(await this.userService.deleteUser(Number(req.params.id)));
}
