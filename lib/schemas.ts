import { z } from "zod";

export const LoginSchema = z.object({
  username: z.coerce.string().trim(),
  password: z.coerce.string(),
});

export const RegisterSchema = z.object({
  email: z.string().trim().email("Use a valid email!"),
  password: z.coerce
    .string()
    .min(6, "Password must have at least 6 characters!")
    .max(50, "Password must have at most 50 characters!"),
  username: z.coerce
    .string()
    .min(3, "Username must have at least 6 characters!")
    .max(50, "Username must have at most 50 characters!"),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;
export type TRegisterSchema = z.infer<typeof RegisterSchema>;
