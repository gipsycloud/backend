import { Todo } from "../../types/type";
import { ITodoRepository } from "../infrastructure/todo.IRepository";

export class TodoService {
    constructor(private repo: ITodoRepository) {}

    async createTodo(dto: { title: string }): Promise<Todo> {
        const todo = await this.repo.createTodo(dto);
        if (!todo) {
            throw new Error("Failed to create todo");
        }
        return todo;
    }

    async getAllTodos(): Promise<Todo[]> {
        const todos = await this.repo.getAllTodos();
        if (!todos) {
            throw new Error("Failed to retrieve todos");
        }
        return todos;
    }

    async getTodoById(id: number): Promise<Todo | null> {
        const todo = await this.repo.getTodoById(id);
        if (!todo) {
            throw new Error(`Todo with id ${id} not found`);
        }
        return todo;
    }

    async updateTodo(id: number, dto: { title: string }): Promise<Todo> {
        const todo = await this.repo.updateTodo(id, dto);
        if (!todo) {
            throw new Error(`Failed to update todo with id ${id}`);
        }
        return todo;
    }

    async deleteTodo(id: number): Promise<Todo> {
        const todo = await this.repo.deleteTodo(id);
        if (!todo) {
            throw new Error(`Failed to delete todo with id ${id}`);
        }
        return todo;
    }
}