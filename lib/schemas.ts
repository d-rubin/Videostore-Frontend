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

export const UploadSchema = z.object({
  file: z.unknown(),
  title: z
    .string()
    .min(3, "Title must have at least 3 characters!")
    .max(50, "Title must have at most 50 characters!"),
  description: z
    .string()
    .min(3, "Description must have at least 3 characters!")
    .max(150, "Description must have at most 150 characters!"),
});

export type TUploadSchema = z.infer<typeof UploadSchema>;
export type TLoginSchema = z.infer<typeof LoginSchema>;
export type TRegisterSchema = z.infer<typeof RegisterSchema>;
