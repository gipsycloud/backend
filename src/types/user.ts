export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface CreateUserDto {
    name: string;
    email: string;
    phone: string;
    password: string;
}

export interface UpdateUserDto {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
}
