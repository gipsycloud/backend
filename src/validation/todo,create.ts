import { z } from "zod"

export const todoCreateSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
})

export type TodoCreateDto = z.infer<typeof todoCreateSchema>