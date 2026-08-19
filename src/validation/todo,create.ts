import { z } from "zod"

export const todoCreateSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
})

export const todoUpdateSchema = todoCreateSchema
    .partial()
    .extend({
        completed: z.boolean().optional(),
    })
    .refine((data) => Object.keys(data).length > 0, {
        message: "At least one field must be provided",
    })

export type TodoCreateDto = z.infer<typeof todoCreateSchema>
export type TodoUpdateDto = z.infer<typeof todoUpdateSchema>