import { PrismaClient } from "../../generated/prisma/client";
import { Todo } from "../../types/type";
import { ITodoRepository } from "./todo.IRepository";

export class TodoRepository implements ITodoRepository {
    constructor(private prisma: PrismaClient ) {}

    async createTodo(dto: { title: string }): Promise<Todo> {
        const result = await this.prisma.todo.create({
            data: {
                title: dto.title,
            }
        })
        return result
    }

    async getAllTodos(): Promise<Todo[]> {
        return this.prisma.todo.findMany();
    }

    async getTodoById(id: number): Promise<Todo | null> {
        return this.prisma.todo.findUnique({
            where: {
                id: id,
            }
        })
    }

    async updateTodo(id: number, dto: { title: string }): Promise<Todo> {
        const result = await this.prisma.todo.update({
            where: {
                id: id,
            },
            data: {
                title: dto.title,
            }
        })
        return result
    }

    async deleteTodo(id: number): Promise<Todo> {
        const result = await this.prisma.todo.delete({
            where: {
                id: id,
            }
        })
        return result
    }
}