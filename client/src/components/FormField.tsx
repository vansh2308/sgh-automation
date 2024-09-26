

import { loginFormFieldProps } from "../types";

const FormField: React.FC<loginFormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  className
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={className}
    />
    {error && <span 
    className="text-red-600 text-[0.6rem] font-medium mt-1 w-full">
      {error.message}
    </span>}
  </>
);
export default FormField;