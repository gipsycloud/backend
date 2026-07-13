import express from "express";
import { prisma } from "../database/prisma";
import { validation } from "../middleware/validationMiddleware";
import { todoCreateSchema } from "../validation/todo,create";
import { TodoController } from "./controller/todo.controller";
import { TodoRepository } from "./infrastructure/todo.repostory";
import { TodoService } from "./useCase/todo.service";

const todoRepo = new TodoRepository(prisma);
const todoService = new TodoService(todoRepo);
const todoController = new TodoController(todoService);

const todoRouter = express.Router();

todoRouter.post("/create", validation(todoCreateSchema), todoController.createTodo )
todoRouter.get("/", todoController.getAllTodos)
todoRouter.get("/:id", todoController.getTodoById)
todoRouter.put("/:id", validation(todoCreateSchema), todoController.updateTodo)
todoRouter.delete("/:id", todoController.deleteTodo)

export default todoRouter;