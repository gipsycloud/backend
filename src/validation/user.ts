import { z } from "zod";

export const userCreateSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().trim().email("A valid email is required"),
    phone: z.string().trim().min(1, "Phone is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

export const userUpdateSchema = userCreateSchema.partial().refine(
    (data) => Object.keys(data).length > 0,
    { message: "At least one field must be provided" },
);
