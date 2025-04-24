import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email().nonempty("Email is required"),
  password: z.string().min(8).nonempty("Password is required"),
});

export type SignInSchema = z.infer<typeof signInSchema>;
