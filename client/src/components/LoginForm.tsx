
import { MdClose } from "react-icons/md";

type boolSetter = (value: boolean) => void;


export default function LoginForm({ setFormDisplay }: { setFormDisplay: boolSetter }) {
    return (
        <form className="w-[25vw] h-[60vh] bg-white rounded-lg shadow-lg">
            <button className=""
                onClick={(e) => { e.preventDefault(), setFormDisplay(false) }}
            >
                <MdClose />
            </button>
        </form>
    )
}