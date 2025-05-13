//sample schema for account related operations

import z from "zod";

export const SignUpSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(1, { message: "Enter your password." }),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;

export const ResetPasswordSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Both passwords don't match.",
    path: ["confirmPassword"],
  });

export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;
