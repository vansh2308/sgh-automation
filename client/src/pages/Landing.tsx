
import { useState } from "react"
import heroCarnival from "../assets/hero-carnival.png"
import heroLantern from "../assets/hero-lantern.png"
import heroLeft from "../assets/hero-left.png"
import heroRight from "../assets/hero-right.png"
import heroShadow from "../assets/hero-shadow.png"
import LoginForm from "../components/LoginForm"



export default function Landing() {
    const [formDisplay, setFormDisplay] = useState(false)


    return (
        <div className="w-screen h-screen relative overflow-hidden">
            <div 
            className={`absolute top-[18vh] left-1/2 -translate-x-1/2 flex flex-col gap-5 text-blue-3 text-center items-center 
            ${formDisplay && "opacity-0"}`}
            >
                <h1
                    className="text-[3.5rem] font-medium"
                    style={{ "fontFamily": "Gowun Batang" }}>
                    Shri Ganpati Handicrafts
                </h1>
                <p className="font-light text-[1rem]"> Workflow Management System </p>
                <button className="bg-pink rounded-full py-3 px-10 text-white w-fit mt-7 text-sm hover:bg-pink/80 z-30"
                    onClick={ () => setFormDisplay(true) }
                >
                    Sign In
                </button>
            </div>

            <img src={heroCarnival} className={`absolute left-0 top-0 select-none w-[30%] ${formDisplay && "top-[-100%]"}`} />
            <img src={heroLantern} className="absolute right-0 top-0 select-none w-[9%] " />
            <img src={heroLeft} className={`absolute left-0 bottom-0 select-none w-[50%] z-20 ${formDisplay && "left-[-100%]"}`} />
            <img src={heroRight} className="absolute right-0 bottom-0 select-none w-[45%] z-20" />
            <img src={heroShadow} className="absolute bottom-0 select-none w-[100%] -z-20" />

            <div className="bg-blue-2 w-screen absolute h-[15vh] bottom-0" />

            {
                formDisplay &&
                <div className="h-fit w-fit absolute top-1/2 -translate-y-1/2 left-[20vw] z-30">
                    <LoginForm setFormDisplay={setFormDisplay} />
                </div>
            }

        </div>
    )
}