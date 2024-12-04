import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

export default function PageNum(){
    return(
        <div className="p-3 d-flex justify-content-end">
            <ul className="d-flex gap-2 align-items-center">
                <li><FaChevronLeft fontSize={14}/></li>
                <li>1</li>
                <li>2</li>
                <li><FaChevronRight fontSize={14}/></li>
            </ul>
        </div>
    )
}