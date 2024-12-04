import React from "react";
import CustomInputField from "../../common/CustomInputField";

export default function LookIn(){
    return(
        <div>
            <div className="p-1 align-items-center d-flex justify-content-between">
                <div className="d-flex gap-1  align-items-center">
                    <label>Look-in :</label>
                    <CustomInputField />
                </div>
                <div>
                    <ul className="d-flex gap-2">
                        <li className="fs-5"><i class="fa-solid fa-file-lines text-secondary"></i></li>
                        <li className="fs-5">|</li>
                        <li className="fs-5"><i class="fa-solid fa-share text-secondary"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}