import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import ProjectFrom from "./projectform";
import Setproject from "./setproject";
export default function NewProjectTab() {
    const [Tab, setTab] = useState(0)

    const TabEvent =(num)=>{
        setTab(num)
    }
    return (
        <div className="wrap-summery">
            <ul className="d-flex px-4 pt-3 gap-3 border-b">
                <li className={`pb-3 ${Tab === 0 ? "active" : ""}`} onClick={()=>TabEvent(0)}>project</li>
                <li className={`pb-3 ${Tab === 1 ? "active" : ""}`} onClick={()=> TabEvent(1)}>project settings</li>
            </ul>
            <div className={Tab === 0 ? "d-block" : "d-none"}>
               <ProjectFrom />
            </div>                          
            <div className={Tab === 1 ? "d-block" : "d-none"}>
                <Setproject />
            </div>
            <div className="d-flex justify-content-end p-2">
                <button className="btn btn-primary">save</button>
            </div>
        </div>
    )
}