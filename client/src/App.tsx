import { Outlet } from "react-router-dom";


export default function App(){
  return(
    <div className="w-screen h-screen overflow-hidden">
      <Outlet />

    </div>
  )
}