
import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod"

export type loginFormData = {
    username: string;
    password: string;
};

export type loginFormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<loginFormData>;
    error: FieldError | undefined;
    className: string
};

export type ValidFieldNames = "username" | "password";




 export const loginFormSchema: ZodType<loginFormData> = z
  .object({
    username: z.string(),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
  })
