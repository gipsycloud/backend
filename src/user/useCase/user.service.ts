import { CreateUserDto, UpdateUserDto, User } from "../../types/user";
import { IUserRepository } from "../infrastructure/user.IRepository";

export class UserService {
    constructor(private repo: IUserRepository) {}

    createUser(dto: CreateUserDto): Promise<User> {
        return this.repo.createUser(dto);
    }

    getAllUsers(): Promise<User[]> {
        return this.repo.getAllUsers();
    }

    async getUserById(id: number): Promise<User> {
        const user = await this.repo.getUserById(id);
        if (!user) throw new Error(`User with id ${id} not found`);
        return user;
    }

    updateUser(id: number, dto: UpdateUserDto): Promise<User> {
        return this.repo.updateUser(id, dto);
    }

    deleteUser(id: number): Promise<User> {
        return this.repo.deleteUser(id);
    }
}
