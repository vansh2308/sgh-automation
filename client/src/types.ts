
import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod"


// Login Form Types 

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




// Regsiter Form Types 

export type registerFormData = {
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
    dateJoined: string;
    gender: 'male' | 'female';
    role: "admin" | "supervisor" | "manufacturing" | "repair" | "polish" | "check" | "shipping" | "packaging"
};

export type registerFormFieldProps = {
    type: string;
    name: registerFormValidFieldNames;
    register: UseFormRegister<registerFormData>;
    error: FieldError | undefined;
    placeholder: string;
    className: string
};


export type registerFormValidFieldNames = "name" | "username" | "password" | "confirmPassword" | "dateJoined" | "gender" | "role";



export const registerFormSchema: ZodType<registerFormData> = z
    .object({
        name: z.string(),
        username: z.string(),
        password: z
            .string()
            .min(4, { message: "Password is too short" })
            .max(20, { message: "Password is too long" }),
        confirmPassword: z.string(),
        dateJoined: z.string().date(),
        gender: z.enum(["male", "female"]),
        role: z.enum(["admin", "supervisor", "manufacturing", "repair", "polish", "check", "shipping", "packaging"])

    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"], // path of error
    });



