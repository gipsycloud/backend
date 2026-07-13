import { Request, Response } from "express";
import { TodoService } from "../useCase/todo.service";

export class TodoController {
    constructor(private todoService: TodoService) { }

    createTodo = async (req: Request, res: Response) => {
        const todo = await this.todoService.createTodo(req.body);
        return res.status(201).json(todo);
    }

    getAllTodos = async (req: Request, res: Response) => {
        const todos = await this.todoService.getAllTodos();
        return res.status(200).json(todos);
    }

    getTodoById = async (req: Request, res: Response) => {
        const todo = await this.todoService.getTodoById(Number(req.params.id));
        return res.status(200).json(todo);
    }

    updateTodo = async (req: Request, res: Response) => {
        const todo = await this.todoService.updateTodo(Number(req.params.id), req.body);
        return res.status(200).json(todo);
    }

    deleteTodo = async (req: Request, res: Response) => {
        const todo = await this.todoService.deleteTodo(Number(req.params.id));
        return res.status(200).json(todo);
    }
}