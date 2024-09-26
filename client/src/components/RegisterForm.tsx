import { useForm } from "react-hook-form";
import { loginFormData, loginFormSchema } from "../types";
import { MdClose } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./FormField";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideLoginForm } from "../features/loginFormDisplaySlice";


// type boolSetter = (value: boolean) => void; 


export default function RegisterForm({}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<loginFormData>({
        resolver: zodResolver(loginFormSchema)
    });

    const dispatch = useDispatch();
    

    const onSubmit = async (data: loginFormData) => {
        console.log("SUCCESS")
    }


    return (
        <form
            className="w-[25vw] h-[60vh] bg-white rounded-xl shadow-lg relative flex flex-col items-center p-10 py-20 font-light text-sm"

            onSubmit={handleSubmit(onSubmit)}
        >
            <Link className="absolute right-7 top-7 text-[1.5rem]"
                onClick={(e) => { dispatch(hideLoginForm()) }}
                to={"/"}
            >
                <MdClose />
            </Link>

            <FormField
                type="string"
                placeholder="Username"
                name="username"
                register={register}
                error={errors.username}
                className="w-full p-2 border-b focus:outline-none focus:border-b-2 focus:border-b-slate-500"
            />

            <FormField
                type="password"
                placeholder="Password"
                name="password"
                register={register}
                error={errors.password}
                className="w-full mt-5 p-2 border-b focus:outline-none focus:border-b-2 focus:border-b-slate-500"

            />

            <span className="text-[0.7rem] font-medium text-pink underline mt-9 cursor-pointer w-full"> Not registered? Create an account </span>

            <button className="pink-btn absolute bottom-10" > Sign In </button>
        </form>
    )
}