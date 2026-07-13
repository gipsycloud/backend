import { Todo } from "../../types/type";

export interface ITodoRepository { 
    createTodo(dto: { title: string }): Promise<Todo>;
    getAllTodos(): Promise<Todo[]>;
    getTodoById(id: number): Promise<Todo | null>;
    updateTodo(id: number, dto: { title: string }): Promise<Todo>;
    deleteTodo(id: number): Promise<Todo>;
}