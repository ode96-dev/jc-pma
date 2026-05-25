import z from "zod";

export const loginSchema = z.object({
    email: z.email("Invalid email address").trim().min(1, "Email is required"),
    password: z
        .string()
        .min(1, "Password must be at least 8 characters")
        .max(256, "Password is too long"),
});

export const registerSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.email("Invalid email address").trim().min(1, "Email is required"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(256, "Password is too long"),
});