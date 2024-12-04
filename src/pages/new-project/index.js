import React, { useState } from "react";
import NewProjectTab from "../../components/project/newproject";
export default function NewProject(){
    const [Tab , SetTab] = useState(0)
    return(
        <div className="wrap-newProject">
            <h2>Add new project</h2>
            <div>
                <NewProjectTab />
            </div>
            <div>
                
            </div>
        </div>
    )
}