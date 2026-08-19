import { CreateUserDto, UpdateUserDto, User } from "../../types/user";

export interface IUserRepository {
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User | null>;
    updateUser(id: number, dto: UpdateUserDto): Promise<User>;
    deleteUser(id: number): Promise<User>;
}
