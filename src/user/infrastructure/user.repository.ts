import { randomBytes, scryptSync } from "node:crypto";
import { PrismaClient } from "../../generated/prisma/client";
import { CreateUserDto, UpdateUserDto, User } from "../../types/user";
import { IUserRepository } from "./user.IRepository";

const publicUser = { id: true, name: true, email: true, phone: true } as const;

const hashPassword = (password: string) => {
    const salt = randomBytes(16).toString("hex");
    const hash = scryptSync(password, salt, 64).toString("hex");
    return `${salt}:${hash}`;
};

export class UserRepository implements IUserRepository {
    constructor(private prisma: PrismaClient) {}

    createUser(dto: CreateUserDto): Promise<User> {
        return this.prisma.user.create({
            data: { ...dto, password: hashPassword(dto.password) },
            select: publicUser,
        });
    }

    getAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany({ select: publicUser });
    }

    getUserById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id }, select: publicUser });
    }

    updateUser(id: number, dto: UpdateUserDto): Promise<User> {
        const { password, ...fields } = dto;
        return this.prisma.user.update({
            where: { id },
            data: { ...fields, ...(password ? { password: hashPassword(password) } : {}) },
            select: publicUser,
        });
    }

    deleteUser(id: number): Promise<User> {
        return this.prisma.user.delete({ where: { id }, select: publicUser });
    }
}
