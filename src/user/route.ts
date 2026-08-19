import express from "express";
import { prisma } from "../database/prisma";
import { validation } from "../middleware/validationMiddleware";
import { userCreateSchema, userUpdateSchema } from "../validation/user";
import { UserController } from "./controller/user.controller";
import { UserRepository } from "./infrastructure/user.repository";
import { UserService } from "./useCase/user.service";

const userController = new UserController(new UserService(new UserRepository(prisma)));
const userRouter = express.Router();

userRouter.post("/", validation(userCreateSchema), userController.createUser);
userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.put("/:id", validation(userUpdateSchema), userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
