import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  password: z.string().min(4),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});
